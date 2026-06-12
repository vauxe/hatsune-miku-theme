/**
 * Hatsune Miku Theme - HLSL Showcase
 * No color screams. Every color sings.
 * High-Level Shading Language for DirectX
 */

// =============================================================================
// Preprocessor Directives
// =============================================================================

#pragma once
#define MIKU_COLOR float3(0.224, 0.773, 0.733)  // #39C5BB
#define MAX_LIGHTS 8
#define PI 3.14159265359

#ifdef ENABLE_BLOOM
    #define BLOOM_THRESHOLD 0.8
#endif

#ifndef SHADOW_QUALITY
    #define SHADOW_QUALITY 2
#endif

// =============================================================================
// Type Definitions
// =============================================================================

// Typedef for common types
typedef float2 Vector2;
typedef float3 Vector3;
typedef float4 Vector4;
typedef float4x4 Matrix;

// =============================================================================
// Constant Buffers
// =============================================================================

cbuffer PerFrame : register(b0)
{
    float4x4 ViewMatrix;
    float4x4 ProjectionMatrix;
    float4x4 ViewProjectionMatrix;
    float3 CameraPosition;
    float Time;
    float DeltaTime;
    float2 ScreenSize;
};

cbuffer PerObject : register(b1)
{
    float4x4 WorldMatrix;
    float4x4 WorldInverseTranspose;
    float4 ObjectColor;
    float Metallic;
    float Roughness;
    float2 UVScale;
};

cbuffer LightBuffer : register(b2)
{
    float3 LightDirection;
    float LightIntensity;
    float3 LightColor;
    float AmbientIntensity;
    float4 LightPositions[MAX_LIGHTS];
    float4 LightColors[MAX_LIGHTS];
    int ActiveLights;
};

// =============================================================================
// Structures
// =============================================================================

struct VertexInput
{
    float3 Position : POSITION;
    float3 Normal : NORMAL;
    float2 TexCoord : TEXCOORD0;
    float4 Tangent : TANGENT;
    float4 Color : COLOR;
};

struct VertexOutput
{
    float4 Position : SV_POSITION;
    float3 WorldPosition : TEXCOORD0;
    float3 Normal : TEXCOORD1;
    float2 TexCoord : TEXCOORD2;
    float3 Tangent : TEXCOORD3;
    float3 Bitangent : TEXCOORD4;
    float4 Color : COLOR;
};

struct PixelOutput
{
    float4 Color : SV_TARGET0;
    float4 Normal : SV_TARGET1;
    float Depth : SV_DEPTH;
};

// =============================================================================
// Texture and Sampler Declarations
// =============================================================================

Texture2D DiffuseTexture : register(t0);
Texture2D NormalTexture : register(t1);
Texture2D MetallicRoughnessTexture : register(t2);
Texture2D EmissiveTexture : register(t3);
TextureCube EnvironmentMap : register(t4);
Texture2D ShadowMap : register(t5);

SamplerState LinearSampler : register(s0);
SamplerState PointSampler : register(s1);
SamplerComparisonState ShadowSampler : register(s2);

// =============================================================================
// Helper Functions
// =============================================================================

// Fresnel-Schlick approximation
float3 FresnelSchlick(float cosTheta, float3 F0)
{
    return F0 + (1.0 - F0) * pow(1.0 - cosTheta, 5.0);
}

// GGX/Trowbridge-Reitz normal distribution
float DistributionGGX(float3 N, float3 H, float roughness)
{
    float a = roughness * roughness;
    float a2 = a * a;
    float NdotH = max(dot(N, H), 0.0);
    float NdotH2 = NdotH * NdotH;

    float nom = a2;
    float denom = (NdotH2 * (a2 - 1.0) + 1.0);
    denom = PI * denom * denom;

    return nom / denom;
}

// Smith's Schlick-GGX geometry function
float GeometrySchlickGGX(float NdotV, float roughness)
{
    float r = (roughness + 1.0);
    float k = (r * r) / 8.0;

    float nom = NdotV;
    float denom = NdotV * (1.0 - k) + k;

    return nom / denom;
}

float GeometrySmith(float3 N, float3 V, float3 L, float roughness)
{
    float NdotV = max(dot(N, V), 0.0);
    float NdotL = max(dot(N, L), 0.0);
    float ggx2 = GeometrySchlickGGX(NdotV, roughness);
    float ggx1 = GeometrySchlickGGX(NdotL, roughness);

    return ggx1 * ggx2;
}

// Sample normal from normal map
float3 SampleNormal(float2 uv, float3 normal, float3 tangent, float3 bitangent)
{
    float3 normalSample = NormalTexture.Sample(LinearSampler, uv).xyz * 2.0 - 1.0;
    float3x3 TBN = float3x3(tangent, bitangent, normal);
    return normalize(mul(normalSample, TBN));
}

// Miku holographic effect
float3 MikuHolographic(float3 viewDir, float3 normal, float time)
{
    float rim = 1.0 - saturate(dot(viewDir, normal));
    float3 hologramColor = lerp(MIKU_COLOR, float3(0.0, 0.8, 1.0), sin(time * 2.0) * 0.5 + 0.5);
    return hologramColor * pow(rim, 3.0) * (sin(time * 10.0) * 0.5 + 0.5);
}

// =============================================================================
// Vertex Shader
// =============================================================================

