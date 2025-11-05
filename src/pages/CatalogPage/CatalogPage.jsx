import Layout from "../../components/Layout/Layout";
import { getBooks } from "../../services/api";
import { useCart } from "../../hooks/useCart";
import { useEffect, useState } from "react";
import { formatPriceDisplay, parsePrice } from "../../utils/price";
import { useNavigate } from "react-router-dom";
import Toast from "../../components/Toast/Toast";

export default function CatalogPage(){
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const { add } = useCart();
  const navigate = useNavigate();

  useEffect(()=>{
    (async ()=>{
      try{
        const data = await getBooks();
        setBooks(data);
      }catch(e){
        setError(e.message);
      }finally{
        setLoading(false);
      }
    })();
  },[]);

  const handleAddToCart = (book) => {
    const precioNum = parsePrice(book.precio ?? book.price ?? "0,00");
    add({ ...book, price: precioNum });
    setToastMessage(`"${book.titulo || book.title}" añadido al carrito`);
    setShowToast(true);
  };

  return (
    <Layout>
      <h1 className="text-2xl font-bold">Catálogo</h1>
      <p className="mt-2 text-ink-700">Explora nuestros libros.</p>

      {loading && <p className="mt-6 text-ink-700">Cargando libros…</p>}
      {error && <p className="mt-6 text-red-600">Error: {error}</p>}

      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {books.map((b) => {
          const precioRaw = b.precio ?? b.price ?? "0,00";
          const precioNum = parsePrice(precioRaw);
          return (
            <article key={b.id} className="card p-4 flex flex-col">
              <div 
                onClick={() => navigate(`/libro/${b.id}`)}
                className="cursor-pointer"
              >
                <div className="w-full h-80 flex items-center justify-center bg-gray-50 rounded-lg overflow-hidden">
                  <img 
                    src={b.imagen || b.cover} 
                    alt={b.titulo || b.title} 
                    className="w-full h-full object-contain hover:opacity-90 transition"
                  />
                </div>
                <h3 className="mt-3 font-semibold hover:text-primary-600 transition">
                  {b.titulo ?? b.title}
                </h3>
                <p className="text-sm text-ink-700">{b.autor ?? b.author}</p>
              </div>
              <div className="mt-auto flex items-center justify-between pt-4">
                <span className="font-bold">{formatPriceDisplay(precioNum)}</span>
                <button
                  onClick={() => handleAddToCart(b)}
                  className="btn btn-primary"
                >
                  Añadir
                </button>
              </div>
            </article>
          );
        })}
      </div>

      {!loading && !error && books.length===0 && (
        <p className="mt-6 text-ink-700">No hay libros disponibles.</p>
      )}

      {/* Toast notification */}
      {showToast && (
        <Toast 
          message={toastMessage}
          onClose={() => setShowToast(false)}
          type="success"
        />
      )}
    </Layout>
  );
}
