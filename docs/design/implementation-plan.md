# Plan de Implementación — LandingFactory / healthwebsite

**Rol:** implementation-planner (modo solo lectura — no se crea, edita ni elimina ningún archivo).  
**Entregable:** `docs/design/implementation-plan.md` (a persistir por el coordinador / Gemini Hydrogen).  
**Fuentes:** `visual-analysis.md`, `design-system.md`, `asset-inventory.md`, estructura actual del proyecto (proyecto nuevo, sin `package.json`, `references/1.jpg`–`4.jpg` presentes, `assets/` vacío).

> **Nota de fidelidad:** los textos observados se preservan **verbatim** aunque sean semánticamente inconsistentes (`Electricity Savings`, texto financiero `save, invest, and scale your capital…`, marca `Circle Way` + descripción cerámica en footer). Son fuente de verdad según `references/`. Se marcan para confirmación opcional con el usuario, pero la implementación por defecto los replica.

---

## 1. Stack y Dependencias

### 1.1 Stack elegido

| Capa | Tecnología | Versión objetivo | Justificación |
|---|---|---|---|
| Bundler / dev server | Vite | `^6.0.0` | Rápido, HMR, plugin React oficial |
| UI | React | `^19.0.0` | Versión solicitada, concurrent features |
| Lenguaje | TypeScript | `^5.6.0` | Tipado de props y datos |
| Estilos | Tailwind CSS v4 | `^4.0.0` | CSS-first (`@theme`), sin `tailwind.config.js` |
| Integración Tailwind | `@tailwindcss/vite` | `^4.0.0` | Plugin oficial para Vite |
| Fuentes | Google Fonts | — | `Instrument Serif` (serif display) + `Plus Jakarta Sans` (sans). Alternativas aceptables: `Playfair Display` / `Inter`. |
| Iconografía | SVG en código | — | Sin librería de iconos (evita raster y dependencias) |
| Imágenes | `public/images/` | — | Generadas con image-generator / Visual Engine |
| Verificación | Playwright (externo al proyecto) | — | Capturas en `docs/design/captures/` |

### 1.2 `package.json`

```json
{
  "name": "healthwebsite",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "preview": "vite preview",
    "typecheck": "tsc -b --noEmit"
  },
  "dependencies": {
    "react": "^19.0.0",
    "react-dom": "^19.0.0"
  },
  "devDependencies": {
    "@tailwindcss/vite": "^4.0.0",
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "@vitejs/plugin-react": "^4.3.0",
    "tailwindcss": "^4.0.0",
    "typescript": "^5.6.0",
    "vite": "^6.0.0"
  }
}
```

> Sin `clsx`/`tailwind-merge` para mantener el bundle mínimo; la composición de clases se hace con template literals. Si Gemini Hydrogen prefiere `cn`, puede añadirlos sin romper este plan.

### 1.3 `vite.config.ts`

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

### 1.4 `tsconfig.json` (raíz, project references)

```json
{
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ]
}
```

### 1.5 `tsconfig.app.json`

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "isolatedModules": true,
    "verbatimModuleSyntax": true,
    "skipLibCheck": true,
    "baseUrl": ".",
    "paths": { "@/*": ["src/*"] }
  },
  "include": ["src"]
}
```

### 1.6 `tsconfig.node.json`

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["ES2022"],
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "strict": true,
    "skipLibCheck": true,
    "types": ["node"]
  },
  "include": ["vite.config.ts"]
}
```

---

## 2. Organización de Archivos (árbol exacto)

