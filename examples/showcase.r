# Hatsune Miku Theme - R Showcase
# No color screams. Every color sings.

# Load libraries
library(tidyverse)
library(R6)

# Constants
CANONICAL_COLOR <- "#39C5BB"
DEFAULT_BPM <- 39L
MAX_ENERGY <- 100L

# Named vector (enum-like)
MikuVersion <- c(
  V2_CLASSIC = "V2",
  V3 = "V3",
  V4X = "V4X",
  NT = "NT",
  SEKAI = "SEKAI"
)

# Simple function
format_song <- function(title, bpm = 120) {
  sprintf("[MIKU] %s @ %dBPM", title, bpm)
}

# Function with multiple arguments
process_voice <- function(name,
                          version = "V2",
                          frequency_range = c(80, 1100),
                          ...) {
  # ... for additional arguments
  extra_args <- list(...)

  list(
    name = name,
    version = version,
    frequency_range = frequency_range,
    extra = extra_args
  )
}

# Anonymous function (lambda)
double <- function(x) x * 2

# R 4.1+ shorthand
triple <- \(x) x * 3

# R6 Class (OOP)
VoiceBank <- R6Class("VoiceBank",
  public = list(
    name = NULL,
    version = NULL,
    frequency_range = NULL,
    active = TRUE,

    initialize = function(name = "Unknown", version = "V2") {
      self$name <- name
      self$version <- version
      self$frequency_range <- c(80, 1100)
    },

    get_info = function() {
      sprintf("%s (%s)", self$name, self$version)
    },

    print = function() {
      cat("VoiceBank:", self$get_info(), "\n")
    }
  )
)

# R6 Class with private members
DigitalDiva <- R6Class("DigitalDiva",
  public = list(
    name = NULL,
    voice_bank = NULL,
    current_song = NULL,

    initialize = function(name = "Hatsune Miku", version = "V2") {
      self$name <- name
      self$voice_bank <- VoiceBank$new(name, version)
      private$.energy <- MAX_ENERGY
    },

    # Getter
    get_energy = function() {
      private$.energy
    },

    # Setter
    set_energy = function(value) {
      private$.energy <- max(0, min(MAX_ENERGY, value))
    },

    sing = function(song) {
      if (private$.energy < 10) {
        stop("Low energy: Please recharge with leeks")
      }
      private$.energy <- private$.energy - 10
      self$current_song <- song
      sprintf("[MIKU] Now singing: %s", song)
    },

    sing_at = function(song, bpm = 120) {
      result <- self$sing(song)
      sprintf("%s @ %dBPM", result, bpm)
    }
  ),

  private = list(
    .energy = 100
  ),

  active = list(
    # Active binding (computed property)
    energy = function(value) {
      if (missing(value)) {
        private$.energy
      } else {
        private$.energy <- max(0, min(MAX_ENERGY, value))
      }
    }
  )
)

# Vectors and operations
vector_showcase <- function() {
  # Numeric vector
  numbers <- c(1, 2, 3, 4, 5)
  sequence <- 1:10
  by_step <- seq(0, 100, by = 10)

  # Character vector
  songs <- c("Melt", "World is Mine", "Love is War")

  # Logical vector
  flags <- c(TRUE, FALSE, TRUE)

  # Named vector
  colors <- c(miku = "#39C5BB", rin = "#FFCC00")

  # Vector operations
  doubled <- numbers * 2
  sum_all <- sum(numbers)
  mean_val <- mean(numbers)

  # Subsetting
  first <- numbers[1]
  slice <- numbers[1:3]
  filtered <- numbers[numbers > 3]
  by_name <- colors["miku"]

  # Vectorized operations
  lengths <- nchar(songs)
  upper <- toupper(songs)

  list(numbers = numbers, songs = songs)
}

# Data frames
dataframe_showcase <- function() {
  # Create data frame
  songs_df <- data.frame(
    title = c("Melt", "World is Mine", "Love is War"),
    bpm = c(120, 180, 160),
    duration = c(4.5, 4.1, 3.8),
    stringsAsFactors = FALSE
  )

  # Tibble (tidyverse)
  songs_tibble <- tibble(
    title = c("Melt", "World is Mine", "Love is War"),
    bpm = c(120, 180, 160),
    duration = c(4.5, 4.1, 3.8)
  )

  # Access columns
  titles <- songs_df$title
  titles2 <- songs_df[["title"]]
  first_row <- songs_df[1, ]
  subset <- songs_df[songs_df$bpm > 150, ]

  # dplyr operations
  result <- songs_tibble %>%
    filter(bpm > 100) %>%
    mutate(
      formatted = sprintf("%s @ %dBPM", title, bpm),
      length_category = if_else(duration > 4, "Long", "Short")
    ) %>%
    arrange(desc(bpm)) %>%
    select(title, formatted)

  # Summarize
  summary <- songs_tibble %>%
    summarize(
      count = n(),
      avg_bpm = mean(bpm),
      total_duration = sum(duration)
    )

  result
}

