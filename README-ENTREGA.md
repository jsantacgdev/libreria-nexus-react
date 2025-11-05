# Entrega — Librería Nexus (SPA React + Tailwind)

## 📚 Descripción del Proyecto

Aplicación web de librería multifuncional que integra catálogo de libros, información de biblioteca, zona de coworking y cafetería.

## ✨ Características

- **Landing + 9 vistas**: Home, Catálogo, Biblioteca, Co-working, Cafetería, Carrito, Perfil, Login, Menu, Checkout.
- **Navegación con React Router**: Gestión completa de rutas con protección de acceso.
- **Ruta protegida**: `/perfil` requiere autenticación (login simple).
- **Hooks personalizados**: 
  - `useFetch`: Gestión de peticiones HTTP con estados de carga y error
  - `useCart`: Carrito de compras con persistencia en localStorage
- **Hooks de React utilizados**: `useState`, `useEffect`, `useContext`, `useMemo`
- **Context API**: `AuthContext` para gestión de autenticación global
- **API REST**: Conexión con API de Apidog
- **Fallback**: Datos locales en `public/books.json` si la API no está disponible
- **Estilos**: Tailwind CSS con tema personalizado y componentes reutilizables

## 🔗 API de Datos

### URL Base
```
https://mock.apidog.com/m1/1080009-1068938-default
```

### Endpoints Disponibles

- `GET /books` - Obtener todos los libros
- `GET /books?categoria={categoria}` - Filtrar libros por categoría
- `GET /books/{id}` - Obtener libro específico
- `GET /library` - Información de la biblioteca
- `GET /books/{id}/reviews` - Reseñas de un libro
- `POST /books/{id}/reviews` - Añadir reseña

**Nota**: La API requiere que los libros tengan el campo `precio` para el funcionamiento del carrito. Ver `INSTRUCCIONES-APIDOG.md` para más detalles.

## Scripts
```bash
npm install
npm start
```

## API simulada
- Por defecto usa la API de Apidog: `https://mock.apidog.com/m1/1080009-1068938-default/books`
- Si falla, usa `public/books.json` para demo.

## 🌐 Despliegue

**TODO**: Desplegar en Vercel o Netlify

Variables opcionales: `REACT_APP_API_URL` o `VITE_API_URL`.

## 👥 Autores

Álvaro Galán Pascual, Jose Antonio Santacruz, Pablo Gonzalez Lillo - UNIR Máster Aplicaciones Móviles Multiplataforma