```
healthwebsite/
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── index.html
├── public/
│   ├── favicon.svg                          # logo floral simplificado (opcional)
│   └── images/
│       ├── hero-woman.jpg                   # ASSET-02
│       ├── expert-01.jpg                    # ASSET-09 (card parcial)
│       ├── expert-oliver-hayes.jpg          # ASSET-10
│       ├── expert-marcus-bennett.jpg        # ASSET-11
│       ├── expert-daniel-carter.jpg          # ASSET-12
│       ├── avatar-01.jpg                    # ASSET-13 (experta parcial)
│       ├── avatar-02.jpg                    # ASSET-13 (Oliver Hayes)
│       ├── avatar-03.jpg                    # ASSET-13 (Marcus Bennett)
│       ├── avatar-04.jpg                    # ASSET-13 (Daniel Carter)
│       └── avatar-05.jpg                    # ASSET-13 (Albert Rivaldo / quinto rostro)
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── index.css
│   ├── components/
│   │   ├── Icons.tsx                       # todo SVG inline (BrandLogo, arrows, moods, floral, etc.)
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Pill.tsx
│   │   │   ├── ProgressBar.tsx
│   │   │   └── MobileMenu.tsx
│   │   ├── Navbar.tsx
│   │   ├── HeroSection.tsx
│   │   ├── DashboardPhotoCard.tsx
│   │   ├── DashboardGaugeCard.tsx
│   │   ├── DashboardProfileCard.tsx
│   │   ├── LogoStrip.tsx
│   │   ├── ClientLogos.tsx
│   │   ├── StatementSection.tsx
│   │   ├── WellnessPlatformSection.tsx
│   │   ├── WorkmapScoreCard.tsx
│   │   ├── ExpertsSection.tsx
│   │   ├── ExpertCard.tsx
│   │   ├── MoodTagsMarquee.tsx
│   │   ├── DailyMoodMeterSection.tsx
│   │   ├── MoodGauge.tsx
│   │   └── Footer.tsx
│   ├── data/
│   │   └── content.ts                      # copy observado centralizado (literales)
│   └── lib/
│       └── utils.ts                        # helpers (clamp, formatPercent)
├── docs/
│   └── design/
│       ├── visual-analysis.md
│       ├── design-system.md
│       ├── asset-inventory.md
│       ├── implementation-plan.md          # este documento
│       └── captures/                       # screenshots Playwright (generadas en verificación)
├── references/
│   └── 1.jpg … 4.jpg
└── assets/
    └── .gitkeep
```

**Regla de colocación:** `public/images/*` se sirve desde la raíz (`/images/...`). Los SVG viven en `src/components/Icons.tsx` y `ClientLogos.tsx` (no en `public/`), para poder tematizarlos con `currentColor` y props.

---

## 3. Arquitectura de Componentes

### 3.1 Árbol de composición (`App.tsx`)

```tsx
<Navbar />
<main>
  <HeroSection />
  <LogoStrip />
  <StatementSection />
  <WellnessPlatformSection />
  <ExpertsSection />
  <MoodTagsMarquee />
  <DailyMoodMeterSection />
</main>
<Footer />
```

### 3.2 Interfaces y responsabilidades

#### `Icons.tsx` (SVG inline, props `className?: string; size?: number`)
Exporta: `BrandLogo`, `ArrowRight`, `ArrowLeft`, `ArrowUpRight`, `Download`, `MoodHappy`, `MoodSad`, `MoodNeutral`, `ExclamationCircle`, `AssessmentIcon`, `FloralPillIcon`, `MenuIcon`, `CloseIcon`, `CheckIcon`, `SmileyIcon`.

Responsabilidad: única fuente de iconografía. Todos usan `stroke="currentColor"` / `fill="currentColor"` para heredar color. Sin emojis.

#### `ui/Button.tsx`
```ts
interface ButtonProps {
  variant: 'primary' | 'outline' | 'ghost' | 'pill-dark';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
  className?: string;
  ariaLabel?: string;
}
```
Responsabilidad: estilos de botón reutilizables con `hover`, `focus-visible` (anillo 2px), `active:scale-[0.97]`, transición 150ms.

#### `ui/Pill.tsx`
```ts
interface PillProps {
  children: React.ReactNode;
  tone?: 'green' | 'purple' | 'neutral' | 'dark';
  className?: string;
}
```

#### `ui/ProgressBar.tsx`
```ts
interface ProgressBarProps {
  value: number; // 0–100
  color?: string; // tailwind class o hex
  trackClassName?: string;
  className?: string;
}
```

#### `ui/MobileMenu.tsx`
```ts
interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  links: { label: string; href: string }[];
}
```
Responsabilidad: drawer accesible (overlay, focus trap, ESC, bloqueo de scroll del body).

#### `Navbar.tsx`
```ts
interface NavbarProps { /* sin props; gestiona estado mobileOpen internamente */ }
```
Contenido: `BrandLogo` + enlaces `Program`, `Class`, `About Us`, `Blog` + `Login` + `Get Started →` (Button pill-dark con `ArrowRight`). Estado `mobileOpen`. En móvil: hamburguesa → `MobileMenu`.

#### `HeroSection.tsx`
```ts
interface HeroSectionProps { /* sin props; compone las 3 cards */ }
```
Contenido: badge `Mind & Body Care` (Pill green), H1 `Understand your body, improve your well-being.`, subhead `Enhance well-being and build healthier daily habits.`, CTAs `Consultation →` (primary purple) y `Download App ⤓` (outline, `Download`), grid de 3 cards.