VertexOutput VS_Main(VertexInput input)
{
    VertexOutput output;

    // Transform position
    float4 worldPos = mul(float4(input.Position, 1.0), WorldMatrix);
    output.WorldPosition = worldPos.xyz;
    output.Position = mul(worldPos, ViewProjectionMatrix);

    // Transform normal
    output.Normal = normalize(mul(input.Normal, (float3x3)WorldInverseTranspose));

    // Calculate tangent and bitangent
    output.Tangent = normalize(mul(input.Tangent.xyz, (float3x3)WorldMatrix));
    output.Bitangent = cross(output.Normal, output.Tangent) * input.Tangent.w;

    // Pass through texture coordinates
    output.TexCoord = input.TexCoord * UVScale;

    // Vertex color
    output.Color = input.Color;

    return output;
}

// =============================================================================
// Pixel Shader
// =============================================================================

float4 PS_Main(VertexOutput input) : SV_TARGET
{
    // Sample textures
    float4 albedo = DiffuseTexture.Sample(LinearSampler, input.TexCoord) * ObjectColor;
    float2 metallicRoughness = MetallicRoughnessTexture.Sample(LinearSampler, input.TexCoord).bg;
    float metallic = metallicRoughness.x * Metallic;
    float roughness = metallicRoughness.y * Roughness;

    // Get normal
    float3 N = SampleNormal(input.TexCoord, input.Normal, input.Tangent, input.Bitangent);

    // View direction
    float3 V = normalize(CameraPosition - input.WorldPosition);

    // Calculate F0 (surface reflection at zero incidence)
    float3 F0 = float3(0.04, 0.04, 0.04);
    F0 = lerp(F0, albedo.rgb, metallic);

    // Direct lighting
    float3 Lo = float3(0.0, 0.0, 0.0);

    // Main directional light
    {
        float3 L = normalize(-LightDirection);
        float3 H = normalize(V + L);

        float NDF = DistributionGGX(N, H, roughness);
        float G = GeometrySmith(N, V, L, roughness);
        float3 F = FresnelSchlick(max(dot(H, V), 0.0), F0);

        float3 numerator = NDF * G * F;
        float denominator = 4.0 * max(dot(N, V), 0.0) * max(dot(N, L), 0.0) + 0.001;
        float3 specular = numerator / denominator;

        float3 kS = F;
        float3 kD = float3(1.0, 1.0, 1.0) - kS;
        kD *= 1.0 - metallic;

        float NdotL = max(dot(N, L), 0.0);
        Lo += (kD * albedo.rgb / PI + specular) * LightColor * LightIntensity * NdotL;
    }

    // Point lights
    [unroll]
    for (int i = 0; i < ActiveLights; i++)
    {
        float3 lightPos = LightPositions[i].xyz;
        float3 lightColor = LightColors[i].rgb;
        float lightRadius = LightPositions[i].w;

        float3 L = normalize(lightPos - input.WorldPosition);
        float distance = length(lightPos - input.WorldPosition);
        float attenuation = 1.0 / (distance * distance);

        // ... (similar PBR calculation)
        float NdotL = max(dot(N, L), 0.0);
        Lo += albedo.rgb * lightColor * attenuation * NdotL;
    }

    // Ambient / IBL
    float3 ambient = float3(0.03, 0.03, 0.03) * albedo.rgb * AmbientIntensity;

    // Environment reflection
    float3 R = reflect(-V, N);
    float3 envColor = EnvironmentMap.SampleLevel(LinearSampler, R, roughness * 8.0).rgb;
    ambient += envColor * (1.0 - roughness) * metallic * 0.5;

    // Miku holographic effect
    float3 hologram = MikuHolographic(V, N, Time);

    // Emissive
    float3 emissive = EmissiveTexture.Sample(LinearSampler, input.TexCoord).rgb;

    // Final color
    float3 color = ambient + Lo + hologram + emissive;

    // Tone mapping (ACES)
    color = color / (color + float3(1.0, 1.0, 1.0));

    // Gamma correction
    color = pow(color, float3(1.0/2.2, 1.0/2.2, 1.0/2.2));

    return float4(color, albedo.a);
}

// =============================================================================
// Post-Processing Shaders
// =============================================================================

struct PostProcessInput
{
    float4 Position : SV_POSITION;
    float2 TexCoord : TEXCOORD0;
};

Texture2D SceneTexture : register(t0);

float4 PS_Bloom(PostProcessInput input) : SV_TARGET
{
    float4 color = SceneTexture.Sample(LinearSampler, input.TexCoord);

    // Extract bright areas
    float brightness = dot(color.rgb, float3(0.2126, 0.7152, 0.0722));

    #ifdef ENABLE_BLOOM
    if (brightness > BLOOM_THRESHOLD)
    {
        return color;
    }
    #endif

    return float4(0.0, 0.0, 0.0, 1.0);
}

// =============================================================================
// Compute Shader
// =============================================================================

RWTexture2D<float4> OutputTexture : register(u0);

[numthreads(8, 8, 1)]
void CS_ProcessImage(uint3 DTid : SV_DispatchThreadID)
{
    float2 uv = float2(DTid.xy) / ScreenSize;
    float4 color = SceneTexture.Load(int3(DTid.xy, 0));

    // Apply Miku color grading
    color.rgb = lerp(color.rgb, color.rgb * MIKU_COLOR, 0.1);

    OutputTexture[DTid.xy] = color;
}
