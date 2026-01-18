# Hatsune Miku Theme - Makefile Showcase
# Common build automation file

# Variables
PROJECT_NAME := miku-synthesizer
VERSION := 3.9.39
BUILD_DIR := build
SRC_DIR := src
INSTALL_PREFIX := /usr/local

# Compiler settings
CC := gcc
CXX := g++
CFLAGS := -Wall -Wextra -O2 -std=c11
CXXFLAGS := -Wall -Wextra -O2 -std=c++17
LDFLAGS := -lpthread -lm
DEBUG_FLAGS := -g -DDEBUG

# Source files
SOURCES := $(wildcard $(SRC_DIR)/*.c)
OBJECTS := $(SOURCES:$(SRC_DIR)/%.c=$(BUILD_DIR)/%.o)
HEADERS := $(wildcard $(SRC_DIR)/*.h)

# Conditional assignment
TARGET ?= release
ifeq ($(TARGET),debug)
    CFLAGS += $(DEBUG_FLAGS)
endif

# Colors for output (Miku theme!)
COLOR_TEAL := \033[38;2;57;197;187m
COLOR_PINK := \033[38;2;255;107;157m
COLOR_RESET := \033[0m

# Phony targets
.PHONY: all clean install uninstall test docs help

# Default target
all: $(BUILD_DIR)/$(PROJECT_NAME)
	@echo "$(COLOR_TEAL)Build complete!$(COLOR_RESET)"

# Main executable
$(BUILD_DIR)/$(PROJECT_NAME): $(OBJECTS) | $(BUILD_DIR)
	$(CC) $(CFLAGS) -o $@ $^ $(LDFLAGS)

# Object files
$(BUILD_DIR)/%.o: $(SRC_DIR)/%.c $(HEADERS) | $(BUILD_DIR)
	$(CC) $(CFLAGS) -c -o $@ $<

# Create build directory
$(BUILD_DIR):
	mkdir -p $(BUILD_DIR)

# Clean build artifacts
clean:
	rm -rf $(BUILD_DIR)
	@echo "$(COLOR_PINK)Cleaned!$(COLOR_RESET)"

# Install to system
install: $(BUILD_DIR)/$(PROJECT_NAME)
	install -d $(INSTALL_PREFIX)/bin
	install -m 755 $(BUILD_DIR)/$(PROJECT_NAME) $(INSTALL_PREFIX)/bin/
	@echo "Installed to $(INSTALL_PREFIX)/bin"

# Uninstall from system
uninstall:
	rm -f $(INSTALL_PREFIX)/bin/$(PROJECT_NAME)

# Run tests
test: $(BUILD_DIR)/$(PROJECT_NAME)
	@echo "Running tests..."
	./$(BUILD_DIR)/$(PROJECT_NAME) --test
	@echo "$(COLOR_TEAL)All tests passed!$(COLOR_RESET)"

# Generate documentation
docs:
	doxygen Doxyfile
	@echo "Documentation generated in docs/"

# Debug build
debug: CFLAGS += $(DEBUG_FLAGS)
debug: clean all

# Release build with optimizations
release: CFLAGS += -O3 -DNDEBUG
release: clean all

# Static analysis
lint:
	cppcheck --enable=all $(SRC_DIR)
	clang-tidy $(SOURCES) -- $(CFLAGS)

# Format code
format:
	clang-format -i $(SOURCES) $(HEADERS)

# Show help
help:
	@echo "$(COLOR_TEAL)$(PROJECT_NAME) v$(VERSION)$(COLOR_RESET)"
	@echo ""
	@echo "Targets:"
	@echo "  all      - Build the project (default)"
	@echo "  clean    - Remove build artifacts"
	@echo "  install  - Install to $(INSTALL_PREFIX)"
	@echo "  test     - Run tests"
	@echo "  debug    - Build with debug symbols"
	@echo "  release  - Build optimized release"
	@echo "  docs     - Generate documentation"
	@echo "  help     - Show this help"

# Define function
define print_header
	@echo "================================"
	@echo "  $(1)"
	@echo "================================"
endef

# Use function
info:
	$(call print_header,Build Information)
	@echo "Project: $(PROJECT_NAME)"
	@echo "Version: $(VERSION)"
	@echo "Compiler: $(CC)"
	@echo "Flags: $(CFLAGS)"

# Pattern rule for assembly
%.s: %.c
	$(CC) $(CFLAGS) -S -o $@ $<

# Include dependencies if they exist
-include $(OBJECTS:.o=.d)

# Generate dependency files
$(BUILD_DIR)/%.d: $(SRC_DIR)/%.c | $(BUILD_DIR)
	$(CC) $(CFLAGS) -MM -MT $(@:.d=.o) $< > $@