#### `DashboardPhotoCard.tsx`
```ts
interface WeekDot { day: string; color: 'green' | 'purple' | 'orange' | 'pink'; active?: boolean; }
interface DashboardPhotoCardProps {
  imageSrc: string;
  imageAlt: string;
  fromLabel: string;          // "From Expert Therapist"
  name: string;               // "Ena Rivaldo"
  trackingLabel: string;      // "Mood daily tracking"
  frequency: string;          // "Weekly"
  weekDots: WeekDot[];        // SUN..SAT
}
```

#### `DashboardGaugeCard.tsx`
```ts
interface DashboardGaugeCardProps {
  title: string;              // "Electricity Savings" (observado)
  badge: string;              // "2026"
  percent: number;            // 86
  supportText: string;         // "Mental health is more important than money, if you care about that you in right place"
  pageIndex: number;          // 0..pages-1
  totalPages: number;
  onPrev: () => void;
  onNext: () => void;
}
```
Responsabilidad: tarjeta central con gauge circular punteado, flechas y barra de paginación. Las flechas actualizan `pageIndex` (funcional) manteniendo el contenido observado; transición de opacidad.

#### `DashboardProfileCard.tsx`
```ts
interface ProfileMetric { label: string; percent: number; color: 'green'|'purple'|'orange'|'pink'; }
interface AssessmentItem { label: string; date: string; status: string; }
interface DashboardProfileCardProps {
  title: string;              // "Your health Profile"
  segments: { color: string; width: number }[];
  metrics: ProfileMetric[];   // Happy 80, Glommy 46, Depressed 57, Sadness 16
  assessmentTitle: string;     // "Your Daily Assessment"
  assessmentItems: AssessmentItem[]; // Your Joy / Your Body
  therapistLabel: string;      // "From Expert Therapist"
  therapistName: string;      // "Albert Rivaldo"
  trackingLabel: string;      // "Mood daily tracking"
  frequency: string;          // "Weekly"
}
```

#### `LogoStrip.tsx`
```ts
interface LogoStripProps {
  label: string;              // "Featured by big company"
  logos: string[];            // nombres de clientes (renderizados por ClientLogos)
}
```

#### `ClientLogos.tsx`
```ts
interface ClientLogosProps { name: string; }
```
Renderiza wordmarks SVG/texto en gris desaturado: `Abbvie`, `Agilent Technologies`, `Johnson-johnson`, `MERCK`, `NOVARTIS`, `Alphabet`. Substituted (wordmarks simplificados, no logos oficiales).

#### `StatementSection.tsx`
```ts
interface StatementSectionProps {
  text: string;               // frase completa
  mutedPhrases: string[];     // ["physical health","mental well-being","goals and lifestyle"]
}
```
Responsabilidad: fondo lavanda + círculos concéntricos tenues (CSS/SVG) + texto serif centrado con palabras atenuadas (menor peso/opacidad).

#### `WellnessPlatformSection.tsx`
```ts
interface WellnessPlatformSectionProps {
  percent: number;            // 92
  avatarSrcs: string[];
  userReportText: string;     // "of our users report higher returns within their first 6 months."
  platformTitle: string;      // "The #1 wellness platform in the world"
  platformText: string;       // texto financiero observado
}
```
Compone el 92%, `AvatarStack`, `WorkmapScoreCard` y el bloque derecho.

#### `WorkmapScoreCard.tsx`
```ts
interface WorkmapBar { label: string; percent: number; color: string; }
interface WorkmapScoreCardProps {
  title: string;              // "Workmap Score"
  subtitle: string;           // "See the workmap in one sheet"
  bars: WorkmapBar[];         // Happy 90, Gloomy 60, Depressed 85, Sadness 40
  toggleLeftActive: boolean;
  onToggle: (left: boolean) => void;
}
```

#### `ExpertsSection.tsx`
```ts
interface Expert { imageSrc: string; imageAlt: string; name: string; description: string; }
interface ExpertsSectionProps {
  title: string;              // "Meet the experts behind your well-being"
  subtitle: string;
  experts: Expert[];          // 4 (la 4.ª con nombre visible parcial → usar "Expert" placeholder? ver nota)
}
```
> Nota: la 4.ª card está cortada y su nombre no es visible. Decisión: usar un nombre placeholder `Sofia Reyes`? Eso inventa. Mejor: dejar el nombre como string vacío y renderizar solo la descripción? Pero la píldora incluye nombre. **Decisión de fidelidad:** mantener la card con la descripción observada `…ced eating habits that fit… personal goals.` y un nombre genérico `Wellness Expert` marcado como `substituted` en `content.ts`, con comentario. Alternativa más segura: omitir la 4.ª card (solo 3 expertos) — pero eso altera el layout 4-up. **Recomendación:** mantener 4 cards, la 4.ª con `name: 'Wellness Expert'` (substituted) y descripción truncada observada. Confirmar con usuario.

