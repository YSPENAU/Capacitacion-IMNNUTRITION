# Guía del Código - Plataforma de Capacitación IMN

Esta guía explica qué hace cada parte importante del proyecto para que puedas mantenerlo, extenderlo o delegarlo a otro equipo sin perder contexto.

## 1) Qué es esta aplicación

Es una plataforma web de capacitación interna construida con React + TypeScript + Vite.

Objetivos funcionales:
- Autenticación básica.
- Dashboard visual con módulos de formación.
- Bloqueo/desbloqueo de módulos según progreso.
- Rutas protegidas por sesión.
- Persistencia de sesión y progreso en localStorage.

## 2) Estructura general por capas

### Capa de entrada y composición
- src/main.tsx
  - Punto de arranque React.
  - Monta App en el div root.

- src/App.tsx
  - Envoltorio principal.
  - Configura HashRouter para navegación.
  - Inyecta providers globales: AuthProvider y ProgressProvider.

### Capa de dominio
- src/domain/entities/Module.ts
  - Define el modelo Module y estados: LOCKED, ACTIVE, COMPLETED.

- src/domain/repositories/ModuleRepository.ts
  - Contrato de datos para módulos.

- src/domain/usecases/GetModulesUseCase.ts
  - Caso de uso para obtener módulos.

- src/domain/usecases/CompleteModuleUseCase.ts
  - Caso de uso para completar módulo.

### Capa de datos
- src/data/repositories/ModuleRepositoryImpl.ts
  - Implementación del repositorio en memoria.
  - Contiene estado inicial de los 4 módulos del dashboard.
  - completeModule(id) marca como COMPLETED y desbloquea el siguiente.

### Capa de presentación
- src/presentation/router/AppRoutes.tsx
  - Mapa completo de rutas de login, dashboard y módulos 1-4.
  - Incluye RequireAuth para proteger rutas.
  - Incluye NavigablePage para inyectar onBack/onNext automáticamente.

- src/presentation/context/AuthContext.tsx
  - Estado global de sesión (isLoggedIn, username).
  - login/logout con persistencia en localStorage.

- src/presentation/context/ProgressContext.tsx
  - Estado global de progreso de módulos.
  - Persistencia en localStorage (userProgress).

