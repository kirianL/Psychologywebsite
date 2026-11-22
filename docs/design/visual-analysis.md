# Informe de Análisis Visual — LandingFactory / healthwebsite

**Rol:** visual-analyst (modo solo lectura — no se crea, edita ni elimina ningún archivo del proyecto).
**Estado:** informe listo para persistir en `docs/design/visual-analysis.md`.
**Referencias inspeccionadas:** `projects/healthwebsite/references/1.jpg`, `2.jpg`, `3.jpg`, `4.jpg`.

---

## 1. Inventario de Referencias

| Archivo | Dimensiones / proporción | Viewport probable | Estado | Solapamiento con captura consecutiva |
|---|---|---|---|---|
| `1.jpg` | Vertical, aproximadamente 3:4 (móvil largo) | ~390×844 (móvil) | Completa: navbar, hero, 3 tarjetas dashboard/media, inicio de "Featured by big company" e inicio del statement circular. | Solapa con `2.jpg` en el statement circular ("Create a wellness plan...") y en la zona de "Featured by big company". |
| `2.jpg` | Vertical, aproximadamente 3:4 | ~390×844 | Completa: statement circular completo, bloque morado 92% + Workmap Score + "The #1 wellness platform", inicio de "Meet the experts". | Solapa con `1.jpg` (statement circular) y con `3.jpg` (bloque 92%/Workmap/#1 platform e inicio de Meet the experts). |
| `3.jpg` | Vertical, aproximadamente 3:4 | ~390×844 | Completa: repetición bloque 92%/Workmap/#1 platform, "Meet the experts" completo con 4 cards de expertos, inicio de la banda/marquee de pills. | Solapa con `2.jpg` (bloque morado y Meet the experts) y con `4.jpg` (marquee de pills). |
| `4.jpg` | Vertical, aproximadamente 3:4 | ~390×844 | Completa: continuación del marquee de pills, "Our programs are tailored...", Daily Mood Meter semicircular, footer oscuro con CTA y newsletter. | Solapa con `3.jpg` en la banda de pills. |

**Nota sobre consistencia:** las 4 capturas parecen corresponder a una misma landing de una sola página (long-scroll), vista en viewport móvil estrecho. El orden de lectura es 1 → 2 → 3 → 4 de arriba a abajo.

---

## 2. Arquitectura Macro y Ritmo de Secciones

| # | Sección | Observado | Estado |
|---|---|---|---|
| 1 | **Navbar** | Fondo verde oscuro. Logo abstracto floral morado (arriba izquierda). Enlaces: `Program`, `Class`, `About Us`, `Blog`. A la derecha: `Login` y botón `Get Started →` (píldora con flecha). | observed |
| 2 | **Hero** | Badge píldora verde `Mind & Body Care`. H1 serif: `Understand your body, improve your well-being.` Subhead sans: `Enhance well-being and build healthier daily habits.` Dos CTAs: `Consultation →` (píldora púrpura rellena) y `Download App ⤓` (outline). | observed |
| 3 | **3 dashboard/media cards** | Tarjeta izquierda con foto de mujer y overlay `From Expert Therapist / Ena Rivaldo / Mood daily tracking / Weekly` con dots SUN–SAT. Tarjeta centro `Electricity Savings`, badge `2026`, gran círculo punteado `86%`, texto `Mental health is more important than money, if you care about that you in right place`, paginación `< — >`. Tarjeta derecha `Your health Profile` (barra segmentada), lista `Happy 80% / Glommy 46% / Depressed 57% / Sadness 16%`, `Your Daily Assessment` (`Your Joy 8 Aug 2026 Complete`, `Your Body 8 Aug 2026 Complete`, `From Expert Therapist Albert Rivaldo`, `Mood daily tracking Weekly`). | observed |
| 4 | **Featured by big company** | Etiqueta `Featured by big company`. Logos en gris: `Abbvie`, `Agilent Technologies`, `Johnson-johnson`, `MERCK`, `NOVARTIS`, `Alphabet`. | observed |
| 5 | **Statement circular** | Fondo lavanda con círculos concéntricos tenues. Texto serif centrado: `Create a wellness plan that boosts your physical health and mental well-being, tailored to your goals and lifestyle for balanced self-care.` Palabras atenuadas (menor peso/opacidad): `physical health`, `mental well-being`, `goals and lifestyle`. | observed |
| 6 | **Bloque morado 92% + Workmap Score + The #1 wellness platform** | Fondo lavanda/púrpura. `92%` grande. Avatares (5 rostros) + `of our users report higher returns within their first 6 months.` Tarjeta verde `Workmap Score / See the workmap in one sheet` con barras `Happy 90% / Gloomy 60% / Depressed 85% / Sadness 40%` e icono `(!)`. Toggle dos círculos (relleno/vacío). Lado derecho: `The #1 wellness platform in the world` + texto `Where you can save, invest, and scale your capital from anywhere because financial growth has no boundaries` (texto financiero descontextualizado, observado literalmente). | observed |
| 7 | **Meet the experts behind your well-being** | Fondo verde oscuro. Título serif. Subhead: `Get to know the specialists who guide your wellness journey, from mindful nutrition and daily movement to better rest and emotional balance.` Cuatro cards de expertos con foto y píldora púrpura inferior con nombre y descripción (ver §5). | observed |
| 8 | **Marquee/banda de pills + iconos florales** | Fondo blanco, dos filas horizontales de píldoras redondeadas con palabras de bienestar y iconos florales circulares intercalados (algunos naranjas/amarillos). Palabras: `Wellbeing`, `Healthy`, `Mood`, `Harmony`, `Balance`, `Sadness`, `Nutrition`, `Emotional`, `Stress`, `Sleep`. | observed |
| 9 | **Our programs + Daily Mood Meter semicircular** | Título serif `Our programs are tailored to your unique personality`. Icono smiley verde en círculo. Arco semicircular púrpura grande. `Daily Mood Meter / How are you feeling today? / Happy / 87%`. Barras: `Happy 87% / Gloomy 46% / Depressed 57% / Sadness 16%`. Iconos de tristeza (izquierda y derecha del arco). | observed |
| 10 | **Footer oscuro con CTA y newsletter** | Fondo verde muy oscuro/negro. Logo floral. Texto `Effortlessly enhance your well-being, optimize your daily routines,`. Columnas: `Location` (`42 Grandstand Row, London, SW19`), `Call us` (`+92 (319) 949 2066`), botón `Send email to us →`. Columnas de enlaces: `Circle Way` (descripción cerámica), `01 - Social` (Instagram, Tiktok, Threads), `02 - Explore` (Our Programs, Best Expert, Nutrition, Mood Level), `03 - Supports` (Support, FAQ, Contact Us, Privacy). `Stay in connected`: `Receive exclusive news, Expert programs, and daily inspiration.` + `Subscribe →`. Copyright: `Copyright 2026 Circle Way. All rights reserved.` | observed |

---

## 3. Sistema Tipográfico Observado

| Nivel | Familia (inferida) | Uso | Peso | Tamaño aproximado | Interlineado | Tracking | Estado |
|---|---|---|---|---|---|---|---|
| Display / Headings | Serif editorial elegante (Didot/Bodoni-like) | H1 hero, statement, sección "Meet the experts", "Our programs", footer headline | Regular / Medio | Grande (hero ~40–48px móvil) | Suave (1.2–1.35) | Normal | inferred (familia no verificable sin inspector) |
| Subheadings / etiquetas | Sans-serif geométrica limpia | Badges, pills, nav, etiquetas de cards, footer links | Regular / Medio | Pequeño-medio | 1.4–1.6 | Normal / ligeramente expandido en pills | inferred |
| Body / datos numéricos | Sans-serif geométrica | Porcentajes (`86%`, `92%`, `87%`), barras, textos de apoyo | Regular | Medio-pequeño | 1.5 | Normal | observed (forma geométrica) |
| UI micro | Sans-serif | Fechas (`8 Aug 2026`), estados (`Complete`, `Weekly`), nav | Regular | Pequeño | 1.4 | Normal | observed |

**Convención de capitalización:** la UI usa *sentence case* (solo primera palabra en mayúscula) en la mayoría de etiquetas (`Your health Profile`, `Your Daily Assessment`, `Mood daily tracking`). Algunos títulos de sección usan título mixto (`The #1 wellness platform in the world`, `Meet the experts behind your well-being`).

---

## 4. Paleta, Superficies y Profundidad

| Token (observado/inferido) | Hex aproximado | Uso | Estado |
|---|---|---|---|
| Fondo principal oscuro (hero/navbar/footer) | `#0B1B18` / verde bosque muy oscuro | Hero, navbar, sección expertos, footer | observed |
| Fondo claro principal | `#FFFFFF` / `#FAFAFA` | Marquee pills, sección statement | observed |
| Fondo lavanda / púrpura claro | `#E8DFF7` / `#D8C3F5` | Statement circular, bloque 92%, Daily Mood Meter arco | observed |
| Píldora púrpura (CTA) | `#B37FFF` / `#C084FC` | `Consultation →` | observed |
| Verde acento (badges, score) | `#4ADE80` / `#22C55E` | `Mind & Body Care`, Workmap Score tarjeta, smiley | observed |
| Púrpura acento | `#A78BFA` / `#9370DB` | Píldoras de expertos, toggle vacío, iconos | observed |
| Bordes / marcos | `#1F2D28` (oscuro sobre claro) / `rgba(255,255,255,0.1)` (claro sobre oscuro) | Tarjetas, inputs, toggle | inferred |
| Radios | `16px–24px` (píldoras, tarjetas), `50%` (avatares, toggle, smiley) | Componentes redondeados | inferred |
| Sombras/profundidad | Sombras suaves ligeras en tarjetas; sin bordes fuertes en hero | Tarjetas dashboard, expert cards | observed (débil) |

**Textos blancos sobre fondo oscuro** en hero, expertos y footer. **Textos oscuros sobre fondo claro/lavanda** en statement, pills, mood meter.

---

## 5. Análisis Detallado por Sección

### 5.1 Navbar (1.jpg)
- Logo: marca abstracta floral/morfológica en púrpura claro (arriba izquierda).
- Enlaces: `Program`, `Class`, `About Us`, `Blog`.
- Acciones derecha: `Login` (texto), `Get Started →` (botón píldora con flecha derecha).

### 5.2 Hero (1.jpg)
- Badge: `Mind & Body Care` (píldora verde).
- H1: `Understand your body, improve your well-being.`
- Subhead: `Enhance well-being and build healthier daily habits.`
- CTA izquierda: `Consultation →` (relleno púrpura).
- CTA derecha: `Download App ⤓` (outline, icono descarga).

### 5.3 Tres tarjetas dashboard/media (1.jpg)
**Tarjeta izquierda (foto + overlay):**
- Foto: mujer sonriente, blanco y negro, pelo rizado.
- Overlay inferior izquierda: `From Expert Therapist` / `Ena Rivaldo` / `Mood daily tracking` / `Weekly`.
- Indicador diario: dots de colores bajo `SUN MON TUE WED THU FRI SAT`.

**Tarjeta centro (métrica principal):**
- Título: `Electricity Savings` (inconsistencia semántica observada).
- Badge superior: `2026` + menú `...` (tres puntos).
- Visual: gran circunferencia punteada con centro `86%`.
- Texto de apoyo: `Mental health is more important than money, if you care about that you in right place`.
- Navegación horizontal: flecha `<`, barra de progreso paginada, flecha `>`.

**Tarjeta derecha (perfil y evaluación):**
- Título: `Your health Profile` con barra de progreso segmentada (verde, púrpura, naranja, rosa).
- Métricas con dot de color: `Happy 80%`, `Glommy 46%`, `Depressed 57%`, `Sadness 16%`.
- `Your Daily Assessment`:
  - `Your Joy` — `8 Aug 2026` — `Complete`
  - `Your Body` — `8 Aug 2026` — `Complete`
  - `From Expert Therapist` / `Albert Rivaldo`
  - `Mood daily tracking` — `Weekly`

### 5.4 Featured by big company (1.jpg → 2.jpg)
- Label: `Featured by big company`.
- Logos (escala de grises, desaturados): `Abbvie`, `Agilent Technologies`, `Johnson-johnson`, `MERCK`, `NOVARTIS`, `Alphabet`.

### 5.5 Statement circular (1.jpg base, 2.jpg completo)
- Fondo: lavanda con círculos concéntricos tenues (diseño geométrico de fondo).
- Texto: `Create a wellness plan that boosts your physical health and mental well-being, tailored to your goals and lifestyle for balanced self-care.`
- Palabras con atenuación visual (menor contraste/peso): `physical health`, `mental well-being`, `goals and lifestyle`.

### 5.6 Bloque morado 92% + Workmap Score + #1 platform (2.jpg, repetido en 3.jpg)
- Gran número: `92%`.
- Grupo de 5 avatares + texto: `of our users report higher returns within their first 6 months.`
- Tarjeta `Workmap Score`:
  - Subtítulo: `See the workmap in one sheet`.
  - Icono información `(!)`.
  - Barras horizontales: `Happy 90%`, `Gloomy 60%`, `Depressed 85%`, `Sadness 40%`.
  - Toggle inferior: dos círculos (izquierda relleno negro, derecha blanco vacío).
- Lateral derecho: `The #1 wellness platform in the world`.
- Texto de apoyo (contenido financiero, desalineado con wellness): `Where you can save, invest, and scale your capital from anywhere because financial growth has no boundaries`.

### 5.7 Meet the experts behind your well-being (2.jpg inicio, 3.jpg completo)
- Título serif: `Meet the experts behind your well-being`.
- Subhead: `Get to know the specialists who guide your wellness journey, from mindful nutrition and daily movement to better rest and emotional balance.`
- **Expert cards (foto + píldora púrpura con nombre y descripción):**
  1. **Oliver Hayes** — `Guiding you toward strength, mobility, and confidence through movement that works for you.` (Foto: mujer rubia, mano en mejilla.)
  2. **Marcus Bennett** — `Supporting you with practical ways to manage everyday stress and feel more present.` (Foto: hombre barriendo sonriendo, camisa caqui.)
  3. **Daniel Carter** — `Helping you create restful ro... better sleep and everyday er...` (texto cortado a derecha en 3.jpg). (Foto: mujer mirando arriba.)
  4. **Card parcial izquierda** (cortada en 3.jpg): `...ced eating habits that fit... personal goals.` (Foto: mujer rubia, camisa blanca.) — nombre no visible.
- Nombres propios observados: `Oliver Hayes`, `Marcus Bennett`, `Daniel Carter`, `Albert Rivaldo`, `Ena Rivaldo`.

### 5.8 Marquee/banda de pills + iconos florales (3.jpg → 4.jpg)
- Dos filas de píldoras redondeadas sobre fondo blanco, con iconos florales circulares intercalados (algunos con centro naranja/amarillo).
- Palabras observadas (fila 1): `...ellness` (cortado), `Healthy`, `Mood`, `Harmony`, `Balance`, `Sadness`, `Nutrition`, `Emotio...` (cortado).
- Palabras observadas (fila 2): `Wellbeing`, `Stress`, `Sleep`, `Nutrition`, `Emotional`, `Balance`, `Healthy`, `Mood`.
- Iconos florales: estilo trazo lineal, circulares, intercalados entre pills.

### 5.9 Our programs + Daily Mood Meter semicircular (4.jpg)
- Título serif centrado: `Our programs are tailored to your unique personality`.
- Icono: smiley verde dentro de círculo verde claro.
- Arco: semicírculo púrpura grande con línea guía superior.
- Contenido dentro del arco: `Daily Mood Meter`, `How are you feeling today?`, `Happy`, número grande `87%`.
- Barras con porcentajes y dots de color: `Happy 87%`, `Gloomy 46%`, `Depressed 57%`, `Sadness 16%`.
- Iconos estado: cara triste (izquierda, púrpura) y cara triste (derecha, verde claro) marcando extremos del arco.

### 5.10 Footer oscuro con CTA y newsletter (4.jpg)
- Logo floral superior.
- Headline: `Effortlessly enhance your well-being, optimize your daily routines,`.
- **Contacto:**
  - `Location`: `42 Grandstand Row, London, SW19`.
  - `Call us`: `+92 (319) 949 2066`.
  - Botón: `Send email to us →` (píldora con flecha).
- **Columnas de enlaces:**
  - `Circle Way`: `Handcrafted ceramics living created for timeless living and everyday rituals.` (descripción de cerámica, descontextualizada vs. wellness).
  - `01 - Social`: `Instagram →`, `Tiktok →`, `Threads →`.
  - `02 - Explore`: `Our Programs →`, `Best Expert →`, `Nutrition →`, `Mood Level →`.
  - `03 - Supports`: `Support →`, `FAQ →`, `Contact Us →`, `Privacy →`.
- **Newsletter:**
  - `Stay in connected`: `Receive exclusive news, Expert programs, and daily inspiration.`
  - `Subscribe →`.
- Copyright: `Copyright 2026 Circle Way. All rights reserved.`

---

## 6. Ledger de Evidencia

| Elemento | Estado | Fuente | Medición / Nota |
|---|---|---|---|
| Navbar enlaces (`Program`, `Class`, `About Us`, `Blog`) | observed | 1.jpg | Texto legible, mayúscula inicial por palabra |
| CTA `Get Started →` | observed | 1.jpg | Botón píldora con flecha |
| Badge `Mind & Body Care` | observed | 1.jpg | Píldora verde |
| H1 hero `Understand your body, improve your well-being.` | observed | 1.jpg | Serif display, sentence case |
| Subhead hero | observed | 1.jpg | `Enhance well-being and build healthier daily habits.` |
| CTA `Consultation →` / `Download App ⤓` | observed | 1.jpg | Púrpura relleno vs outline |
| Tarjeta `Ena Rivaldo` / `Mood daily tracking` / Weekly dots | observed | 1.jpg | Overlay sobre foto B/N |
| Tarjeta `Electricity Savings` / `2026` / `86%` | observed | 1.jpg | Texto semánticamente inconsistente (electricidad vs wellness) |
| Texto centro `Mental health is more important than money...` | observed | 1.jpg | Literal, incluye `you in right place` |
| `Your health Profile`: `Happy 80% / Glommy 46% / Depressed 57% / Sadness 16%` | observed | 1.jpg | Barras segmentadas |
| `Your Daily Assessment`: fechas `8 Aug 2026`, estados `Complete` | observed | 1.jpg | `Your Joy`, `Your Body` |
| `Albert Rivaldo` / `Ena Rivaldo` | observed | 1.jpg | Nombres de terapeutas expertos |
| Logos `Featured by big company`: Abbvie, Agilent, Johnson-johnson, MERCK, NOVARTIS, Alphabet | observed | 1.jpg–2.jpg | Logos desaturados/gris |
| Statement circular texto completo | observed | 1.jpg base, 2.jpg completo | `Create a wellness plan that boosts your physical health and mental well-being, tailored to your goals and lifestyle for balanced self-care.` |
| Palabras atenuadas en statement | observed | 1.jpg–2.jpg | `physical health`, `mental well-being`, `goals and lifestyle` |
| `92%` + `of our users report higher returns within their first 6 months.` | observed | 2.jpg, 3.jpg | 5 avatares grupo |
| `Workmap Score`: `Happy 90% / Gloomy 60% / Depressed 85% / Sadness 40%` | observed | 2.jpg, 3.jpg | Tarjeta verde, icono `(!)` |
| `The #1 wellness platform in the world` | observed | 2.jpg, 3.jpg | Título lateral |
| Texto financiero `save, invest, and scale your capital...` | observed | 2.jpg, 3.jpg | Contenido descontextualizado (inversión vs bienestar) |
| `Meet the experts behind your well-being` + subhead | observed | 2.jpg–3.jpg | Subhead menciona nutrición, movimiento, descanso, equilibrio emocional |
| Expertos: `Oliver Hayes`, `Marcus Bennett`, `Daniel Carter` | observed | 3.jpg | Nombres y descripciones literales en píldoras púrpura |
| Cuarta experta parcial (nombre no visible) | observed | 3.jpg | Card cortada a izquierda; descripción `...eating habits that fit... personal goals.` |
| `Daniel Carter` descripción cortada a derecha | observed | 3.jpg | `...restful ro... better sleep and everyday er...` |
| Marquee pills: `Wellbeing`, `Healthy`, `Mood`, `Harmony`, `Balance`, `Sadness`, `Nutrition`, `Emotional`, `Stress`, `Sleep` | observed | 3.jpg, 4.jpg | Dos filas, iconos florales intercalados |
| `Our programs are tailored to your unique personality` | observed | 4.jpg | Título serif |
| `Daily Mood Meter`: `Happy 87%` | observed | 4.jpg | Arco semicircular púrpura |
| Barras mood meter: `Happy 87% / Gloomy 46% / Depressed 57% / Sadness 16%` | observed | 4.jpg | Coincide parcialmente con perfil hero (salvo Happy 87% vs 80%) |
| Footer ubicación `42 Grandstand Row, London, SW19` | observed | 4.jpg | |
| Footer teléfono `+92 (319) 949 2066` | observed | 4.jpg | |
| Footer `Send email to us →` | observed | 4.jpg | Botón CTA |
| Columnas footer: `Circle Way`, `01 - Social`, `02 - Explore`, `03 - Supports` | observed | 4.jpg | Enlaces con flecha `→` |
| `Circle Way` descripción cerámica | observed | 4.jpg | `Handcrafted ceramics living...` (descontextualizado) |
| Newsletter `Stay in connected` / `Subscribe →` | observed | 4.jpg | |
| Copyright `Copyright 2026 Circle Way. All rights reserved.` | observed | 4.jpg | Marca `Circle Way` (vs. contenido wellness previo) |
| Tipografía serif vs sans-serif | inferred | Todas | No verificable sin inspector de fuentes; forma visual coherente |
| Valores hex de color | inferred | Todas | Aproximados por muestra visual, no medidos con picker |
| Radios exactos (px) | inferred | Todas | Estimación visual `16px–24px`, no medido |
| Viewport exacto de cada captura | inferred | Todas | Proporción móvil ~3:4; no hay metadatos de dispositivo |

---

## Observaciones de fidelidad y riesgos (para próximos especialistas)

1. **Inconsistencias de marca/contenido:** aparecen `Electricity Savings`, texto de inversión (`save, invest, and scale your capital`), marca `Circle Way` (cerámica) en el footer, y descripción de ceramética en `Circle Way`. Estos elementos parecen plantilla genérica reutilizada; no son propios de una landing de bienestar. Se recomienda confirmar con el usuario si se mantienen o se reemplazan.
2. **Nombres de expertos incompletos:** la cuarta card (izquierda en 3.jpg) está cortada y su nombre no es visible. Solo se ven nombres `Oliver Hayes`, `Marcus Bennett`, `Daniel Carter` (y terapeutas `Ena Rivaldo`, `Albert Rivaldo`).
3. **Desplazamiento de datos:** `Happy` aparece como `80%` en el hero (1.jpg) y `87%` en el Daily Mood Meter (4.jpg); `Depressed` como `57%` (hero) y `57%` (mood meter, coincidente). `Gloomy` 46% coincide en ambos.
4. **Texto atenuado en statement:** `physical health`, `mental well-being`, `goals and lifestyle` tienen menor peso visual; respetar esta jerarquía en la implementación.
5. **No hay emojis ni iconos raster observados:** todos los iconos (flores, smiley, toggle, flechas) parecen vectoriales o trazos; usar SVG en implementación.
6. **Orden de lectura:** 1 → 2 → 3 → 4 cubre todo el long-scroll desde navbar hasta footer.

---

**Fin del informe.** Este documento está listo para ser persistido en `docs/design/visual-analysis.md` por el coordinador (el subagente visual-analyst opera en modo solo lectura y no escribe archivos).