import { useEffect, useState } from "react";
import { getLibrary } from "../../services/api";

export default function Footer() {
  const year = new Date().getFullYear();
  const [library, setLibrary] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const data = await getLibrary();
        setLibrary(data);
      } catch (e) {
        console.error("Error cargando información de la librería:", e);
      }
    })();
  }, []);

  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <div className="container-page py-12">
        {/* Top: branding + grid de secciones */}
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-semibold">
              <img
                src="/favicon.ico"
                alt="Librería Nexus"
                className="h-8 w-8"
              />
              <span>Librería Nexus</span>
            </div>
            <p className="text-sm text-ink-700">
              {library?.acercaDe || "Librería, co-working y cafetería en un solo lugar. Estudia, crea y disfruta."}
            </p>
            {/* Social */}
            <div className="flex items-center gap-3 pt-2">
              <a aria-label="Twitter" href="#" className="p-2 rounded-lg hover:bg-slate-100 transition">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.48 11.24H16.17l-5.238-6.843-5.988 6.843H1.636l7.73-8.83L1.25 2.25H8.08l4.73 6.23 5.434-6.23Zm-1.162 18.5h1.833L7.01 4.114H5.05L17.082 20.75Z"/>
                </svg>
              </a>
              <a aria-label="Instagram" href="#" className="p-2 rounded-lg hover:bg-slate-100 transition">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                  <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm10 2H7a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3zm-5 3.5a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm0 2a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm5.75-.88a.88.88 0 110 1.76.88.88 0 010-1.76z"/>
                </svg>
              </a>
              <a aria-label="GitHub" href="#" className="p-2 rounded-lg hover:bg-slate-100 transition">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.58 2 12.117c0 4.472 2.865 8.257 6.839 9.6.5.095.682-.219.682-.486 0-.239-.009-.871-.013-1.71-2.782.61-3.368-1.36-3.368-1.36-.455-1.162-1.11-1.472-1.11-1.472-.908-.628.069-.615.069-.615 1.004.071 1.532 1.05 1.532 1.05.893 1.552 2.345 1.104 2.914.844.091-.657.35-1.104.636-1.358-2.222-.257-4.555-1.128-4.555-5.02 0-1.109.39-2.015 1.03-2.726-.104-.257-.447-1.292.098-2.693 0 0 .84-.27 2.75 1.04a9.3 9.3 0 0 1 2.5-.34c.85.004 1.705.116 2.504.34 1.909-1.31 2.748-1.04 2.748-1.04.546 1.401.203 2.436.1 2.693.64.711 1.028 1.617 1.028 2.726 0 3.902-2.336 4.761-4.563 5.015.36.315.68.936.68 1.887 0 1.36-.012 2.456-.012 2.788 0 .27.18.586.688.485C19.137 20.37 22 16.587 22 12.117 22 6.58 17.522 2 12 2Z" clipRule="evenodd"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Secciones */}
          <div>
            <h3 className="text-sm font-semibold text-ink-900">Librería</h3>
            <ul className="mt-3 space-y-2 text-sm text-ink-700">
              <li><a className="hover:underline" href="/catalogo">Catálogo</a></li>
              <li><a className="hover:underline" href="/carrito">Carrito</a></li>
              <li><a className="hover:underline" href="/perfil">Mi perfil</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-ink-900">Espacios</h3>
            <ul className="mt-3 space-y-2 text-sm text-ink-700">
              <li><a className="hover:underline" href="/coworking">Co-working</a></li>
              <li><a className="hover:underline" href="/menu">Cafetería</a></li>
              <li><a className="hover:underline" href="#">Eventos</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-ink-900">Contacto</h3>
            <ul className="mt-3 space-y-2 text-sm text-ink-700">
              <li>
                <a 
                  className="hover:underline" 
                  href={`mailto:${library?.contacto?.email || 'info@nexus.com'}`}
                >
                  {library?.contacto?.email || 'info@nexus.com'}
                </a>
              </li>
              <li>
                <a 
                  className="hover:underline" 
                  href={`tel:${library?.contacto?.telefono || '+34111222333'}`}
                >
                  {library?.contacto?.telefono || '+34 111 222 333'}
                </a>
              </li>
              <li>
                <span className="text-ink-700">
                  {library?.direccion || 'Madrid, España'}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom: legal */}
        <div className="mt-10 flex flex-col gap-3 border-t border-slate-200 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-ink-500">
            © {year} Librería Nexus. Todos los derechos reservados.
          </p>
          <div className="flex gap-4 text-sm">
            <a href="#" className="text-ink-700 hover:underline">Privacidad</a>
            <a href="#" className="text-ink-700 hover:underline">Términos</a>
            <a href="#" className="text-ink-700 hover:underline">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