- src/presentation/components/
  - TopBar.tsx: barra superior con título, logo y cerrar sesión.
  - StageWrapper.tsx: layout base con fondo y contenedor global.
  - ModuleCard.tsx: componente visual de tarjeta de módulo (apoyo/reutilizable).
  - quiz/GenericQuiz.tsx: motor de evaluación reutilizable.
  - quiz/views/*: vistas por tipo de pregunta.

- src/presentation/pages/
  - Pantallas de negocio (login, dashboard y contenidos de módulos).

## 3) Flujo funcional de extremo a extremo

1. La app inicia en src/main.tsx y renderiza App.
2. App configura router + contextos globales.
3. AppRoutes evalúa autenticación:
   - Si no hay sesión, redirige a /login.
   - Si hay sesión, habilita dashboard y módulos.
4. LoginPage valida credenciales hardcodeadas y actualiza AuthContext.
5. TrainingDashboard consulta módulos vía casos de uso.
6. Al completar módulos/quizzes, se actualiza progreso global y se habilitan rutas nuevas.
7. El progreso se guarda en localStorage para persistencia entre recargas.

## 4) Estado global y persistencia

### AuthContext
Responsabilidades:
- Saber si hay sesión activa.
- Exponer login(username) y logout().

Claves usadas en localStorage:
- isLoggedIn
- username

### ProgressContext
Responsabilidades:
- Controlar desbloqueos y avance por áreas.
- Registrar submódulos terminados en módulos 3 y 4.

Clave usada:
- userProgress (objeto JSON completo de progreso)

### GenericQuiz
Responsabilidades:
- Guardar avance parcial del quiz por moduleId.
- Calcular score final y validar regla de aprobación.

Clave usada:
- quiz_progress_${moduleId}

## 5) Ruteo y navegación

Archivo central: src/presentation/router/AppRoutes.tsx

Patrones importantes:
- RequireAuth: bloquea acceso si no hay sesión.
- NavigablePage: evita repetir lógica de navegación en pantallas lineales.
- onBack/onNext: contrato de navegación de cada página.

Rutas principales:
- /login
- /
- /m1/*  (Corporativo)
- /m2/*  (SST)
- /m3/*  (Proceso: Producción/Comercial/Logística)
- /m4/*  (Áreas de apoyo: Contabilidad/Marketing/ARGIP)

## 6) Qué hace cada grupo de páginas

## Login y Dashboard
- auth/LoginPage.tsx
  - Pantalla de acceso.
  - Credenciales actuales: admin / admin123.

- TrainingDashboard.tsx
  - Muestra planta base + overlays de módulos.
  - Permite entrar al módulo activo/completado.

## Módulo 1 (Corporativo)
Archivos en src/presentation/pages/module1:
- CorporativoPage.tsx: portal inicial del módulo 1.
- KeyMomentsTimeline.tsx: línea de tiempo de hitos.
- BrandEvolutionTimeline.tsx: evolución de marca.
- QuienesSomos.tsx: identidad de la organización.
- NuestraFilosofia.tsx: filosofía institucional.
- Mision.tsx: misión corporativa.
- Vision.tsx: visión.
- Valores.tsx: valores organizacionales.
- PropuestaValor.tsx: propuesta de valor.
- Organigrama.tsx: estructura organizacional.
- BeneficiosIMN.tsx: beneficios.
- QuizEtapa1.tsx: evaluación parcial etapa 1.
- QuizCongratulations.tsx: éxito de etapa 1.
- QueHacemosVideo.tsx: video de qué hacemos.
- ObjetivosEstrategicos.tsx: objetivos estratégicos.
- CoberturaGeografica.tsx: cobertura geográfica.
- NuestrasMarcas.tsx: marcas.
- ProductosTimeline.tsx: línea de productos.
- QuizModulo1.tsx: quiz final módulo 1.
- Modulo1Congratulations.tsx: cierre de módulo 1.

## Módulo 2 (SST)
Archivos en src/presentation/pages/module2:
- SSTIntro.tsx: introducción SST.
- SSTKnowledgeCheck.tsx: validación inicial de conocimiento.
- SGSSTDefinition.tsx: definición SGSST.
- CyclePHVA.tsx: ciclo PHVA.
- SSTPoliciesObjectives.tsx: políticas y objetivos.
- SSTRolesResponsibilities.tsx: roles y responsabilidades.
- SSTCommittees.tsx: comités SST.
- SSTConcepts.tsx: conceptos clave.
- SSTEPP.tsx: elementos de protección personal.
- SSTAccidentFlow.tsx: flujo ante accidentes.
- SSTQuiz.tsx: quiz del módulo.
- SSTCongratulations.tsx: cierre de módulo 2.

## Módulo 3 (Proceso)
Archivos en src/presentation/pages/module3:
- ProcessPortal.tsx: portal de selección (Producción/Comercial/Logística).

Producción:
- ProduccionCalidadIntro.tsx
- ProduccionPropositoFunciones.tsx
- ProduccionOrganigrama.tsx
- ProduccionProcesosClave.tsx
- ProduccionAreasApoyo.tsx
- ProduccionQuiz.tsx

Comercial:
- ComercialIntro.tsx
- ComercialPropositoFunciones.tsx
- ComercialOrganigrama.tsx
- ComercialProcesosClave.tsx
- ComercialAreasApoyo.tsx
- ComercialQuiz.tsx

Logística:
- LogisticaIntro.tsx
- LogisticaPropositoFunciones.tsx
- LogisticaOrganigrama.tsx
- LogisticaProcesosClave.tsx
- LogisticaAreasApoyo.tsx
- LogisticaQuiz.tsx

## Módulo 4 (Áreas de apoyo)
Archivos en src/presentation/pages/module4:
- SupportAreasPortal.tsx: portal de selección (Contabilidad/Marketing/ARGIP).

Contabilidad:
- ContabilidadIntro.tsx
- ContabilidadPropositoFunciones.tsx
- ContabilidadOrganigrama.tsx
- ContabilidadProcesosClave.tsx
- ContabilidadAreasApoyo.tsx
- ContabilidadQuiz.tsx

Marketing:
- MarketingIntro.tsx
- MarketingPropositoFunciones.tsx
- MarketingOrganigrama.tsx
- MarketingProcesosClave.tsx
- MarketingAreasApoyo.tsx
- MarketingQuiz.tsx

ARGIP:
- ArgipIntro.tsx
- ArgipPropositoFunciones.tsx
- ArgipOrganigrama.tsx
- ArgipProcesosClave.tsx
- ArgipAreasApoyo.tsx
- ArgipQuiz.tsx

## 7) Sistema de quizzes reutilizable

Carpeta: src/presentation/components/quiz

- types.ts
  - Tipos de preguntas soportadas: single, multi, true-false, matching.

- GenericQuiz.tsx
  - Motor que controla pregunta actual, respuestas, score y resultado.
  - Regla actual de aprobación: 100%.

- views/SingleChoiceView.tsx
- views/MultiChoiceView.tsx
- views/TrueFalseView.tsx
- views/MatchingView.tsx
  - Renderizan cada tipo de pregunta.

- ProgressBar.tsx
  - Barra visual de progreso del quiz.

## 8) Estilos y diseño

- src/design-tokens.css
  - Variables globales de color, tipografía, spacing, radios y sombras.

- src/index.css
  - Estilos globales y keyframes base.

- Cada página/componente tiene su archivo CSS pareado.

## 9) Reglas de desbloqueo (resumen)

- El dashboard arranca con módulo 1 activo.
- Al completar un módulo, se desbloquea el siguiente en el repositorio.
- En módulo 3 y 4 se registran submódulos completados en ProgressContext.
- Portales de módulo 3 y 4 controlan retorno y finalización según progreso.

## 10) Cómo extender el proyecto correctamente

### Agregar una nueva pantalla
1. Crear archivo en la carpeta del módulo correspondiente.
2. Crear su CSS pareado.
3. Agregar import y Route en AppRoutes.tsx.
4. Conectar navegación con onBack/onNext o Navigate.

### Agregar un nuevo quiz
1. Definir preguntas con tipos de src/presentation/components/quiz/types.ts.
2. Reutilizar GenericQuiz.tsx en una nueva página.
3. Conectar onComplete para actualizar progreso y ruta siguiente.

### Cambiar credenciales de login
- Editar VALID_CREDENTIALS en src/presentation/pages/auth/LoginPage.tsx.

## 11) Notas técnicas importantes

- La sesión/progreso se almacenan en localStorage (lado cliente).
- No hay backend; el repositorio de módulos está en memoria.
- HashRouter se usa para compatibilidad de despliegue estático.
## 12) Bugs encontrados y resueltos

### BUG-001: Dashboard desplazado a la izquierda (contenido cortado por la mitad)

**Síntomas:**
- La planta y todo el contenido del dashboard se mostraban desplazados hacia la izquierda, ocupando solo la mitad izquierda de la pantalla.
- Aparecía un espacio vacío a la derecha y la imagen de la planta se veía cortada.

**Causa raíz:**
El archivo `src/presentation/pages/module2/SSTEPP.css` redefinía el `@keyframes fadeInUp` global con un `translate(-50%)` en el eje X:

```css
/* ANTES (INCORRECTO) — SSTEPP.css */
@keyframes fadeInUp {
    from { transform: translate(-50%, 50px); }
    to   { transform: translate(-50%, 0); }
}
```

Como CSS **no tiene scope por componente**, esta declaración sobrescribía la definición global de `src/index.css` que usa solo `translateY`:

```css
/* index.css (correcto) */
@keyframes fadeInUp {
    from { transform: translateY(16px); }
    to   { transform: translateY(0); }
}
```

El `.dashboard-container` en `TrainingDashboard.css` usa `animation: fadeInUp 0.6s ease forwards`. Al cargarse la página del dashboard, el navegador tomaba la última definición de `fadeInUp` encontrada en el CSS cargado, que era la de SSTEPP.css con `translate(-50%, 0)`. Esto aplicaba un `translateX(-50%)` permanente = **-640px en un viewport de 1280px**.

**Diagnóstico (datos de Puppeteer headless):**
```
ANTES del fix:
  .dashboard-container: width=1280 left=-640 right=640 transform=matrix(1,0,0,1,-640,0)

