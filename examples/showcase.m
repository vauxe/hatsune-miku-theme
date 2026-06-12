/**
 * Hatsune Miku Theme - Objective-C Showcase
 * No color screams. Every color sings.
 */

#import <Foundation/Foundation.h>

// Constants
static NSString *const kCanonicalColor = @"#39C5BB";
static const NSInteger kDefaultBPM = 39;
static const NSInteger kMaxEnergy = 100;

// Enum with NS_ENUM macro
typedef NS_ENUM(NSInteger, MikuVersion) {
    MikuVersionV2Classic = 0,
    MikuVersionV3,
    MikuVersionV4X,
    MikuVersionNT,
    MikuVersionSekai
};

// Options enum
typedef NS_OPTIONS(NSUInteger, StageMode) {
    StageModeIdle       = 0,
    StageModePerforming = 1 << 0,
    StageModeHolographic = 1 << 1
};

// Protocol (Interface)
@protocol Synthesizer <NSObject>
@required
- (NSString *)sing:(NSString *)song;
- (MikuVersion)version;

@optional
- (void)warmUp;
@end

// Forward declaration
@class DigitalDiva;

// Delegate protocol
@protocol DigitalDivaDelegate <NSObject>
@optional
- (void)diva:(DigitalDiva *)diva didStartSong:(NSString *)song;
- (void)diva:(DigitalDiva *)diva didFinishSong:(NSString *)song;
- (void)diva:(DigitalDiva *)diva didEncounterError:(NSError *)error;
@end

// VoiceBank interface
@interface VoiceBank : NSObject <NSCopying>

@property (nonatomic, copy, readonly) NSString *name;
@property (nonatomic, assign, readonly) MikuVersion version;
@property (nonatomic, strong, readonly) NSArray<NSNumber *> *frequencyRange;
@property (nonatomic, assign, getter=isActive) BOOL active;

// Designated initializer
- (instancetype)initWithName:(NSString *)name
                     version:(MikuVersion)version NS_DESIGNATED_INITIALIZER;

// Convenience initializers
- (instancetype)initWithName:(NSString *)name;
+ (instancetype)voiceBankWithName:(NSString *)name version:(MikuVersion)version;

@end

// VoiceBank implementation
@implementation VoiceBank

- (instancetype)init {
    return [self initWithName:@"Unknown" version:MikuVersionV2Classic];
}

- (instancetype)initWithName:(NSString *)name version:(MikuVersion)version {
    self = [super init];
    if (self) {
        _name = [name copy];
        _version = version;
        _frequencyRange = @[@80, @1100];
        _active = YES;
    }
    return self;
}

- (instancetype)initWithName:(NSString *)name {
    return [self initWithName:name version:MikuVersionV2Classic];
}

+ (instancetype)voiceBankWithName:(NSString *)name version:(MikuVersion)version {
    return [[self alloc] initWithName:name version:version];
}

// NSCopying
- (id)copyWithZone:(NSZone *)zone {
    VoiceBank *copy = [[VoiceBank allocWithZone:zone] initWithName:self.name
                                                           version:self.version];
    copy.active = self.active;
    return copy;
}

- (NSString *)description {
    return [NSString stringWithFormat:@"VoiceBank(%@, %ld)", self.name, (long)self.version];
}

@end

// DigitalDiva interface
@interface DigitalDiva : NSObject <Synthesizer>

@property (nonatomic, copy, readonly) NSString *name;
@property (nonatomic, strong, readonly) VoiceBank *voiceBank;
@property (nonatomic, assign) NSInteger energy;
@property (nonatomic, copy) NSString *currentSong;
@property (nonatomic, weak) id<DigitalDivaDelegate> delegate;

// Class property
@property (class, nonatomic, readonly) NSString *modelID;

// Initializers
- (instancetype)initWithName:(NSString *)name
                     version:(MikuVersion)version NS_DESIGNATED_INITIALIZER;
- (instancetype)initWithName:(NSString *)name;

// Async methods
- (void)singAsync:(NSString *)song
       completion:(void (^)(NSString *result, NSError *error))completion;

// Block-based API
- (void)performConcert:(NSArray<NSString *> *)songs
          progressBlock:(void (^)(NSString *song, NSInteger index))progress
            completion:(void (^)(BOOL success))completion;

@end

// DigitalDiva implementation
@implementation DigitalDiva

static NSString *_modelID = @"CV01";

+ (NSString *)modelID {
    return _modelID;
}

- (instancetype)init {
    return [self initWithName:@"Hatsune Miku" version:MikuVersionV2Classic];
}

- (instancetype)initWithName:(NSString *)name version:(MikuVersion)version {
    self = [super init];
    if (self) {
        _name = [name copy];
        _voiceBank = [[VoiceBank alloc] initWithName:name version:version];
        _energy = kMaxEnergy;
    }
    return self;
}

- (instancetype)initWithName:(NSString *)name {
    return [self initWithName:name version:MikuVersionV2Classic];
}