#### `ExpertCard.tsx`
```ts
interface ExpertCardProps { imageSrc: string; imageAlt: string; name: string; description: string; }
```

#### `MoodTagsMarquee.tsx`
```ts
interface MoodTagsMarqueeProps {
  tags: string[];             // Wellbeing, Healthy, Mood, Harmony, Balance, Sadness, Nutrition, Emotional, Stress, Sleep
  rows?: number;              // 2
}
```
Responsabilidad: dos filas de pills + `FloralPillIcon` intercalados, animación CSS `translateX` infinita, direcciones opuestas, pausa en hover, respeto a `prefers-reduced-motion`.

#### `DailyMoodMeterSection.tsx`
```ts
interface MoodBar { label: string; percent: number; color: string; }
interface DailyMoodMeterSectionProps {
  title: string;              // "Our programs are tailored to your unique personality"
  mood: 'happy' | 'gloomy' | 'depressed' | 'sadness';
  percent: number;            // 87
  bars: MoodBar[];            // Happy 87, Gloomy 46, Depressed 57, Sadness 16
  onMoodChange: (m: 'happy'|'gloomy'|'depressed'|'sadness') => void;
}
```

#### `MoodGauge.tsx`
```ts
interface MoodGaugeProps {
  percent: number;
  mood: 'happy' | 'gloomy' | 'depressed' | 'sadness';
  size?: 'sm' | 'md' | 'lg';
}
```
Responsabilidad: semicírculo SVG con arco de progreso animado (`stroke-dashoffset` transition), iconos de estado en los extremos.

#### `Footer.tsx`
```ts
interface FooterColumn { heading: string; links: { label: string; href: string }[]; description?: string; }
interface FooterProps {
  headline: string;           // "Effortlessly enhance your well-being, optimize your daily routines,"
  location: { label: string; value: string };
  phone: { label: string; value: string };
  emailCta: string;           // "Send email to us →"
  columns: FooterColumn[];    // Circle Way, 01 - Social, 02 - Explore, 03 - Supports
  newsletter: { title: string; text: string; placeholder: string; cta: string };
  copyright: string;          // "Copyright 2026 Circle Way. All rights reserved."
}
```

---

## 4. Plan de Tipografía y Tokens

### 4.1 Carga de fuentes (`index.html`)

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Circle Way — Wellness</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
      rel="stylesheet"
    />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

> Si se prefiere `Playfair Display` + `Inter`, sustituir la URL por `family=Playfair+Display:wght@400;500;600&family=Inter:wght@400;500;600`. Mantener las variables CSS (`--font-serif`, `--font-sans`) sin cambios.

### 4.2 `src/index.css` — tokens + Tailwind v4