# Control flow
control_flow_showcase <- function(energy) {
  # If-else
  if (energy > 80) {
    status <- "Full power"
  } else if (energy > 50) {
    status <- "Normal"
  } else {
    status <- "Low"
  }

  # Vectorized if-else
  energies <- c(90, 60, 30)
  statuses <- ifelse(energies > 50, "Good", "Bad")

  # dplyr case_when
  detailed <- case_when(
    energy > 80 ~ "Full",
    energy > 50 ~ "Normal",
    energy > 20 ~ "Low",
    TRUE ~ "Critical"
  )

  # For loop
  songs <- c("A", "B", "C")
  for (song in songs) {
    print(song)
  }

  # For with index
  for (i in seq_along(songs)) {
    print(sprintf("%d: %s", i, songs[i]))
  }

  # While loop
  count <- 0
  while (count < 5) {
    count <- count + 1
  }

  # Repeat (infinite loop with break)
  repeat {
    count <- count - 1
    if (count <= 0) break
  }

  status
}

# Apply family
apply_showcase <- function() {
  # Matrix for apply
  m <- matrix(1:9, nrow = 3)

  # Apply over rows (1) or columns (2)
  row_sums <- apply(m, 1, sum)
  col_means <- apply(m, 2, mean)

  # lapply - returns list
  songs <- list("Melt", "World", "Love")
  lengths <- lapply(songs, nchar)

  # sapply - simplifies to vector
  lengths_vec <- sapply(songs, nchar)

  # vapply - with type checking
  lengths_safe <- vapply(songs, nchar, integer(1))

  # Map (parallel apply)
  titles <- c("A", "B")
  bpms <- c(120, 180)
  formatted <- Map(function(t, b) sprintf("%s @ %d", t, b), titles, bpms)

  # purrr map functions
  songs_list <- list("Melt", "World", "Love")
  upper_songs <- map(songs_list, toupper)
  upper_chr <- map_chr(songs_list, toupper)
  lengths_int <- map_int(songs_list, nchar)

  lengths_vec
}

# Error handling
error_handling <- function() {
  # tryCatch
  result <- tryCatch(
    {
      # Try block
      x <- 1 / 0
      x
    },
    warning = function(w) {
      message("Warning: ", w$message)
      NA
    },
    error = function(e) {
      message("Error: ", e$message)
      NA
    },
    finally = {
      message("Cleanup")
    }
  )

  # stop() for errors
  validate_energy <- function(e) {
    if (e < 0) stop("Energy cannot be negative")
    if (e > 100) warning("Energy exceeds maximum")
    e
  }

  # stopifnot for assertions
  check_song <- function(title) {
    stopifnot(
      is.character(title),
      nchar(title) > 0
    )
    title
  }

  result
}

# Plotting (ggplot2)
plot_showcase <- function() {
  # Sample data
  data <- tibble(
    song = c("Melt", "World is Mine", "Love is War", "Rolling Girl"),
    plays = c(1000, 1500, 1200, 800),
    rating = c(4.5, 4.8, 4.6, 4.3)
  )

  # Bar plot
  p1 <- ggplot(data, aes(x = reorder(song, -plays), y = plays, fill = song)) +
    geom_bar(stat = "identity") +
    labs(title = "Song Plays", x = "Song", y = "Plays") +
    theme_minimal() +
    theme(legend.position = "none")

  # Scatter plot
  p2 <- ggplot(data, aes(x = plays, y = rating)) +
    geom_point(size = 3, color = CANONICAL_COLOR) +
    geom_smooth(method = "lm", se = FALSE) +
    labs(title = "Plays vs Rating")

  list(bar = p1, scatter = p2)
}

# Main execution
main <- function() {
  miku <- DigitalDiva$new("Hatsune Miku", "V2")
  songs <- c("Melt", "World is Mine", "Love is War")

  cat("=== Performance Start ===\n")

  for (song in songs) {
    result <- tryCatch(
      miku$sing(song),
      error = function(e) {
        message("Error: ", e$message)
        NULL
      }
    )

    if (!is.null(result)) {
      cat(result, "\n")
    } else {
      break
    }
  }

  cat(sprintf("Final energy: %d\n", miku$get_energy()))
  cat("=== Performance Complete ===\n")
}

# Run main
main()