DESPUÉS del fix:
  .dashboard-container: width=1280 left=0 right=1280 transform=matrix(1,0,0,1,0,0)
```

**Solución aplicada:**
1. Se renombró la animación en SSTEPP.css de `fadeInUp` a `eppFadeInUp` para evitar la colisión de nombres.
2. Se actualizó la referencia `.fade-in-up` en el mismo archivo para usar `eppFadeInUp`.
3. Se eliminaron las redefiniciones duplicadas (pero inofensivas) de `fadeInUp` en `SGSSTDefinition.css`, `SSTKnowledgeCheck.css` y `SSTRolesResponsibilities.css` para prevenir conflictos futuros.

**Archivos modificados:**
- `src/presentation/pages/module2/SSTEPP.css` — renombrado keyframe
- `src/presentation/pages/module2/SGSSTDefinition.css` — eliminado duplicado
- `src/presentation/pages/module2/SSTKnowledgeCheck.css` — eliminado duplicado
- `src/presentation/pages/module2/SSTRolesResponsibilities.css` — eliminado duplicado

**Lección aprendida:**
En proyectos con CSS global (sin CSS Modules ni scoped styles), los nombres de `@keyframes` son globales. Si dos archivos definen el mismo `@keyframes` con comportamientos distintos, el último cargado gana y afecta a **todos** los elementos que usen esa animación en toda la app. Se recomienda usar nombres únicos con prefijo del componente (ej: `eppFadeInUp`, `sstBounce`).
---

## 13) Mejoras de diseño responsivo (Marzo 2026)

Se realizó una revisión integral de CSS responsivo en más de 50 archivos del proyecto. Los cambios principales fueron:

### Cambios globales aplicados
- Reemplazo de `width: 100vw` por `width: 100%` en todos los contenedores para evitar overflow horizontal por scrollbar.
- Tipografía adaptativa con `clamp()` en lugar de tamaños fijos (px/rem), por ejemplo: `font-size: clamp(0.85rem, 2vw, 1rem)`.
- Adición de breakpoints `@media (max-width: 768px)` y `@media (max-width: 480px)` donde no existían.
- Uso de `overflow-x: hidden` en `html, body` (index.css) como red de seguridad.
- Layouts flex/grid convertidos a columnas en pantallas pequeñas.

### Archivos principales afectados
- `src/index.css` — layout global del `#root`.
- `src/presentation/components/TopBar.css` — barra responsiva.
- `src/presentation/components/ModuleCard.css` — tarjetas adaptativas.
- `src/presentation/pages/TrainingDashboard.css` — dashboard con planta.
- `src/presentation/pages/auth/LoginPage.css` — login centrado.
- Todos los CSS de `module1/`, `module2/`, `module3/`, `module4/`.

