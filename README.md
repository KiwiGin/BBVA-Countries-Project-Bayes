# Country Explorer

Aplicacion de exploracion de paises construida con **Lit 3** y **Web Components**.

Consume la API publica [REST Countries v3.1](https://restcountries.com/v3.1) para buscar, listar y visualizar informacion detallada de paises.

## Instalacion y ejecucion

```bash
npm install
npm run dev      # Servidor de desarrollo (Vite)
npm run build    # Build de produccion
npm run preview  # Preview del build
```

## Arbol de carpetas

```
src/
├── components/
│   ├── country-search/        # Buscador con debounce y busquedas recientes
│   │   ├── country-search.js
│   │   └── country-search.scss
│   ├── country-list/          # Lista de paises con paginacion y estados
│   │   ├── country-list.js
│   │   └── country-list.scss
│   ├── country-detail/        # Detalle extendido del pais seleccionado
│   │   ├── country-detail.js
│   │   └── country-detail.scss
│   ├── country-explorer/      # Orquestador raiz (estado global)
│   │   ├── country-explorer.js
│   │   └── country-explorer.scss
│   └── ui/                    # Componentes base reutilizables
│       ├── search-input/      # Input generico de busqueda
│       ├── app-card/          # Tarjeta con slots (header/body/footer)
│       ├── app-button/        # Boton con variantes (primary/secondary/text)
│       ├── app-badge/         # Badge para etiquetas (info/success/error)
│       ├── app-skeleton/      # Skeleton loader animado
│       └── app-spinner/       # Spinner de carga
├── services/
│   └── country-service.js     # Servicio fetch con AbortController
├── styles/
│   └── global.css             # CSS Custom Properties y layout global
├── utils/
│   └── icons.js               # Helper para renderizar iconos Lucide en Lit
└── main.js                    # Entry point
```

### Justificacion de la estructura

Se opto por una **arquitectura component-based** organizada por responsabilidad en vez de Clean Architecture o MVVM por las siguientes razones:

- **Clean Architecture** (domain/use-cases/adapters) introduce capas de abstraccion que no aportan valor en una app de este alcance. Solo hay un flujo (buscar → listar → detalle) y un unico origen de datos (REST Countries). Si el proyecto escalara a multiples fuentes de datos o logica de negocio compleja, se migraria a una estructura por feature con capas internas.
- **MVVM** seria redundante sobre Lit, ya que el framework implementa un patron reactivo nativo: las propiedades reactivas (`state: true`) son el ViewModel, el `render()` es la View, y el servicio es el Model.
- La separacion `components/ui/` agrupa componentes atomicos reutilizables (search-input, app-card, app-button, etc.) que son consumidos por los componentes de dominio (country-*). Esto sigue el principio de **composicion sobre herencia** propio de Web Components.

## Decisiones tecnicas

### Por que Lit 3

Lit fue elegido por:

1. **Proximidad al estandar**: Lit extiende `HTMLElement` nativo, no lo reemplaza. Los componentes son Web Components reales registrados con `customElements.define`.
2. **Shadow DOM nativo**: Encapsulacion de estilos sin configuracion adicional. Los CSS Custom Properties del proyecto cruzan el Shadow DOM, permitiendo theming global.
3. **Reactividad declarativa**: El sistema de propiedades reactivas (`static properties`) y el renderizado con `html` tagged template literals eliminan manipulacion manual del DOM.
4. **Tamano minimo**: ~5KB gzip vs ~40KB+ de frameworks como React o Angular.
5. **Directivas**: `repeat`, `choose`, `when`, `map`, `classMap`, `styleMap`, `ifDefined`, `live` permiten patrones declarativos sin logica imperativa en el template.

### Cuando NO usaria Lit

- **Aplicaciones con estado complejo compartido** (dashboards empresariales, apps financieras con multiples vistas interdependientes): React/Angular con state managers (Redux, NgRx) ofrecen mejor tooling para debug de estado.
- **Aplicaciones con mucho formulario y validacion**: Angular con Reactive Forms tiene un sistema de validacion mucho mas maduro.
- **Equipos grandes sin experiencia en Web Components**: La curva de aprendizaje de Shadow DOM, slots y eventos `composed` puede ser una barrera. React tiene un ecosistema mas amplio y mas documentacion comunitaria.

### Limite de 12 resultados: country-list

El limite de 12 resultados por pagina se aplica en **`country-list`** (no en `country-explorer`) por las siguientes razones:

1. **Separacion de responsabilidades**: `country-explorer` pasa la lista completa como propiedad. Es `country-list` quien decide como presentar los datos al usuario, incluyendo la paginacion. Esto sigue el principio de que el componente visual es responsable de su propia UX.
2. **Reutilizabilidad**: Si `country-list` se usara en otro contexto (ej: una pagina de favoritos), la paginacion vendria incluida sin que el padre tenga que implementarla.
3. **Rendimiento**: Limitar el renderizado inicial a 12 tarjetas reduce el numero de nodos DOM, mejorando el rendimiento en dispositivos moviles. El boton "Cargar mas" da control al usuario.

### Comunicacion entre componentes

```
country-explorer (orquestador)
├── country-search
│   └── search-input (UI)        ↑ CustomEvent: country-search-change
├── country-list
│   └── app-card (UI)            ↑ CustomEvent: country-select
│   └── app-skeleton (UI)        ↑ CustomEvent: country-retry
└── country-detail
    └── app-badge (UI)           ↑ CustomEvent: country-detail-back
```

- **Datos hacia abajo**: via propiedades (`.countries`, `.loading`, `.country`)
- **Datos hacia arriba**: via Custom Events con `bubbles: true` y `composed: true` para atravesar Shadow DOM
- **Coordinacion**: `country-explorer` escucha todos los eventos y gestiona el estado global

### CSS Custom Properties (Design Tokens)

Se definieron mas de 3 tokens de diseno como CSS Custom Properties en `:root`:

| Token | Valor | Uso |
|-------|-------|-----|
| `--color-primary` | `#004481` | Color principal (header, botones, focus) |
| `--color-surface` | `#ffffff` | Fondo de tarjetas y inputs |
| `--color-text` | `#333333` | Texto principal |
| `--color-text-light` | `#666666` | Texto secundario |
| `--radius-md` | `8px` | Border radius de tarjetas e inputs |
| `--shadow-sm/md/lg` | box-shadows | Elevacion de componentes |
| `--transition-fast/normal` | 150ms/300ms | Duracion de animaciones |

Estos tokens cruzan las Shadow DOM boundaries, permitiendo theming consistente en todos los componentes.

## SSR / Hydration

Lit 3 soporta SSR a traves del paquete `@lit-labs/ssr`, que renderiza componentes Lit en el servidor como Declarative Shadow DOM. El flujo seria:

1. **Server**: renderiza el HTML con `<template shadowrootmode="open">` dentro de cada componente
2. **Cliente**: Lit detecta el shadow root declarativo existente y hace **hydration** en vez de re-renderizar desde cero
3. **Beneficio**: First Contentful Paint mas rapido, SEO mejorado

En este proyecto **no se implemento SSR** porque:
- La app depende completamente de una API externa (REST Countries), por lo que el contenido no es estatico ni indexable
- Vite como dev server no soporta SSR de Web Components sin configuracion adicional
- El beneficio de SSR es mayor en apps con contenido estatico o semi-estatico (blogs, e-commerce)

Si se requiriera SSR, se usaria `@lit-labs/ssr` con un servidor Node (Express/Fastify) y el paquete `@lit-labs/ssr-client` para hydration en el cliente.

## Accesibilidad

- **Roles ARIA**: `role="search"`, `role="list"`, `role="alert"`, `role="region"`, `role="status"`, `role="button"` / `role="article"` dinamico en cards
- **aria-live**: `polite` en el contador de resultados y estado de busqueda para anunciar cambios sin interrumpir
- **aria-busy**: en el grid durante la carga de skeletons
- **Focus management**: `country-detail` recibe foco automaticamente al montarse, Escape para volver
- **Navegacion por teclado**: Enter/Space en tarjetas, Tab entre elementos interactivos, `focus-visible` en todos los componentes
- **prefers-reduced-motion**: desactiva animaciones en `app-card`, `country-list`, `app-spinner` y `country-detail`

## Directivas de Lit utilizadas

| Directiva | Donde | Por que |
|-----------|-------|---------|
| `classMap` | search-input, app-card, app-button, app-badge | Clases CSS condicionales de forma declarativa |
| `styleMap` | country-explorer | Ocultar/mostrar vistas preservando estado del input |
| `repeat` | country-list | Renderizado eficiente con key (`cca3`) para listas grandes |
| `map` | country-detail, country-search | Iteracion simple para listas pequenas (idiomas, badges, busquedas recientes) |
| `choose` | country-list | Estados mutuamente excluyentes (loading/error/empty/data) |
| `when` | country-explorer, country-detail | Renderizado condicional declarativo |
| `ifDefined` | country-detail | Atributos opcionales (alt de imagen) |
| `live` | search-input | Sincronizar valor del input con propiedad cuando el DOM puede divergir |

## Uso de IA

Se utilizó un asistente de autocompletado con IA (tipo Copilot) como herramienta de apoyo para:
- Generacion de estructuras CSS repetitivas
- Boilerplate de componentes (imports, constructor, customElements.define)

Las decisiones de **arquitectura**, **diseño de componentes**, **manejo de estado**, **comunicacion entre componentes** y **logica de negocio** fueron propias. Los comentarios `// DECISION:` en el codigo documentan el razonamiento detras de cada eleccion.

## Stack

- **Lit 3** - Web Components
- **Vite 8** - Build tool
- **SCSS** - Preprocesador CSS
- **Lucide** - Iconos SVG (tree-shakeable)
- **REST Countries v3.1** - API de datos