```css
@import "tailwindcss";

@theme {
  /* Tipografía */
  --font-serif: "Instrument Serif", "Playfair Display", Georgia, serif;
  --font-sans: "Plus Jakarta Sans", "Inter", system-ui, sans-serif;

  /* Colores semánticos */
  --color-bg-dark: #0C2E1B;
  --color-bg-light: #F6FBF8;
  --color-panel-light: #9BD6B0;
  --color-panel-purple: #D7B4F8;
  --color-text-serif-light: #C8DDD0;
  --color-text-sans-dark: #112218;
  --color-text-muted: #6B7280;
  --color-accent-purple: #C89BF5;
  --color-accent-green: #74C69D;
  --color-mood-happy: #4ADE80;
  --color-mood-gloomy: #C084FC;
  --color-mood-depressed: #FB923C;
  --color-mood-sadness: #F87171;
  --color-border-dark: rgba(255, 255, 255, 0.14);
  --color-border-light: #E5E7EB;

  /* Radios */
  --radius-sm: 6px;
  --radius-md: 12px;
  --radius-lg: 24px;
  --radius-full: 9999px;

  /* Sombras */
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.1);
  --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.15);
  --shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.2);
}

:root {
  /* Variables CSS runtime (espejo de @theme para uso en SVG inline / style) */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 16px;
  --space-4: 24px;
  --space-5: 32px;
  --space-6: 48px;
  --space-7: 64px;
}

html { scroll-behavior: smooth; }
body {
  font-family: var(--font-sans);
  background: var(--color-bg-light);
  color: var(--color-text-sans-dark);
  -webkit-font-smoothing: antialiased;
}

/* Utilidades de tipografía (clases custom) */
.font-serif { font-family: var(--font-serif); }
.text-display { font-size: clamp(2rem, 5vw, 4rem); line-height: 1.15; letter-spacing: -0.02em; }

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### 4.3 Escala tipográfica (clases Tailwind)

| Nivel | Clase Tailwind | Familia | Tamaño | Uso |
|---|---|---|---|---|
| Display | `font-serif text-5xl md:text-6xl` | serif | 48–64px | H1 hero |
| H2 | `font-serif text-4xl md:text-5xl` | serif | 40–48px | Statement, Meet the experts, Our programs |
| H3 | `font-serif text-2xl md:text-3xl` | serif | 28–32px | Daily Mood Meter, The #1 platform |
| Body lg | `text-lg md:text-xl` | sans | 18–20px | Subtítulos |
| Body | `text-base` | sans | 16px | Cuerpo |
| Body sm | `text-sm` | sans | 14px | Etiquetas, footer |
| Caption | `text-xs font-medium tracking-wide` | sans | 12px | Nav, badges, pills |
| Data lg | `text-3xl md:text-5xl font-medium tracking-tight` | sans | 32–48px | 86%, 92%, 87% |
| Data | `text-sm md:text-base font-medium` | sans | 14–16px | Valores de barras |

### 4.4 Dónde viven las variables CSS

- **Tokens de color/radio/sombra/fuentes:** `@theme` en `src/index.css` (Tailwind v4 los expone como utilidades `bg-bg-dark`, `text-accent-purple`, `rounded-lg`, etc.).
- **Variables runtime (espaciado, estados):** `:root` en `src/index.css`.
- **No hay `tailwind.config.js`.** Si Gemini Hydrogen necesita extender, lo hace en `@theme`.

---

## 5. Plan de Assets

### 5.1 Imágenes a generar (image-generator / Visual Engine) → `public/images/`

| ID | Ruta destino | Proporción | Prompt (de asset-inventory) |
|---|---|---|---|
| ASSET-02 | `public/images/hero-woman.jpg` | 4:5 | Portrait medium shot of a smiling Black woman with voluminous curly afro hair, head tilted slightly back laughing with joy, soft natural window side lighting, bright indoor ceiling background, crisp black and white photography, vertical aspect ratio 4:5, wellness lifestyle photography. |
| ASSET-09 | `public/images/expert-01.jpg` | 3:4 | Natural portrait of a smiling woman wellness nutritionist in her 30s wearing a crisp white shirt over a dark top, warm indoor home office background with soft plant, soft natural lighting, photorealistic, vertical aspect ratio 3:4. |
| ASSET-10 | `public/images/expert-oliver-hayes.jpg` | 3:4 | Portrait of a smiling blonde woman wellness coach, hand gently resting near cheek, looking slightly upward, wearing a cozy beige knit sweater, warm blurred bookshelf background, soft studio lighting, photorealistic, vertical aspect ratio 3:4. |
| ASSET-11 | `public/images/expert-marcus-bennett.jpg` | 3:4 | Friendly portrait of a smiling man in his early 30s with short neatly trimmed beard, wearing an olive-beige casual button-up shirt, solid soft lavender studio background, even soft front lighting, photorealistic, vertical aspect ratio 3:4. |
| ASSET-12 | `public/images/expert-daniel-carter.jpg` | 3:4 | Portrait of a smiling brunette woman with long wavy dark hair, looking slightly upward, wearing a light blue collared top, clean bright white/light grey studio background, soft side lighting, photorealistic, vertical aspect ratio 3:4. |
| ASSET-13a | `public/images/avatar-01.jpg` | 1:1 | Clean headshot portrait, diverse friendly professional woman, soft even lighting, neutral background, circular crop ready. |
| ASSET-13b | `public/images/avatar-02.jpg` | 1:1 | Clean headshot portrait, smiling blonde woman wellness coach, soft even lighting, neutral background, circular crop ready. |
| ASSET-13c | `public/images/avatar-03.jpg` | 1:1 | Clean headshot portrait, smiling man with short beard, soft even lighting, neutral background, circular crop ready. |
| ASSET-13d | `public/images/avatar-04.jpg` | 1:1 | Clean headshot portrait, smiling brunette woman, soft even lighting, neutral background, circular crop ready. |
| ASSET-13e | `public/images/avatar-05.jpg` | 1:1 | Clean headshot portrait, friendly professional, soft even lighting, neutral background, circular crop ready. |

**Total: 10 imágenes.** Todas con `loading="lazy"` excepto hero (eager) y `alt` descriptivo.

### 5.2 SVG en código

**`src/components/Icons.tsx`** (ASSET-14, ASSET-15, ASSET-16):
`BrandLogo`, `ArrowRight`, `ArrowLeft`, `ArrowUpRight`, `Download`, `MoodHappy`, `MoodSad`, `MoodNeutral`, `ExclamationCircle`, `AssessmentIcon`, `FloralPillIcon`, `MenuIcon`, `CloseIcon`, `CheckIcon`, `SmileyIcon`, `ToggleDot`.

**`src/components/ClientLogos.tsx`** (ASSET-03…08): wordmarks SVG/texto simplificados en gris para `Abbvie`, `Agilent Technologies`, `Johnson-johnson`, `MERCK`, `NOVARTIS`, `Alphabet`. Substituted (no son logos oficiales; usar texto estilizado con `font-sans font-semibold tracking-wide text-gray-400` dentro de `<svg>` o `<span>`). Marcar en código con comentario `// substituted: simplified wordmark`.