### Convención de prefijos CSS adoptada
Para evitar colisiones globales de nombres (ver BUG-001), los componentes rediseñados usan prefijos únicos:
| Componente | Prefijo | Ejemplo |
|---|---|---|
| KeyMomentsTimeline | `km-` | `.km-card`, `.km-modal` |
| BrandEvolutionTimeline | `be-` | `.be-slide`, `.be-tab` |
| SSTEPP | `epp` | `eppFadeInUp` (keyframe) |

---

## 14) Rediseño de páginas interactivas

### 14a) KeyMomentsTimeline — Hitos clave de IMN

**Ruta:** `/#/m1/key-moments`
**Archivo:** `src/presentation/pages/module1/KeyMomentsTimeline.tsx` + `.css`

**Antes:** Tarjetas que se expandían inline dentro del grid, causando recortes (overflow hidden) y mala experiencia en móvil.

**Después:** Diseño modal con grid compacto:
- Grid de tarjetas compactas con año, título y thumbnail.
- Al hacer clic, se abre un **modal overlay** con imagen grande, descripción completa y navegación entre hitos (← →).
- Cierre con Escape, clic fuera del modal, o botón X.
- Animaciones de entrada (fade + scale).
- 100% responsivo: grid se adapta de 3 columnas a 1.
- Prefijo CSS: `km-`.

