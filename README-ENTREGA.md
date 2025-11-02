# Entrega — Librería Nexus (SPA React + Tailwind)

- Landing + 5 vistas: Home, Catálogo, Co-working, Cafetería, Carrito, Perfil, Login.
- Navegación con React Router. Ruta protegida: `/perfil` (requiere login simple).
- Hooks: `useState`, `useEffect`, `useContext` (Auth). Custom hooks: `useFetch`, `useCart`.
- Datos: se consumen desde API simulada (`REACT_APP_API_URL`/`VITE_API_URL`) y *fallback* `public/books.json`.
- Estilos: Tailwind con tema extendido, componentes utilitarios (`.btn`, `.card`, `container-page`, etc.).
- Deploy: preparar en Vercel/Netlify. Variables opcionales: `REACT_APP_API_URL` o `VITE_API_URL`.

## Scripts
```bash
npm install
npm start
```

## API simulada
- Por defecto intenta `http://localhost:3001/books` (json-server u otra API). 
- Si falla, usa `public/books.json` para demo.
