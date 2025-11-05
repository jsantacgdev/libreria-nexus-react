import Layout from "../../components/Layout/Layout";
import { useEffect, useState } from "react";
import { getLibrary } from "../../services/api";

export default function LibraryInfoPage() {
  const [library, setLibrary] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const data = await getLibrary();
        setLibrary(data);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) {
    return (
      <Layout>
        <div className="text-center py-12">
          <p className="text-ink-700">Cargando información...</p>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="text-center py-12">
          <p className="text-red-600">Error: {error}</p>
        </div>
      </Layout>
    );
  }

  if (!library) {
    return (
      <Layout>
        <div className="text-center py-12">
          <p className="text-ink-700">No hay información disponible</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-ink-900">{library.nombre}</h1>
        
        <section className="mt-6 card p-6">
          <h2 className="text-xl font-semibold mb-3">Acerca de Nosotros</h2>
          <p className="text-ink-700">{library.acercaDe}</p>
        </section>

        <section className="mt-6 card p-6">
          <div className="flex items-center gap-2 mb-3">
            <svg className="h-5 w-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <h2 className="text-xl font-semibold">Dirección</h2>
          </div>
          <p className="text-ink-700">{library.direccion}</p>
        </section>

        <section className="mt-6 card p-6">
          <div className="flex items-center gap-2 mb-3">
            <svg className="h-5 w-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h2 className="text-xl font-semibold">Horarios</h2>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="font-medium">Lunes - Viernes:</span>
              <span className="text-ink-700">{library.horario?.lunVier || 'No disponible'}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Sábado:</span>
              <span className="text-ink-700">{library.horario?.sab || 'Cerrado'}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Domingo:</span>
              <span className="text-ink-700">{library.horario?.dom || 'Cerrado'}</span>
            </div>
          </div>
        </section>

        <section className="mt-6 card p-6">
          <div className="flex items-center gap-2 mb-3">
            <svg className="h-5 w-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
            <h2 className="text-xl font-semibold">Nuestros Servicios</h2>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {library.servicios?.map((servicio, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <span className="text-primary-600">✓</span>
                <span className="text-ink-700">{servicio}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-6 card p-6">
          <div className="flex items-center gap-2 mb-3">
            <svg className="h-5 w-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <h2 className="text-xl font-semibold">Contacto</h2>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="font-medium">Email:</span>
              <a 
                href={`mailto:${library.contacto?.email}`} 
                className="text-primary-600 hover:underline"
              >
                {library.contacto?.email}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-medium">Teléfono:</span>
              <a 
                href={`tel:${library.contacto?.telefono}`} 
                className="text-primary-600 hover:underline"
              >
                {library.contacto?.telefono}
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
