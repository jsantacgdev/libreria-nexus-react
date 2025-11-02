import Layout from "../../components/Layout/Layout";
import { getBooks } from "../../services/api";
import { useCart } from "../../hooks/useCart";
import { useEffect, useState } from "react";

export default function CatalogPage(){
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { add } = useCart();

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

  return (
    <Layout>
      <h1 className="text-2xl font-bold">Catálogo</h1>
      <p className="mt-2 text-ink-700">Explora nuestros libros.</p>

      {loading && <p className="mt-6 text-ink-700">Cargando libros…</p>}
      {error && <p className="mt-6 text-red-600">Error: {error}</p>}

      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {books.map((b)=>(
          <article key={b.id} className="card p-4 flex flex-col">
            <img src={b.cover} alt={b.title} className="h-48 w-full object-cover rounded-xl2"/>
            <h3 className="mt-3 font-semibold">{b.title}</h3>
            <p className="text-sm text-ink-700">{b.author}</p>
            <div className="mt-auto flex items-center justify-between pt-4">
              <span className="font-bold">{(b.price ?? 0).toFixed(2)} €</span>
              <button onClick={()=>add(b)} className="btn btn-primary">Añadir</button>
            </div>
          </article>
        ))}
      </div>

      {!loading && !error && books.length===0 && (
        <p className="mt-6 text-ink-700">No hay libros disponibles.</p>
      )}
    </Layout>
  );
}