**Decoración (ASSET-16):** círculos concéntricos lavanda implementados como CSS (pseudo-elementos con `border-radius: 50%` y `border: 1px solid rgba(167,139,250,0.25)`) o SVG en `StatementSection`/`WellnessPlatformSection`. Sin imagen raster.

### 5.3 Reglas de uso de assets

- No usar screenshot completo como fondo.
- `public/images/*` referenciadas como `/images/...` (string literal, no import).
- SVG con `currentColor` para tematización.
- `width`/`height` explícitos en `<img>` para evitar CLS.

---

## 6. Estrategia Responsive e Interacciones

### 6.1 Breakpoints de verificación

| Nombre | Ancho × Alto | Tailwind | Uso |
|---|---|---|---|
| Mobile | 390 × 844 | base (mobile-first) | Layout apilado, menú hamburguesa |
| Tablet | 768 × 1024 | `md:` (≥768) | 2 columnas, grids compactos |
| Desktop | 1440 × 900 | `lg:` (≥1024) / `xl:` (≥1280) | Layout completo multi-columna |

> Tailwind por defecto: `sm 640`, `md 768`, `lg 1024`, `xl 1280`, `2xl 1536`. Se usan `md`, `lg`, `xl`. No se añaden breakpoints custom para mantener simplicidad; el contenedor principal usa `max-w-7xl mx-auto px-4 md:px-6 lg:px-8`.

### 6.2 Transformación responsive por sección (resumen)

| Sección | 1440 | 768 | 390 |
|---|---|---|---|
| Navbar | Logo + enlaces + Login + Get Started | Logo + enlaces + CTAs compactos | Logo + hamburguesa; drawer |
| Hero | Badge/H1/subhead + 2 CTAs + 3 cards en fila | CTAs lado a lado, 3 cards (2+1) | CTAs apilados, cards apiladas |
| LogoStrip | 6 logos en fila | 3+3 | 2 por fila (wrap) |
| Statement | Texto serif centrado, círculos decorativos | Igual, tamaño reducido | Igual, tamaño reducido |
| WellnessPlatform | 92% + avatares + Workmap card + texto (3 cols) | 2 cols / apilado | 1 col: 92% → card → texto |
| Experts | 4 cards en fila | 2×2 | 1 por fila o scroll horizontal snap |
| MoodTagsMarquee | 2 filas pills | 2 filas | Marquee continuo fluido |
| DailyMoodMeter | Semicírculo grande centrado | Mediano | Compacto |
| Footer | CTA + contacto + 5 columnas | 2–3 cols | 1 col apilada |

### 6.3 Interacciones

