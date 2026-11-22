# Design System — LandingFactory (Health/Wellness Website)

**Fuente de verdad:** 4 capturas de referencia en  
`projects/healthwebsite/references/1.jpg`  
`projects/healthwebsite/references/2.jpg`  
`projects/healthwebsite/references/3.jpg`  
`projects/healthwebsite/references/4.jpg`  

**Rol:** ui-ux-designer (solo lectura). Persistido por el implementador en `docs/design/design-system.md`.

---

## 1. Tesis Visual y Modo de Superficie

**Marca observada:** "Circle Way" (footer, copyright 2026). Plataforma de bienestar físico y mental con seguimiento de estado de ánimo (mood tracking), programas personalizados y red de especialistas.

**Tesis visual:** equilibrio entre lo editorial-sereno y lo clínico-amigable. La superficie usa un contraste intencional de dos "modos":

- **Modo oscuro (deep forest green):** fondo del hero, sección de expertos y footer. Transmite calma, confianza y nocturnidad saludable. Se reserva para bloques de alto impacto visual y conversión primaria.
- **Modo claro (off-white / lavanda claro):** secciones intermedias de datos y beneficios (workmap score, plataforma #1, mood meter). Transmite claridad, ligereza y accesibilidad de lectura.

**Elementos identitarios recurrentes (observados en las 4 capturas):**
- Logo floral/geométrico circular (izquierda superior del nav y pie de footer) — implementar como SVG.
- Círculos decorativos concéntricos superpuestos (tono lavanda traslúcido) detrás de titulares grandes.
- Badge pills con borde redondeado completo ("Mind & Body Care", "Complete", "Weekly").
- Barras de progreso horizontales con segmentos de color por estado de ánimo.
- Tarjetas con borde color lavanda y fondo panel (verde claro o oscuro).
- Semicírculo de gauge para el Daily Mood Meter.

**Modo de superficie:** oscuro por defecto en hero y footer; claro en islas de contenido informativo. No hay uso de emojis; toda iconografía (floral, smile, triste, neutro, flechas, descarga) debe ser SVG en código.

---

## 2. Tokens de Diseño

### 2.1 Colores semánticos (observados)

| Token | Valor aprox. (hex) | Uso observado | Origen |
|-------|-------------------|---------------|--------|
| `--color-bg-dark` | `#0C2E1B` / `#10341E` | Fondo hero, sección expertos, footer | observed |
| `--color-bg-light` | `#F6FBF8` / `#FFFFFF` | Fondo secciones intermedias | observed |
| `--color-panel-light` | `#9BD6B0` / `#A7DFBC` | Panel Workmap Score, Daily Assessment | observed |
| `--color-panel-purple` | `#D7B4F8` / `#E4CCFA` | Fondo tarjetas de métricas y beneficios | observed |
| `--color-text-serif-light` | `#C8DDD0` / `#D6E5DC` | Títulos serif sobre fondo oscuro | observed |
| `--color-text-sans-dark` | `#112218` / `#1F2937` | Cuerpo y etiquetas sobre fondo claro | observed |
| `--color-text-muted` | `#6B7280` | Subtítulos, secundarios | observed |
| `--color-accent-purple` | `#D7B4F8` / `#C89BF5` | Botones primarios, pills, bordes tarjetas expertos | observed |
| `--color-accent-green` | `#74C69D` / `#34D399` | Progreso, estados positivos, "Complete" | observed |
| `--color-mood-happy` | `#4ADE80` | Happy (punto y barra) | observed |
| `--color-mood-gloomy` | `#C084FC` | Gloomy | observed |
| `--color-mood-depressed` | `#FB923C` | Depressed | observed |
| `--color-mood-sadness` | `#F87171` | Sadness | observed |
| `--color-border` | `rgba(255,255,255,0.14)` sobre oscuro; `rgba(16,52,30,0.12)` sobre claro | Bordes sutiles | observed |

### 2.2 Tipografía

| Token | Familia | Peso | Uso | Estado |
|-------|---------|------|-----|--------|
| `--font-serif` | Instrument Serif / Playfair Display (Google Fonts) | 400/500/600 | Títulos editoriales grandes | substituted (observed: serif editorial de alto contraste, no identificable con certeza) |
| `--font-sans` | Plus Jakarta Sans / Inter (Google Fonts) | 400/500/600 | Cuerpo, botones, etiquetas, datos, nav, footer | substituted (observed: sans geométrica limpia, no identificable con certeza) |

### 2.3 Espaciado (escala base 8px)

| Token | Valor | Uso |
|-------|-------|-----|
| `--space-1` | 4px | Elementos internos muy ajustados |
| `--space-2` | 8px | Gutters internos de tarjetas |
| `--space-3` | 16px | Separación entre elementos relacionados |
| `--space-4` | 24px | Separación entre componentes |
| `--space-5` | 32px | Separación entre secciones |
| `--space-6` | 48px | Padding vertical de secciones grandes |
| `--space-7` | 64px | Separación mayor entre bloques hero |

### 2.4 Radios

| Token | Valor | Uso |
|-------|-------|-----|
| `--radius-sm` | 6px | Inputs, badges pequeños |
| `--radius-md` | 12px | Tarjetas, paneles |
| `--radius-lg` | 24px | Botones pills, contenedores principales |
| `--radius-full` | 9999px | Pills, avatares, toggle circles |

### 2.5 Bordes

| Token | Valor | Uso |
|-------|-------|-----|
| `--border-light` | 1px `rgba(255,255,255,0.14)` | Tarjetas sobre fondo oscuro |
| `--border-dark` | 1px `#E5E7EB` | Tarjetas sobre fondo claro |
| `--border-accent` | 2px `--color-accent-purple` | Bordes de tarjetas de expertos |

### 2.6 Sombras

| Token | Valor | Uso |
|-------|-------|-----|
| `--shadow-sm` | 0 1px 3px `rgba(0,0,0,0.1)` | Botones, inputs |
| `--shadow-md` | 0 4px 12px `rgba(0,0,0,0.15)` | Tarjetas elevadas |
| `--shadow-lg` | 0 8px 24px `rgba(0,0,0,0.2)` | Hero overlay, modales |

---

## 3. Escala Tipográfica y Plan de Fuentes

| Nivel | Familia | Tamaño (desktop) | Peso | Letras/espaciado | Uso observado | Estado |
|-------|---------|------------------|------|------------------|---------------|--------|
| `heading-1` | Serif | 56–64px | 400 | -0.02em | Hero principal ("Understand your body, improve your well-being.") | substituted |
| `heading-2` | Serif | 40–48px | 400 | -0.02em | Sección titulares ("Create a wellness plan...", "Meet the experts behind your well-being", "Our programs are tailored to your unique personality") | substituted |
| `heading-3` | Serif | 28–32px | 400 | -0.01em | Subsección ("Daily Mood Meter", "The #1 wellness platform in the world") | substituted |
| `body-lg` | Sans | 18–20px | 400 | -0.01em | Subtítulos descriptivos | substituted |
| `body` | Sans | 16px | 400 | normal | Cuerpo estándar, descripciones de expertos | substituted |
| `body-sm` | Sans | 14px | 400 | normal | Etiquetas, pie de tarjetas, copyright | substituted |
| `caption` | Sans | 12px | 500 | 0.02em | Nav, badges, pills, estados | substituted |
| `data-lg` | Sans | 32–48px | 500 | -0.02em | Porcentajes grandes ("86%", "92%", "87%") | substituted |
| `data` | Sans | 14–16px | 500 | normal | Valores de barras ("80%", "46%") | substituted |

**Plan de fuentes (verificable, gratuito):**
- Serif editorial: **Instrument Serif** o **Playfair Display** (Google Fonts).
- Sans geométrica: **Plus Jakarta Sans** o **Inter** (Google Fonts).

---

## 4. Matriz de Transformación Responsive por Sección

| Sección | Desktop 1440×900 | Tablet 768×1024 | Mobile 390×844 | Acción |
|---------|------------------|-----------------|----------------|--------|
| Nav + hero | Logo izq, enlaces horizontales, dos CTAs lado a lado, titular serif grande | Enlaces en fila, logo izq, CTAs lado a lado | Logo izq, menú hamburguesa, CTAs apilados o compactos | `reorder`, `collapse`, `preserve` |
| Hero 3 paneles (foto / gauge / perfil) | Tres columnas lado a lado | Dos columnas + tercera debajo o 3 cols compactas | Una columna apilada (foto → gauge → perfil) | `reflow`, `collapse`, `crop` |
| Logos "Featured by big company" | 6 logos en fila | 3+3 en 2 filas | 2 logos por fila | `reflow`, `simplify` |
| Sección bienestar (92% + workmap + plataforma) | 3 columnas en bloque morado | 2 columnas o apilado | Una columna: 92% → panel → texto | `reflow`, `collapse` |
| Meet the experts | 4 tarjetas en fila | 2 tarjetas por fila | 1 tarjeta por fila o carrusel horizontal | `reflow`, `collapse`, `crop` |
| Tag cloud (mood tags) | 2 filas de pills | 2 filas | Marquee continuo fluido | `preserve`, `simplify` |
| Daily Mood Meter | Semicírculo grande centrado | Semicírculo mediano | Semicírculo compacto | `collapse`, `simplify` |
| Footer (5 columnas + contacto) | Top CTA + contacto + 5 columnas | 2–3 columnas | 1 columna apilada | `collapse`, `reorder` |

---

## 5. Especificación de Interacciones y Estados

- **Botones y controles:** `hover` con transición suave de color/opacidad; `focus-visible` con anillo de 2px visible; `active` con escala `0.97`.
- **Carruseles/sliders:** Flechas funcionales en tarjeta central del Hero y en la sección de expertos o pills.
- **Mood meter:** Semicírculo interactivo donde al hacer clic en los 3 iconos de estado (Happy, Sad, Gloomy) actualiza el porcentaje y estado mostrado, manteniendo `87% Happy` como estado inicial idéntico a la referencia.
- **Menú móvil:** Drawer/panel accesible con botón hamburguesa SVG y cierre con `X` SVG.
- **Formulario email:** Validación inline y estado de confirmación sin recargar la página.

---

## 6. Mapa Semántico de Componentes

- `Navbar`: Logo SVG floral + enlaces (`Program`, `Class`, `About Us`, `Blog`) + `Login` + `Get Started ->`.
- `HeroSection`: Badge `Mind & Body Care`, H1 serif, subtítulo, CTAs (`Consultation ->`, `Download App`), grid de 3 tarjetas (Foto B/N + Mood daily tracking semanal, Gauge circular 86%, Health Profile + Daily Assessment).
- `LogoStrip`: `Featured by big company` + 6 logotipos SVG/wordmarks.
- `StatementSection`: Círculos concéntricos lavanda + frase editorial con palabras destacadas/atenuadas.
- `WellnessPlatformSection`: Bloque lavanda con `92%` + avatares, tarjeta verde menta `Workmap Score`, texto `The #1 wellness platform in the world` + botones circulares.
- `ExpertsSection`: Fondo verde oscuro, `Meet the experts behind your well-being`, 4 tarjetas con borde lavanda.
- `MoodTagsMarquee`: 2 filas de pills + iconos florales SVG.
- `DailyMoodMeterSection`: `Our programs are tailored to your unique personality` + semicírculo lavanda `Daily Mood Meter` + 3 iconos SVG en el arco.
- `Footer`: Logo SVG + `Effortlessly enhance your well-being, optimize your daily routines,` + Location / Call us / `Send email to us` + 5 columnas + Copyright.
