/**
 * Hatsune Miku Theme - C Showcase
 * All-Miku Synthesis: Every voice, one stage.
 */

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>
#include <stdint.h>
#include <stddef.h>

/* Macro definitions: #E05096 (Magenta LED - Rhythm) */
#define CANONICAL_COLOR "#39C5BB"
#define DEFAULT_BPM 39
#define MAX_ENERGY 100
#define MAX_NAME_LENGTH 64
#define ARRAY_SIZE(arr) (sizeof(arr) / sizeof((arr)[0]))

/* Conditional compilation */
#ifdef DEBUG
    #define LOG(fmt, ...) printf("[DEBUG] " fmt "\n", ##__VA_ARGS__)
#else
    #define LOG(fmt, ...) ((void)0)
#endif

/* Enum: #B2EBE7 Bold, EnumMember: #E05096 */
typedef enum {
    MIKU_V2_CLASSIC = 0,
    MIKU_V3,
    MIKU_V4X,
    MIKU_NT,
    MIKU_SEKAI,
    MIKU_V6_AI
} MikuVersion;

typedef enum {
    STAGE_IDLE = 0,
    STAGE_PERFORMING,
    STAGE_HOLOGRAPHIC
} StageMode;

/* Struct: #B2EBE7 Bold (Ice Teal) */
typedef struct {
    char name[MAX_NAME_LENGTH];    /* Member: #90B8B2 */
    MikuVersion version;
    int frequency_min;
    int frequency_max;
    bool is_active;
} VoiceBank;

/* Forward declaration */
typedef struct DigitalDiva DigitalDiva;

/* Function pointer type */
typedef int (*SongProcessor)(const char* song, void* context);

/* Main struct with function pointers */
struct DigitalDiva {
    char name[MAX_NAME_LENGTH];
    VoiceBank voice_bank;
    int energy;
    StageMode mode;
    void* user_data;

    /* Method-like function pointers */
    int (*sing)(DigitalDiva* self, const char* song);
    MikuVersion (*get_version)(const DigitalDiva* self);
    void (*destroy)(DigitalDiva* self);
};

/* Static constant: #E05096 */
static const char* const VOICE_TYPES[] = {
    "dark", "soft", "light", "sweet", "vivid", "solid"
};

/* Global variable */
static int g_performance_count = 0;

/* Function prototypes: #00BCD4 (NT Cyan) */
DigitalDiva* digital_diva_create(const char* name, MikuVersion version);
void digital_diva_destroy(DigitalDiva* diva);
int digital_diva_sing(DigitalDiva* self, const char* song);
MikuVersion digital_diva_get_version(const DigitalDiva* self);
const char* get_canonical_color(void);

/* Inline function (C99) */
static inline int clamp(int value, int min, int max) {
    if (value < min) return min;
    if (value > max) return max;
    return value;
}

/* Version string helper */
static const char* version_to_string(MikuVersion version) {
    /* Switch: Keywords #39C5BB Bold */
    switch (version) {
        case MIKU_V2_CLASSIC: return "V2 Classic";
        case MIKU_V3:         return "V3";
        case MIKU_V4X:        return "V4X";
        case MIKU_NT:         return "NT";
        case MIKU_SEKAI:      return "SEKAI";
        case MIKU_V6_AI:      return "V6 AI";
        default:              return "Unknown";
    }
}

/* Constructor function: #00BCD4 */
DigitalDiva* digital_diva_create(const char* name, MikuVersion version) {
    DigitalDiva* diva = (DigitalDiva*)malloc(sizeof(DigitalDiva));

    /* Keywords: #39C5BB Bold */
    if (diva == NULL) {
        fprintf(stderr, "Error: Memory allocation failed\n");
        return NULL;
    }

    /* Initialize fields */
    strncpy(diva->name, name, MAX_NAME_LENGTH - 1);
    diva->name[MAX_NAME_LENGTH - 1] = '\0';

    /* Initialize voice bank */
    strncpy(diva->voice_bank.name, name, MAX_NAME_LENGTH - 1);
    diva->voice_bank.version = version;
    diva->voice_bank.frequency_min = 80;
    diva->voice_bank.frequency_max = 1100;
    diva->voice_bank.is_active = true;

    diva->energy = MAX_ENERGY;
    diva->mode = STAGE_IDLE;
    diva->user_data = NULL;

    /* Assign method pointers */
    diva->sing = digital_diva_sing;
    diva->get_version = digital_diva_get_version;
    diva->destroy = digital_diva_destroy;

    return diva;
}

