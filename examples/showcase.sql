-- Hatsune Miku Theme - SQL Showcase
-- All-Miku Synthesis: Every voice, one stage.

-- ============================================
-- Database Schema for Voice Bank Management
-- ============================================

-- Create database (if supported)
-- CREATE DATABASE miku_stage;
-- USE miku_stage;

-- Enum-like table for Miku versions
-- Keywords: #39C5BB Bold
CREATE TABLE miku_versions (
    id SERIAL PRIMARY KEY,
    version_code VARCHAR(20) NOT NULL UNIQUE,
    version_name VARCHAR(100) NOT NULL,
    release_year INTEGER NOT NULL,
    canonical_color CHAR(7) NOT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert version data
-- Strings: #9CCC65 (Negi Green)
-- Numbers: #E05096 (Magenta)
INSERT INTO miku_versions (version_code, version_name, release_year, canonical_color) VALUES
    ('V2_CLASSIC', 'Hatsune Miku V2', 2007, '#39C5BB'),
    ('V3', 'Hatsune Miku V3', 2013, '#3BC8BE'),
    ('V4X', 'Hatsune Miku V4X', 2016, '#38C4BA'),
    ('NT', 'Hatsune Miku NT', 2020, '#3ED1C8'),
    ('SEKAI', 'Project SEKAI Miku', 2020, '#33CCBB'),
    ('V6_AI', 'Hatsune Miku V6 AI', 2023, '#41D9CF');

-- Voice banks table
CREATE TABLE voice_banks (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(200) NOT NULL,
    version_id INTEGER REFERENCES miku_versions(id),
    frequency_min INTEGER DEFAULT 80,
    frequency_max INTEGER DEFAULT 1100,
    append_type VARCHAR(20),
    metadata JSONB,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    -- Constraints
    CONSTRAINT valid_frequency CHECK (frequency_min < frequency_max),
    CONSTRAINT valid_append_type CHECK (
        append_type IS NULL OR
        append_type IN ('dark', 'soft', 'light', 'sweet', 'vivid', 'solid')
    )
);

-- Create index for performance
CREATE INDEX idx_voice_banks_version ON voice_banks(version_id);
CREATE INDEX idx_voice_banks_active ON voice_banks(is_active) WHERE is_active = TRUE;
CREATE INDEX idx_voice_banks_metadata ON voice_banks USING GIN(metadata);

-- Performances table
CREATE TABLE performances (
    id BIGSERIAL PRIMARY KEY,
    voice_bank_id UUID REFERENCES voice_banks(id) ON DELETE CASCADE,
    song_title VARCHAR(500) NOT NULL,
    bpm INTEGER NOT NULL CHECK (bpm > 0 AND bpm < 300),
    duration_seconds INTEGER NOT NULL CHECK (duration_seconds > 0),
    status VARCHAR(20) DEFAULT 'pending',
    started_at TIMESTAMP,
    completed_at TIMESTAMP,
    metadata JSONB DEFAULT '{}',

    CONSTRAINT valid_status CHECK (
        status IN ('pending', 'preparing', 'performing', 'completed', 'failed')
    )
);

-- ============================================
-- Views
-- ============================================

-- Aggregate view: Functions #00BCD4
CREATE OR REPLACE VIEW performance_stats AS
SELECT
    vb.name AS voice_bank_name,
    mv.version_name,
    mv.canonical_color,
    COUNT(p.id) AS total_performances,
    AVG(p.bpm)::NUMERIC(5,2) AS average_bpm,
    SUM(p.duration_seconds) AS total_duration,
    MIN(p.started_at) AS first_performance,
    MAX(p.completed_at) AS last_performance
FROM voice_banks vb
JOIN miku_versions mv ON vb.version_id = mv.id
LEFT JOIN performances p ON vb.id = p.voice_bank_id
WHERE vb.is_active = TRUE
GROUP BY vb.id, vb.name, mv.version_name, mv.canonical_color
ORDER BY total_performances DESC;

-- ============================================
-- Stored Procedures / Functions
-- ============================================

-- Function to get voice bank by version
-- Function name: #00BCD4 (NT Cyan)
CREATE OR REPLACE FUNCTION get_voice_banks_by_version(
    p_version_code VARCHAR(20)
)
RETURNS TABLE (
    id UUID,
    name VARCHAR(200),
    version_name VARCHAR(100),
    frequency_range INT4RANGE,
    append_type VARCHAR(20)
) AS $$
BEGIN
    RETURN QUERY
    SELECT
        vb.id,
        vb.name,
        mv.version_name,
        int4range(vb.frequency_min, vb.frequency_max, '[]') AS frequency_range,
        vb.append_type
    FROM voice_banks vb
    JOIN miku_versions mv ON vb.version_id = mv.id
    WHERE mv.version_code = p_version_code
      AND vb.is_active = TRUE
    ORDER BY vb.name;
END;
$$ LANGUAGE plpgsql;

-- Function to start a performance
CREATE OR REPLACE FUNCTION start_performance(
    p_voice_bank_id UUID,
    p_song_title VARCHAR(500),
    p_bpm INTEGER
)
RETURNS BIGINT AS $$
DECLARE
    v_performance_id BIGINT;
BEGIN
    -- Validate voice bank exists and is active
    IF NOT EXISTS (
        SELECT 1 FROM voice_banks
        WHERE id = p_voice_bank_id AND is_active = TRUE
    ) THEN
        RAISE EXCEPTION 'Voice bank not found or inactive: %', p_voice_bank_id;
    END IF;

    -- Insert new performance
    INSERT INTO performances (
        voice_bank_id,
        song_title,
        bpm,
        duration_seconds,
        status,
        started_at
    )
    VALUES (
        p_voice_bank_id,
        p_song_title,
        p_bpm,
        0, -- Will be updated on completion
        'performing',
        CURRENT_TIMESTAMP
    )
    RETURNING id INTO v_performance_id;

    RETURN v_performance_id;
END;
$$ LANGUAGE plpgsql;

-- ============================================
-- Complex Queries
-- ============================================

-- CTE (Common Table Expression) example
WITH recent_performances AS (
    SELECT
        p.*,
        vb.name AS voice_bank_name,
        ROW_NUMBER() OVER (
            PARTITION BY p.voice_bank_id
            ORDER BY p.started_at DESC
        ) AS rn
    FROM performances p
    JOIN voice_banks vb ON p.voice_bank_id = vb.id
    WHERE p.started_at >= CURRENT_DATE - INTERVAL '30 days'
),
performance_rankings AS (
    SELECT
        voice_bank_name,
        song_title,
        bpm,
        started_at,
        RANK() OVER (ORDER BY bpm DESC) AS bpm_rank
    FROM recent_performances
    WHERE rn = 1
)
SELECT * FROM performance_rankings
WHERE bpm_rank <= 10;

-- Window functions example
SELECT
    vb.name,
    p.song_title,
    p.bpm,
    p.duration_seconds,
    SUM(p.duration_seconds) OVER (
        PARTITION BY vb.id
        ORDER BY p.started_at
        ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
    ) AS cumulative_duration,
    AVG(p.bpm) OVER (
        PARTITION BY vb.id
    ) AS avg_bpm_for_voice,
    LAG(p.song_title) OVER (
        PARTITION BY vb.id
        ORDER BY p.started_at
    ) AS previous_song,
    LEAD(p.song_title) OVER (
        PARTITION BY vb.id
        ORDER BY p.started_at
    ) AS next_song
FROM performances p
JOIN voice_banks vb ON p.voice_bank_id = vb.id
WHERE p.status = 'completed'
ORDER BY vb.name, p.started_at;

-- JSON operations
SELECT
    vb.name,
    vb.metadata->>'description' AS description,
    vb.metadata->'tags' AS tags,
    jsonb_array_length(vb.metadata->'tags') AS tag_count
FROM voice_banks vb
WHERE vb.metadata @> '{"featured": true}'
   OR vb.metadata ? 'special_edition';

-- Full-text search
SELECT
    id,
    song_title,
    ts_rank(
        to_tsvector('english', song_title),
        plainto_tsquery('english', 'world mine')
    ) AS relevance
FROM performances
WHERE to_tsvector('english', song_title) @@ plainto_tsquery('english', 'world mine')
ORDER BY relevance DESC
LIMIT 10;

-- ============================================
-- Triggers
-- ============================================

-- Update timestamp trigger
CREATE OR REPLACE FUNCTION update_timestamp()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER voice_banks_updated
    BEFORE UPDATE ON voice_banks
    FOR EACH ROW
    EXECUTE FUNCTION update_timestamp();

-- ============================================
-- Permissions (DCL)
-- ============================================

-- Grant permissions
GRANT SELECT ON ALL TABLES IN SCHEMA public TO readonly_user;
GRANT SELECT, INSERT, UPDATE ON voice_banks, performances TO app_user;
GRANT EXECUTE ON FUNCTION start_performance TO app_user;

-- Revoke permissions
REVOKE DELETE ON performances FROM app_user;
