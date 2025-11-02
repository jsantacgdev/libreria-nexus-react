import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const navItems = [
  { to: "/catalogo", label: "Catálogo" },
  { to: "/coworking", label: "Co-working" },
  { to: "/cafeteria", label: "Cafetería" },
  { to: "/carrito", label: "Carrito" },
  { to: "/perfil", label: "Perfil" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  const linkBase =
    "px-3 py-2 rounded-lg hover:bg-slate-100 transition font-medium";
  const linkActive = "bg-slate-100 text-ink-900";
  const linkInactive = "text-ink-700";

  return (
    <header className="border-b border-slate-200 bg-white/80 backdrop-blur sticky top-0 z-50">
      <div className="container-page h-16 flex items-center justify-between">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-2 font-semibold">
          <span
            className="inline-block h-8 w-8 rounded-lg bg-primary-600"
            aria-hidden="true"
          />
          <span>Nexus</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `${linkBase} ${isActive ? linkActive : linkInactive}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* CTA derecha */}
        <div className="hidden md:flex items-center gap-2">
          <Link to="/login" className="btn btn-primary">Entrar</Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden inline-flex items-center justify-center p-2 rounded-lg hover:bg-slate-100"
          aria-label="Abrir menú"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {/* ícono hamburguesa / cerrar */}
          <svg
            className={`h-6 w-6 ${open ? "hidden" : "block"}`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path strokeWidth="2" strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
          </svg>
          <svg
            className={`h-6 w-6 ${open ? "block" : "hidden"}`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path strokeWidth="2" strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden border-t border-slate-200 overflow-hidden transition-[max-height] duration-300 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="container-page py-3 flex flex-col gap-1">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `${linkBase} ${isActive ? linkActive : linkInactive}`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/login"
            onClick={() => setOpen(false)}
            className="btn btn-primary mt-2 w-fit"
          >
            Entrar
          </Link>
        </nav>
      </div>
    </header>
  );
}
