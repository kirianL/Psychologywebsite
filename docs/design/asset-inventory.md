# Inventario de Assets — LandingFactory (healthwebsite)

**Proyecto:** `projects/healthwebsite`  
**Referencias inspeccionadas:** `references/1.jpg`, `2.jpg`, `3.jpg`, `4.jpg`  
**Directorio de activos:** `projects/healthwebsite/assets/` (solo `.gitkeep` — vacío)  
**Estado:** solo lectura (persistido por el implementador en `docs/design/asset-inventory.md`)  
**Norma aplicada:** toda iconografía UI y logotipos simples deben ser SVG en código (no raster).

---

## 1. Assets Locales Detectados

| Ruta | Contenido | Observación |
|------|-----------|-------------|
| `projects/healthwebsite/assets/.gitkeep` | Placeholder vacío | Directorio de activos sin archivos reales |
| `projects/healthwebsite/**/*.svg` | — | 0 archivos SVG encontrados en todo el proyecto |

**Conclusión:** el inventario local está vacío. Todos los assets (fotos, logotipos de marca y clientes, iconografía, avatares y decoración) deben generarse o escribirse como SVG en código.

---

## 2. Tabla Resumen de Inventario

Columnas: `ID | Tipo | Ubicación | Proporción | Estado | Método | Ruta Destino`

| ID | Tipo | Ubicación | Proporción | Estado | Método | Ruta Destino |
|----|------|-----------|------------|--------|--------|--------------|
| ASSET-01 | Logotipo marca (Circle Way) | `references/1.jpg` (nav), `4.jpg` (footer) | 1:1 | pendiente | SVG en código | `src/components/Icons.tsx` |
| ASSET-02 | Foto hero — mujer sonriendo B/N | `references/1.jpg` | ~4:5 | generado | Imagen / Visual Engine | `public/images/hero-woman.jpg` |
| ASSET-03 | Logo cliente Abbvie | `references/1.jpg` | horizontal | sustituido | SVG vectorial | `src/components/ClientLogos.tsx` |
| ASSET-04 | Logo cliente Agilent Technologies | `references/1.jpg` | horizontal | sustituido | SVG vectorial | `src/components/ClientLogos.tsx` |
| ASSET-05 | Logo cliente Johnson & Johnson | `references/1.jpg` | horizontal | sustituido | SVG vectorial | `src/components/ClientLogos.tsx` |
| ASSET-06 | Logo cliente MERCK | `references/1.jpg` | horizontal | sustituido | SVG vectorial | `src/components/ClientLogos.tsx` |
| ASSET-07 | Logo cliente NOVARTIS | `references/1.jpg` | horizontal | sustituido | SVG vectorial | `src/components/ClientLogos.tsx` |
| ASSET-08 | Logo cliente Alphabet | `references/1.jpg` | horizontal | sustituido | SVG vectorial | `src/components/ClientLogos.tsx` |
| ASSET-09 | Foto experto 1 — mujer (card parcial) | `references/3.jpg` | ~3:4 | generado | Imagen / Visual Engine | `public/images/expert-01.jpg` |
| ASSET-10 | Foto experto Oliver Hayes | `references/3.jpg` | ~3:4 | generado | Imagen / Visual Engine | `public/images/expert-oliver-hayes.jpg` |
| ASSET-11 | Foto experto Marcus Bennett | `references/3.jpg` | ~3:4 | generado | Imagen / Visual Engine | `public/images/expert-marcus-bennett.jpg` |
| ASSET-12 | Foto experto Daniel Carter | `references/3.jpg` | ~3:4 | generado | Imagen / Visual Engine | `public/images/expert-daniel-carter.jpg` |
| ASSET-13 | Avatares de usuarios (4) + Albert Rivaldo | `references/1.jpg`, `2.jpg` | 1:1 | generado | Imagen / Visual Engine | `public/images/avatar-*.jpg` |
| ASSET-14 | Iconos estado de ánimo (Happy, Sad, Neutral) | `references/1.jpg`, `4.jpg` | 1:1 | pendiente | SVG en código | `src/components/Icons.tsx` |
| ASSET-15 | Iconos flecha, descarga, check, exclamación, floral | `references/1..4.jpg` | 1:1 | pendiente | SVG en código | `src/components/Icons.tsx` |
| ASSET-16 | Decoración círculos concéntricos | `references/1.jpg`, `2.jpg` | — | pendiente | CSS / SVG | `src/components/` |

---

## 3. Fichas Detalladas por Asset

### ASSET-02 — Foto hero (mujer sonriendo, panel dashboard izq.)
- **Procedencia:** `references/1.jpg`, panel izquierdo del dashboard hero.
- **Encuadre:** primer plano / medio plano vertical, mujer de torso arriba, cabeza ligeramente inclinada hacia atrás y sonriendo con alegría.
- **Iluminación y Paleta:** luz suave natural de ventana lateral, estética blanco y negro / monocromo de alto contraste limpio.
- **Prompt de generación:** Portrait medium shot of a smiling Black woman with voluminous curly afro hair, head tilted slightly back laughing with joy, soft natural window side lighting, bright indoor ceiling background, crisp black and white photography, vertical aspect ratio 4:5, wellness lifestyle photography.

### ASSET-09 — Foto experto 1 (mujer, card parcial)
- **Procedencia:** `references/3.jpg`, primera tarjeta de experto.
- **Prompt de generación:** Natural portrait of a smiling woman wellness nutritionist in her 30s wearing a crisp white shirt over a dark top, warm indoor home office background with soft plant, soft natural lighting, photorealistic, vertical aspect ratio 3:4.

### ASSET-10 — Foto experto Oliver Hayes (mujer rubia)
- **Procedencia:** `references/3.jpg`, segunda tarjeta de experto.
- **Prompt de generación:** Portrait of a smiling blonde woman wellness coach, hand gently resting near cheek, looking slightly upward, wearing a cozy beige knit sweater, warm blurred bookshelf background, soft studio lighting, photorealistic, vertical aspect ratio 3:4.

### ASSET-11 — Foto experto Marcus Bennett (hombre)
- **Procedencia:** `references/3.jpg`, tercera tarjeta de experto.
- **Prompt de generación:** Friendly portrait of a smiling man in his early 30s with short neatly trimmed beard, wearing an olive-beige casual button-up shirt, solid soft lavender studio background, even soft front lighting, photorealistic, vertical aspect ratio 3:4.

### ASSET-12 — Foto experto Daniel Carter (mujer morena)
- **Procedencia:** `references/3.jpg`, cuarta tarjeta de experto.
- **Prompt de generación:** Portrait of a smiling brunette woman with long wavy dark hair, looking slightly upward, wearing a light blue collared top, clean bright white/light grey studio background, soft side lighting, photorealistic, vertical aspect ratio 3:4.

### ASSET-13 — Avatares de usuarios
- **Procedencia:** `references/2.jpg` (4 avatares circulares superpuestos) y `references/1.jpg` (Albert Rivaldo).
- **Prompt de generación:** Clean headshot portraits for circular avatars, diverse friendly professionals, soft even lighting, neutral backgrounds.

---

## 4. Inventario de Iconografía SVG

Todos los iconos UI (`BrandLogo`, `ArrowRight`, `ArrowLeft`, `ArrowUpRight`, `Download`, `MoodHappy`, `MoodSad`, `MoodNeutral`, `ExclamationCircle`, `AssessmentIcon`, `FloralPillIcon`) se implementarán como **SVG en código** en `src/components/Icons.tsx` sin emojis ni iconos raster.