### 14b) BrandEvolutionTimeline — Evolución de la marca

**Ruta:** `/#/m1/brand-evolution`
**Archivo:** `src/presentation/pages/module1/BrandEvolutionTimeline.tsx` + `.css`

**Antes:** Layout estático con elementos posicionados con `position: absolute` y coordenadas fijas (top/left en porcentajes). Se rompía completamente en pantallas pequeñas.

**Después:** Carrusel interactivo de 3 eras:
- **3 tabs** en la parte superior: "Línea Negra" (2020-2021), "Transición Visual" (2021-2022), "Línea Blanca" (2022-2024).
- Cada era incluye: badge de período, título, subtítulo, descripción, logo de la marca, y grid de productos.
- **Transiciones direccionales**: slides entran/salen con animación izquierda/derecha según la dirección de navegación.
- **Barra de progreso** que se llena con el color accent de cada era.
- **Navegación por teclado** (flechas ← →).
- **Dots indicadores** + botones Anterior/Siguiente.
- **Product cards** con animación staggered pop-in y efecto hover (scale + shadow).
- Layout lado a lado (texto + productos) en desktop, apilado en móvil.
- Prefijo CSS: `be-`.
- Datos estructurados en array `ERAS[]` con tipado TypeScript (`Era` interface).

---

## 15) Estado actual del proyecto (Marzo 2026)

### ✅ Completado
| Tarea | Detalle |
|---|---|
| Responsive CSS global | 50+ archivos actualizados con clamp(), breakpoints, 100% en vez de 100vw |
| BUG-001 Dashboard | Colisión de @keyframes resuelta — prefijo `eppFadeInUp` |
| KeyMomentsTimeline | Rediseño completo: grid + modal interactivo |
| BrandEvolutionTimeline | Rediseño completo: carrusel de 3 eras con tabs, slides, products |
| Documentación | GUIA_CODIGO_IMN.md + README.md actualizados |
| TypeScript | Compila sin errores (`npx tsc --noEmit` limpio) |

### 🔲 Pendiente / Oportunidades de mejora
| Área | Descripción |
|---|---|
| Otras páginas del Módulo 1 | Páginas como QuienesSomos, Organigrama, ProductosTimeline podrían recibir el mismo tratamiento interactivo |
| Módulos 2, 3 y 4 | Las páginas de estos módulos tienen CSS responsivo pero no han sido rediseñadas visualmente |
| Accesibilidad (a11y) | Agregar aria-labels, roles ARIA, focus trap en modales |
| Testing | No hay tests unitarios ni E2E — candidatos: quizzes, navegación, progreso |
| Backend real | Actualmente todo es localStorage — podría migrar a API/base de datos |
| CSS Modules / Scoped styles | Migrar a CSS Modules para eliminar riesgo de colisiones globales |
| Animaciones reducidas | Respetar `prefers-reduced-motion` para accesibilidad |
| PWA / Offline | Service worker para capacitación sin conexión |

### Servidor de desarrollo
- Comando: `npm run dev`
- Puerto habitual: `5173` o `5174`
- Ruta base: `http://localhost:5173/#/`
- Login: admin / admin123
---

Si quieres, en una segunda iteración puedo generar una versión “para no técnicos” con diagramas y flujo visual de usuario (sin código).