1. **Menú móvil** (`MobileMenu`): drawer desde la derecha, overlay con `backdrop-blur`, cierre con `X` SVG, ESC, bloqueo de scroll (`overflow: hidden` en body), focus trap (primer/último elemento focusable). Transición 200ms.
2. **Botones/controles**: `hover` (color/opacidad), `focus-visible` (anillo 2px `--color-accent-purple`), `active:scale-[0.97]`. Transición 150ms `ease-out`.
3. **Carrusel tarjeta central** (`DashboardGaugeCard`): flechas `ArrowLeft`/`ArrowRight` actualizan `pageIndex` (0..2), barra de paginación animada, transición de opacidad 200ms. Funcional con teclado (Enter/Space).
4. **Mood meter interactivo** (`DailyMoodMeterSection` + `MoodGauge`): estado `mood` y `percent`. Click en iconos de estado (Happy/Gloomy/Depressed/Sadness) actualiza el mood seleccionado, el número grande y el arco del semicírculo (transición `stroke-dashoffset` 400ms). Estado inicial: `Happy` / `87%`. Barras laterales resaltan la seleccionada.
5. **Newsletter** (`Footer`): input email + botón `Subscribe →`. Validación inline (regex `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`). Estado `idle | loading | success | error`. En success muestra mensaje de confirmación sin recargar. Sin backend (estático); nota: integrar endpoint real después.
6. **Marquee** (`MoodTagsMarquee`): CSS `@keyframes marquee` con `transform: translateX`, dos filas en direcciones opuestas, `animation-play-state: paused` en hover, desactivado con `prefers-reduced-motion`.
7. **Expertos**: en móvil, scroll horizontal con `snap-x snap-mandatory` y `overflow-x-auto`; en desktop grid 4 columnas.
8. **Avatar stack**: avatares circulares superpuestos con `ring-2 ring-bg-dark` y `-ml-3`.

### 6.4 Accesibilidad mínima

- Landmarks semánticos: `<header>`, `<nav>`, `<main>`, `<section aria-labelledby>`, `<footer>`.
- `alt` en todas las imágenes; SVG decorativos con `aria-hidden="true"`.
- Contraste: texto sobre fondo oscuro en blanco/off-white; sobre claro en `#112218`.
- `focus-visible` visible en todos los controles.
- `prefers-reduced-motion` respetado (marquee + transiciones).

---

## 7. Orden Paso a Paso de Implementación (para Gemini Hydrogen)

> Ejecutar en este orden. Cada paso es verificable antes de pasar al siguiente.

1. **Bootstrap del proyecto**
   - Crear `package.json`, `vite.config.ts`, `tsconfig*.json`, `index.html`.
   - `npm install`.
   - Crear `src/main.tsx` (render `<App />` en `#root` con `StrictMode`), `src/App.tsx` (esqueleto vacío), `src/index.css` con tokens.
   - Verificar: `npm run dev` levanta sin errores.

2. **Tokens y fuentes**
   - Pegar `index.css` completo (sección 4.2).
   - Verificar en DevTools que `Instrument Serif` y `Plus Jakarta Sans` se cargan y que las utilidades `bg-bg-dark`, `font-serif` funcionan.

3. **Iconografía base (`Icons.tsx`)**
   - Implementar todos los SVG del listado (sección 5.2).
   - Verificar render aislado (importar en App temporalmente).

4. **Primitivas UI (`ui/Button`, `Pill`, `ProgressBar`, `MobileMenu`)**
   - Implementar con variantes y estados hover/focus/active.
   - Verificar estados visualmente.

5. **Generación de assets de imagen**
   - Generar las 10 imágenes (sección 5.1) en `public/images/`.
   - Verificar que todas existen y se sirven en `/images/...`.

6. **Navbar + MobileMenu**
   - Implementar `Navbar.tsx` con logo, enlaces, Login, Get Started, hamburguesa.
   - Verificar responsive 390/768/1440.

7. **HeroSection + 3 Dashboard Cards**
   - Implementar `HeroSection`, `DashboardPhotoCard`, `DashboardGaugeCard`, `DashboardProfileCard`.
   - Datos desde `content.ts` (copy observado).
   - Verificar grid y carousel de la tarjeta central.

8. **LogoStrip + ClientLogos**
   - Implementar wordmarks grises.

9. **StatementSection**
   - Fondo lavanda, círculos concéntricos, texto con palabras atenuadas.

10. **WellnessPlatformSection + WorkmapScoreCard**
    - 92%, avatar stack, Workmap Score con bars y toggle, texto plataforma.

11. **ExpertsSection + ExpertCard**
    - 4 cards con foto y píldora púrpura.

12. **MoodTagsMarquee**
    - 2 filas, pills + floral icons, animación.

13. **DailyMoodMeterSection + MoodGauge**
    - Título, smiley, semicírculo, barras, estado interactivo.

14. **Footer**
    - Headline, contacto, columnas, newsletter con validación, copyright.

15. **Ensamblado final en `App.tsx`**
    - Orden de secciones según 3.1.
    - Verificar scroll completo.

16. **Pulido responsive y accesibilidad**
    - Revisar cada sección en 390/768/1440.
    - Focus-visible, reduced-motion, landmarks, alt.

17. **Verificación con Playwright**
    - Capturas en `docs/design/captures/` a 1440×900, 768×1024, 390×844 (full page).
    - Comparar contra `references/1.jpg`–`4.jpg`.
    - Corregir discrepancias (máximo 3 rondas visuales).