/* Destructor function */
void digital_diva_destroy(DigitalDiva* diva) {
    if (diva != NULL) {
        if (diva->user_data != NULL) {
            free(diva->user_data);
        }
        free(diva);
    }
}

/* Method implementation: #00BCD4 (NT Cyan) */
int digital_diva_sing(DigitalDiva* self, const char* song) {
    /* Null check */
    if (self == NULL || song == NULL) {
        return -1;
    }

    /* Energy check */
    if (self->energy < 10) {
        /* Error: #FF5370 */
        fprintf(stderr, "Error: Low energy - Please recharge with leeks\n");
        return -1;
    }

    /* String: #9CCC65 (Negi Green) */
    printf("[MIKU] Now singing: %s\n", song);
    printf("       Version: %s\n", version_to_string(self->voice_bank.version));

    self->energy -= 10;
    g_performance_count++;

    return 0;
}

/* Const method */
MikuVersion digital_diva_get_version(const DigitalDiva* self) {
    if (self == NULL) {
        return MIKU_V2_CLASSIC;
    }
    return self->voice_bank.version;
}

/* Static function: #00BCD4 Underline */
const char* get_canonical_color(void) {
    return CANONICAL_COLOR;
}

/* Variadic function */
void log_message(const char* format, ...) {
    va_list args;
    va_start(args, format);
    vprintf(format, args);
    va_end(args);
    printf("\n");
}

/* Callback example */
int process_songs(const char** songs, size_t count, SongProcessor processor, void* context) {
    int result = 0;

    /* Loop: Keywords #39C5BB Bold */
    for (size_t i = 0; i < count; i++) {
        if (processor(songs[i], context) != 0) {
            result = -1;
            break;
        }
    }

    return result;
}

/* Callback implementation */
static int print_song(const char* song, void* context) {
    int* counter = (int*)context;
    printf("[%d] %s\n", ++(*counter), song);
    return 0;
}

/* Bit manipulation example */
typedef uint32_t StageFlags;
#define FLAG_LIGHTS    (1U << 0)
#define FLAG_SMOKE     (1U << 1)
#define FLAG_HOLOGRAMS (1U << 2)

static inline void set_flag(StageFlags* flags, StageFlags flag) {
    *flags |= flag;
}

static inline void clear_flag(StageFlags* flags, StageFlags flag) {
    *flags &= ~flag;
}

static inline bool has_flag(StageFlags flags, StageFlags flag) {
    return (flags & flag) != 0;
}

/* Main function */
int main(int argc, char* argv[]) {
    /* Variable declarations */
    DigitalDiva* miku = NULL;
    int counter = 0;
    StageFlags stage_flags = 0;

    /* Create instance using constructor */
    miku = digital_diva_create("Hatsune Miku", MIKU_V2_CLASSIC);
    if (miku == NULL) {
        return EXIT_FAILURE;
    }

    /* Compound literal (C99) */
    const char* songs[] = {"Melt", "World is Mine", "Rolling Girl"};
    size_t song_count = ARRAY_SIZE(songs);

    /* Use method pointer */
    miku->sing(miku, "World is Mine");

    /* Process with callback */
    process_songs(songs, song_count, print_song, &counter);

    /* Bit flags */
    set_flag(&stage_flags, FLAG_LIGHTS | FLAG_HOLOGRAMS);

    if (has_flag(stage_flags, FLAG_HOLOGRAMS)) {
        printf("Holographic stage enabled!\n");
    }

    /* Designated initializers (C99) */
    VoiceBank append_voice = {
        .name = "Miku Append",
        .version = MIKU_V2_CLASSIC,
        .frequency_min = 80,
        .frequency_max = 1100,
        .is_active = true
    };

    printf("Voice: %s (%s)\n", append_voice.name,
           version_to_string(append_voice.version));

    /* Cleanup */
    miku->destroy(miku);
    miku = NULL;

    printf("Total performances: %d\n", g_performance_count);

    return EXIT_SUCCESS;
}
