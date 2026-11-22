# Informe de Visual QA — LandingFactory (Ronda 1)

**Proyecto:** healthwebsite  
**Rol:** visual-qa (modo solo lectura, persistido por el implementador)  
**Referentes:** `references/1.jpg`, `2.jpg`, `3.jpg`, `4.jpg`  
**Capturas generadas:** `docs/design/captures/` (desktop 1440×900, tablet 768×1024, mobile 390×844)  

---

## 1. Veredicto de Ronda

> **NEEDS_FIXES** -> Correcciones aplicadas en Ronda 2.

---

## 2. Resumen Ejecutivo por Viewport

- **1440×900 (Desktop):** Layout coherente, 0 overflow horizontal, 0 errores de consola/red.
- **768×1024 (Tablet):** Adaptación responsive correcta, 0 overflow horizontal.
- **390×844 (Mobile):** Stack vertical limpio, menú hamburguesa funcional, 0 overflow horizontal.

---

## 3. Lista Priorizada de Discrepancias

| ID | Severidad | Elemento | Descripción | Corrección aplicada |
|:--:|:---------:|----------|-------------|---------------------|
| QA-01 | Crítica | Tarjeta "Electricity Savings" | Mostraba `78%` en lugar de `86%` y texto de página 2. | Movido `86%` y el texto de referencia al índice inicial (`pageIndex = 2`). |
| QA-02 | Alta | Imagen hero (`hero-woman.jpg`) | Encuadre `object-top` mostraba demasiado techo. | Ajustado a `object-[50%_62%]` para centrar el rostro sonriente. |
| QA-03 | Media | Título "Meet the experts behind your well-being" | `well-being` envolvía a 3 líneas en desktop. | Ampliado `max-w-[580px]` para mantener 2 líneas limpias. |
| QA-04 | Nota | Retratos (hero y expertos) | Imágenes generadas con IA (`generado` en `asset-inventory.md`) al no existir originales en `assets/`. | Documentado como sustitución autorizada. |

---

## 4. Verificación de Reglas Prohibidas

- **Sin emojis en la UI:** Cumplida.
- **Sin screenshot-como-fondo:** Cumplida.
- **Sin imágenes deformadas:** Cumplida.
- **Sin overflow horizontal:** Cumplida (`scrollWidth === clientWidth` en 1440, 768 y 390).