18. **Build de producción**
    - `npm run typecheck && npm run build`.
    - Verificar sin errores ni warnings críticos.

---

## 8. Criterios de Aceptación Verificables

### 8.1 Build y runtime
- [ ] `npm install` completa sin errores.
- [ ] `npm run dev` levanta en <5s y HMR funciona.
- [ ] `npm run typecheck` pasa sin errores.
- [ ] `npm run build` genera `dist/` sin errores.
- [ ] `npm run preview` sirve el build correctamente.

### 8.2 Fidelidad visual (vs. `references/`)
- [ ] Las 10 secciones observadas están presentes y en el orden correcto: Navbar, Hero + 3 cards, Featured by big company, Statement circular, Bloque morado 92% + Workmap Score + #1 platform, Meet the experts, Marquee de pills, Our programs + Daily Mood Meter, Footer.
- [ ] Textos observados reproducidos verbatim (incluyendo `Electricity Savings`, texto financiero, `Circle Way`).
- [ ] Colores de tokens aplicados (fondo oscuro `#0C2E1B`, lavanda `#D7B4F8`, verde `#74C69D`, etc.).
- [ ] Tipografía serif en títulos y sans en cuerpo (Instrument Serif + Plus Jakarta Sans cargadas, verificable en Network/DevTools).
- [ ] Sin emojis en la UI; toda iconografía es SVG.
- [ ] Sentence case en textos de interfaz (regla de capitalización), salvo nombres propios/siglas.

### 8.3 Assets
- [ ] Las 10 imágenes existen en `public/images/` y se renderizan.
- [ ] Los 6 wordmarks de clientes se renderizan en gris.
- [ ] Logo floral (BrandLogo) presente en navbar y footer.
- [ ] Sin imágenes raster usadas como iconos.

### 8.4 Responsive
- [ ] Sin scroll horizontal a 390×844.
- [ ] Menú hamburguesa funcional a 390.
- [ ] Capturas Playwright guardadas en `docs/design/captures/` para 1440×900, 768×1024, 390×844.
- [ ] Layouts coherentes según tabla 6.2.

### 8.5 Interacciones
- [ ] Menú móvil abre/cierra con animación, ESC y overlay.
- [ ] Flechas del carrusel central cambian `pageIndex` y barra de paginación.
- [ ] Mood meter: click en icono de estado actualiza número, arco y barra resaltada; estado inicial `Happy 87%`.
- [ ] Newsletter: validación inline, estado success sin recarga, error visible.
- [ ] Marquee pausa en hover y se desactiva con `prefers-reduced-motion`.

### 8.6 Accesibilidad
- [ ] Landmarks semánticos presentes.
- [ ] `alt` en todas las imágenes.
- [ ] `focus-visible` visible en botones/links/inputs.
- [ ] SVG decorativos con `aria-hidden="true"`.
- [ ] Navegación completa por teclado (Tab, Enter, Space, ESC).

### 8.7 Performance
- [ ] Imágenes con `loading="lazy"` excepto hero (eager).
- [ ] `width`/`height` en `<img>` para evitar CLS.
- [ ] Fuentes con `display=swap`.

---

## 9. Decisiones Pendientes / Riesgos (para confirmar con el usuario)

1. **Inconsistencias de marca/contenido** (de visual-analysis §6.1): `Electricity Savings`, texto de inversión, `Circle Way` (cerámica) en footer. Plan por defecto: **preservar verbatim** (fidelidad a referencia). Confirmar si se reemplazan.
2. **4.ª experta (nombre no visible):** plan usa `name: 'Wellness Expert'` (substituted) + descripción truncada observada. Confirmar o proporcionar nombre real.
3. **Discrepancia de datos:** `Happy 80%` (hero) vs `87%` (mood meter). Preservar ambos valores tal cual (observados).
4. **Selección de fuentes:** por defecto `Instrument Serif` + `Plus Jakarta Sans`. Alternativas `Playfair Display` + `Inter` aceptables sin cambiar tokens.
5. **Carousel de tarjeta central:** las flechas actualizan estado/paginación pero el contenido es el observado único. Si se desea multi-página con contenido nuevo, extender el array `pages` (fuera de alcance de fidelidad estricta).

---

**Fin del plan.** Listo para ser persistido en `docs/design/implementation-plan.md` por el coordinador (Gemini Hydrogen). El subagente implementation-planner opera en modo solo lectura y no crea, edita ni elimina archivos.