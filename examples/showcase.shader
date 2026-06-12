// Hatsune Miku Theme - Unity ShaderLab Showcase
// No color screams. Every color sings.

Shader "MikuTheme/Holographic"
{
    // ==========================================================================
    // Properties Block
    // ==========================================================================
    Properties
    {
        // Textures
        _MainTex ("Albedo (RGB)", 2D) = "white" {}
        _BumpMap ("Normal Map", 2D) = "bump" {}
        _MetallicGlossMap ("Metallic (R) Smoothness (A)", 2D) = "white" {}
        _EmissionMap ("Emission", 2D) = "black" {}
        _OcclusionMap ("Occlusion", 2D) = "white" {}

        // Colors
        _Color ("Color Tint", Color) = (1, 1, 1, 1)
        _EmissionColor ("Emission Color", Color) = (0, 0, 0, 1)
        [HDR] _MikuColor ("Miku Color", Color) = (0.224, 0.773, 0.733, 1)

        // Surface properties
        _Metallic ("Metallic", Range(0, 1)) = 0.0
        _Smoothness ("Smoothness", Range(0, 1)) = 0.5
        _BumpScale ("Normal Scale", Float) = 1.0
        _OcclusionStrength ("Occlusion Strength", Range(0, 1)) = 1.0

        // Holographic effect
        _HologramIntensity ("Hologram Intensity", Range(0, 1)) = 0.5
        _HologramSpeed ("Hologram Speed", Range(0, 10)) = 2.0
        _ScanlineCount ("Scanline Count", Range(0, 1000)) = 100
        _ScanlineSpeed ("Scanline Speed", Range(0, 10)) = 1.0

        // Rim lighting
        _RimColor ("Rim Color", Color) = (0.224, 0.773, 0.733, 1)
        _RimPower ("Rim Power", Range(0.5, 8)) = 3.0
        _RimIntensity ("Rim Intensity", Range(0, 2)) = 1.0

        // Rendering options
        [Enum(UnityEngine.Rendering.CullMode)] _Cull ("Cull Mode", Float) = 2
        [Enum(UnityEngine.Rendering.BlendMode)] _SrcBlend ("Src Blend", Float) = 1
        [Enum(UnityEngine.Rendering.BlendMode)] _DstBlend ("Dst Blend", Float) = 0
        [Toggle] _ZWrite ("Z Write", Float) = 1
    }

    // ==========================================================================
    // SubShader - Standard Quality
    // ==========================================================================
    SubShader
    {
        Tags
        {
            "RenderType" = "Opaque"
            "Queue" = "Geometry"
            "RenderPipeline" = "UniversalPipeline"
        }

        LOD 300

        // Main rendering pass
        Pass
        {
            Name "ForwardLit"
            Tags { "LightMode" = "UniversalForward" }

            Cull [_Cull]
            Blend [_SrcBlend] [_DstBlend]
            ZWrite [_ZWrite]

            HLSLPROGRAM
            #pragma vertex vert
            #pragma fragment frag

            // Shader features
            #pragma shader_feature_local _NORMALMAP
            #pragma shader_feature_local _EMISSION
            #pragma shader_feature_local _METALLICGLOSSMAP
            #pragma shader_feature_local _HOLOGRAM

            // Multi-compile variants
            #pragma multi_compile _ _MAIN_LIGHT_SHADOWS
            #pragma multi_compile _ _MAIN_LIGHT_SHADOWS_CASCADE
            #pragma multi_compile _ _ADDITIONAL_LIGHTS
            #pragma multi_compile_fog

            #include "Packages/com.unity.render-pipelines.universal/ShaderLibrary/Core.hlsl"
            #include "Packages/com.unity.render-pipelines.universal/ShaderLibrary/Lighting.hlsl"

            // Texture declarations
            TEXTURE2D(_MainTex);
            TEXTURE2D(_BumpMap);
            TEXTURE2D(_MetallicGlossMap);
            TEXTURE2D(_EmissionMap);
            TEXTURE2D(_OcclusionMap);
            SAMPLER(sampler_MainTex);

            // Constant buffer
            CBUFFER_START(UnityPerMaterial)
                float4 _MainTex_ST;
                float4 _Color;
                float4 _EmissionColor;
                float4 _MikuColor;
                float4 _RimColor;
                float _Metallic;
                float _Smoothness;
                float _BumpScale;
                float _OcclusionStrength;
                float _HologramIntensity;
                float _HologramSpeed;
                float _ScanlineCount;
                float _ScanlineSpeed;
                float _RimPower;
                float _RimIntensity;
            CBUFFER_END

            // Vertex input structure
            struct Attributes
            {
                float4 positionOS   : POSITION;
                float3 normalOS     : NORMAL;
                float4 tangentOS    : TANGENT;
                float2 uv           : TEXCOORD0;
                float2 lightmapUV   : TEXCOORD1;
                UNITY_VERTEX_INPUT_INSTANCE_ID
            };

            // Vertex output structure
            struct Varyings
            {
                float4 positionCS   : SV_POSITION;
                float3 positionWS   : TEXCOORD0;
                float3 normalWS     : TEXCOORD1;
                float4 tangentWS    : TEXCOORD2;
                float2 uv           : TEXCOORD3;
                float fogFactor     : TEXCOORD4;
                UNITY_VERTEX_INPUT_INSTANCE_ID
                UNITY_VERTEX_OUTPUT_STEREO
            };

            // Vertex shader
            Varyings vert(Attributes input)
            {
                Varyings output = (Varyings)0;

                UNITY_SETUP_INSTANCE_ID(input);
                UNITY_TRANSFER_INSTANCE_ID(input, output);
                UNITY_INITIALIZE_VERTEX_OUTPUT_STEREO(output);

                // Transform positions
                VertexPositionInputs positionInputs = GetVertexPositionInputs(input.positionOS.xyz);
                output.positionCS = positionInputs.positionCS;
                output.positionWS = positionInputs.positionWS;

                // Transform normals
                VertexNormalInputs normalInputs = GetVertexNormalInputs(input.normalOS, input.tangentOS);
                output.normalWS = normalInputs.normalWS;
                output.tangentWS = float4(normalInputs.tangentWS, input.tangentOS.w);

                // UV coordinates
                output.uv = TRANSFORM_TEX(input.uv, _MainTex);

                // Fog
                output.fogFactor = ComputeFogFactor(positionInputs.positionCS.z);

                return output;
            }

            // Holographic scanline effect
            float3 HolographicEffect(float3 worldPos, float3 viewDir, float3 normal)
            {
                // Scanlines
                float scanline = sin(worldPos.y * _ScanlineCount + _Time.y * _ScanlineSpeed);
                scanline = smoothstep(0.0, 0.1, scanline);

                // Color cycling
                float cycle = sin(_Time.y * _HologramSpeed) * 0.5 + 0.5;
                float3 holoColor = lerp(_MikuColor.rgb, float3(0.0, 0.8, 1.0), cycle);

                // Rim-based hologram
                float rim = 1.0 - saturate(dot(viewDir, normal));
                float hologram = pow(rim, _RimPower) * scanline;

                return holoColor * hologram * _HologramIntensity;
            }

            // Fragment shader
            half4 frag(Varyings input) : SV_Target
            {
                UNITY_SETUP_INSTANCE_ID(input);

                // Sample textures
                half4 albedo = SAMPLE_TEXTURE2D(_MainTex, sampler_MainTex, input.uv) * _Color;

                // Normal mapping
                #ifdef _NORMALMAP
                    float3 bitangent = cross(input.normalWS, input.tangentWS.xyz) * input.tangentWS.w;
                    float3x3 TBN = float3x3(input.tangentWS.xyz, bitangent, input.normalWS);
                    float3 normalTS = UnpackNormalScale(
                        SAMPLE_TEXTURE2D(_BumpMap, sampler_MainTex, input.uv),
                        _BumpScale
                    );
                    float3 normalWS = normalize(mul(normalTS, TBN));
                #else
                    float3 normalWS = normalize(input.normalWS);
                #endif

                // Metallic and smoothness
                #ifdef _METALLICGLOSSMAP
                    half4 metallicGloss = SAMPLE_TEXTURE2D(_MetallicGlossMap, sampler_MainTex, input.uv);
                    half metallic = metallicGloss.r * _Metallic;
                    half smoothness = metallicGloss.a * _Smoothness;
                #else
                    half metallic = _Metallic;
                    half smoothness = _Smoothness;
                #endif

                // View direction
                float3 viewDir = GetWorldSpaceNormalizeViewDir(input.positionWS);

                // Lighting
                InputData inputData = (InputData)0;
                inputData.positionWS = input.positionWS;
                inputData.normalWS = normalWS;
                inputData.viewDirectionWS = viewDir;
                inputData.fogCoord = input.fogFactor;

                SurfaceData surfaceData = (SurfaceData)0;
                surfaceData.albedo = albedo.rgb;
                surfaceData.metallic = metallic;
                surfaceData.smoothness = smoothness;
                surfaceData.normalTS = float3(0, 0, 1);
                surfaceData.occlusion = 1.0;
                surfaceData.alpha = albedo.a;

                // PBR lighting
                half4 color = UniversalFragmentPBR(inputData, surfaceData);

                // Rim lighting
                float rim = 1.0 - saturate(dot(viewDir, normalWS));
                color.rgb += _RimColor.rgb * pow(rim, _RimPower) * _RimIntensity;

                // Holographic effect
                #ifdef _HOLOGRAM
                    color.rgb += HolographicEffect(input.positionWS, viewDir, normalWS);
                #endif

                // Emission
                #ifdef _EMISSION
                    color.rgb += SAMPLE_TEXTURE2D(_EmissionMap, sampler_MainTex, input.uv).rgb * _EmissionColor.rgb;
                #endif

                // Apply fog
                color.rgb = MixFog(color.rgb, input.fogFactor);

                return color;
            }
            ENDHLSL
        }

        // Shadow caster pass
        Pass
        {
            Name "ShadowCaster"
            Tags { "LightMode" = "ShadowCaster" }

            ZWrite On
            ZTest LEqual
            ColorMask 0
            Cull [_Cull]

            HLSLPROGRAM
            #pragma vertex ShadowPassVertex
            #pragma fragment ShadowPassFragment

            #include "Packages/com.unity.render-pipelines.universal/Shaders/ShadowCasterPass.hlsl"
            ENDHLSL
        }

        // Depth only pass
        Pass
        {
            Name "DepthOnly"
            Tags { "LightMode" = "DepthOnly" }

            ZWrite On
            ColorMask 0
            Cull [_Cull]

            HLSLPROGRAM
            #pragma vertex DepthOnlyVertex
            #pragma fragment DepthOnlyFragment

            #include "Packages/com.unity.render-pipelines.universal/Shaders/DepthOnlyPass.hlsl"
            ENDHLSL
        }
    }

    // ==========================================================================
    // SubShader - Low Quality Fallback
    // ==========================================================================
    SubShader
    {
        Tags { "RenderType" = "Opaque" }
        LOD 100

        Pass
        {
            CGPROGRAM
            #pragma vertex vert
            #pragma fragment frag

            #include "UnityCG.cginc"

            struct appdata
            {
                float4 vertex : POSITION;
                float2 uv : TEXCOORD0;
            };

            struct v2f
            {
                float2 uv : TEXCOORD0;
                float4 vertex : SV_POSITION;
            };

            sampler2D _MainTex;
            float4 _MainTex_ST;
            float4 _Color;

            v2f vert(appdata v)
            {
                v2f o;
                o.vertex = UnityObjectToClipPos(v.vertex);
                o.uv = TRANSFORM_TEX(v.uv, _MainTex);
                return o;
            }

            fixed4 frag(v2f i) : SV_Target
            {
                fixed4 col = tex2D(_MainTex, i.uv) * _Color;
                return col;
            }
            ENDCG
        }
    }

    // Custom editor for the shader
    CustomEditor "MikuShaderGUI"

    // Fallback shader
    Fallback "Universal Render Pipeline/Lit"
}
