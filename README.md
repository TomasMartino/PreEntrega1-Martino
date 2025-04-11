

# Voga - clothes E-commerce

## Descripción
Voga es una aplicación de comercio electrónico desarrollada con React y Vite. Permite a los usuarios navegar por productos, filtrarlos por categorías, ver detalles de productos específicos y administrar un carrito de compras.

## Tecnologías Utilizadas
- React 18
- React Router DOM 7
- Firebase/Firestore (base de datos)  
- Vite (build tool)
- bootstrap
- swiper

## Requisitos Previos
- Node.js (versión recomendada: 18.x o superior)
- npm o yarn

## Instalación

1. Clona el repositorio
```bash
git clone <URL_DEL_REPOSITORIO>
```

2. Instala las dependencias
```bash
npm install
```

3. Configura las variables de entorno
Crea un archivo .env en la raíz del proyecto con la siguiente variable:
```
VITE_API_KEY=tu_api_key_de_firebase
```

## Ejecución

Para ejecutar la aplicación en modo desarrollo:
```bash
npm run dev
```

Para construir la aplicación para producción:
```bash
npm run build
```

Para previsualizar la aplicación construida:
```bash
npm run preview
```

## Estructura del Proyecto

- src: Código fuente principal
  - `/components`: Componentes reutilizables
  - ImportarProcutos.js: Configuración de Firebase
  - App.jsx: Componente principal con la configuración de rutas
  - `NavBar.jsx`: Componente de encabezado


## Funcionalidades

- **Listado de productos**: Visualización de todos los productos disponibles
- **Filtrado por categorías**: Permite filtrar productos por categoría
- **Detalles de producto**: Vista detallada de cada producto
- **Carrito de compras**: Sistema para añadir productos y gestionar el carrito 

## Rutas

- `/`: Página principal con listado de productos
- `/categoria/:id`: Listado de productos filtrados por categoría
- `/producto/:id`: Página de detalle de producto específico
- `/cart`: Página del carrito de compras
- `/contact`: Pagina de para contactar
- `/itemListContainer`: Pagina con todos los prodcutos

## Integración con Firebase

La aplicación utiliza Firestore como base de datos para almacenar y recuperar información de productos. La colección principal es "productos", donde cada documento representa un producto con sus atributos como nombre, precio, descripción, etc.

## Contribuir

1. Haz un fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Haz commit de tus cambios (`git commit -m 'Añadir nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## Licencia

Este proyecto es privado y no está licenciado para uso público.