// Custom setter
- (void)setEnergy:(NSInteger)energy {
    _energy = MAX(0, MIN(kMaxEnergy, energy));
}

#pragma mark - Synthesizer Protocol

- (NSString *)sing:(NSString *)song {
    if (self.energy < 10) {
        @throw [NSException exceptionWithName:@"LowEnergyException"
                                       reason:@"Low energy: Please recharge with leeks"
                                     userInfo:nil];
    }

    self.energy -= 10;
    self.currentSong = song;

    if ([self.delegate respondsToSelector:@selector(diva:didStartSong:)]) {
        [self.delegate diva:self didStartSong:song];
    }

    return [NSString stringWithFormat:@"[MIKU] Now singing: %@", song];
}

- (MikuVersion)version {
    return self.voiceBank.version;
}

- (void)warmUp {
    NSLog(@"Warming up voice...");
}

#pragma mark - Async Methods

- (void)singAsync:(NSString *)song
       completion:(void (^)(NSString *result, NSError *error))completion {
    dispatch_async(dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_DEFAULT, 0), ^{
        @try {
            NSString *result = [self sing:song];
            dispatch_async(dispatch_get_main_queue(), ^{
                if (completion) {
                    completion(result, nil);
                }
            });
        } @catch (NSException *exception) {
            NSError *error = [NSError errorWithDomain:@"MikuErrorDomain"
                                                 code:1
                                             userInfo:@{NSLocalizedDescriptionKey: exception.reason}];
            dispatch_async(dispatch_get_main_queue(), ^{
                if (completion) {
                    completion(nil, error);
                }
            });
        }
    });
}

- (void)performConcert:(NSArray<NSString *> *)songs
          progressBlock:(void (^)(NSString *song, NSInteger index))progress
            completion:(void (^)(BOOL success))completion {
    dispatch_async(dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_DEFAULT, 0), ^{
        BOOL success = YES;

        [songs enumerateObjectsUsingBlock:^(NSString *song, NSUInteger idx, BOOL *stop) {
            @try {
                [self sing:song];
                if (progress) {
                    dispatch_async(dispatch_get_main_queue(), ^{
                        progress(song, idx);
                    });
                }
                [NSThread sleepForTimeInterval:0.1];
            } @catch (NSException *exception) {
                *stop = YES;
            }
        }];

        dispatch_async(dispatch_get_main_queue(), ^{
            if (completion) {
                completion(success);
            }
        });
    });
}

#pragma mark - NSObject

- (NSString *)description {
    return [NSString stringWithFormat:@"DigitalDiva<%@, energy=%ld>", self.name, (long)self.energy];
}

- (BOOL)isEqual:(id)object {
    if (![object isKindOfClass:[DigitalDiva class]]) {
        return NO;
    }
    DigitalDiva *other = (DigitalDiva *)object;
    return [self.name isEqualToString:other.name] && self.version == other.version;
}

- (NSUInteger)hash {
    return self.name.hash ^ self.version;
}

@end

// Category (extension)
@interface NSString (MikuAdditions)
- (NSString *)miku_formatted;
@end

@implementation NSString (MikuAdditions)
- (NSString *)miku_formatted {
    return [NSString stringWithFormat:@"[MIKU] %@", self];
}
@end

// Main
int main(int argc, const char * argv[]) {
    @autoreleasepool {
        // Object creation
        DigitalDiva *miku = [[DigitalDiva alloc] initWithName:@"Hatsune Miku"
                                                      version:MikuVersionV2Classic];

        NSArray<NSString *> *songs = @[@"Melt", @"World is Mine", @"Love is War"];

        NSLog(@"=== Performance Start ===");

        // Fast enumeration
        for (NSString *song in songs) {
            @try {
                NSString *result = [miku sing:song];
                NSLog(@"%@", result);
            } @catch (NSException *exception) {
                NSLog(@"Error: %@", exception.reason);
                break;
            }
        }

        // Block enumeration
        [songs enumerateObjectsUsingBlock:^(NSString *song, NSUInteger idx, BOOL *stop) {
            NSLog(@"%lu: %@", (unsigned long)idx, song);
        }];

        // Collection operations
        NSArray *uppercased = [songs valueForKey:@"uppercaseString"];
        NSPredicate *predicate = [NSPredicate predicateWithFormat:@"length > 5"];
        NSArray *longSongs = [songs filteredArrayUsingPredicate:predicate];

        // Dictionary
        NSDictionary *config = @{
            @"name": @"Miku",
            @"version": @(MikuVersionV2Classic),
            @"settings": @{
                @"bpm": @120,
                @"autoTune": @YES
            }
        };

        NSNumber *bpm = config[@"settings"][@"bpm"];
        NSLog(@"BPM: %@", bpm);

        NSLog(@"Final energy: %ld", (long)miku.energy);
        NSLog(@"=== Performance Complete ===");
    }
    return 0;
}
