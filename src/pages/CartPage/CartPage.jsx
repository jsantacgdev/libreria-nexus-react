import Layout from "../../components/Layout/Layout";
import { useCart } from "../../hooks/useCart";
import { formatPriceDisplay } from "../../utils/price";

export default function CartPage(){
  const { items, remove, clear, total } = useCart();

  return (
    <Layout>
      <h1 className="text-2xl font-bold">Carrito</h1>
      <p className="mt-2 text-ink-700">Gestiona tus productos.</p>

      <div className="mt-6 space-y-3">
        {items.map((it) => (
          <div key={it.id} className="card p-4 flex items-center gap-4">
            {/* Imagen del libro */}
            <div className="w-20 h-28 flex-shrink-0 bg-gray-50 rounded overflow-hidden">
              <img 
                src={it.imagen || it.cover} 
                alt={it.titulo || it.title}
                className="w-full h-full object-contain"
              />
            </div>
            {/* Información */}
            <div className="flex-1">
              <p className="font-semibold">{it.titulo ?? it.title}</p>
              <p className="text-sm text-ink-700">{it.autor ?? it.author}</p>
              <p className="text-sm text-ink-700 mt-1">x{it.qty} · {formatPriceDisplay(it.price)}</p>
            </div>
            {/* Botón quitar */}
            <button className="btn" onClick={() => remove(it.id)}>Quitar</button>
          </div>
        ))}
        {items.length===0 && <p className="text-ink-700">Tu carrito está vacío.</p>}
      </div>

      <div className="mt-6 flex items-center justify-between">
        <span className="text-lg font-bold">Total: {formatPriceDisplay(total)}</span>
        <div className="flex gap-2">
          <button className="btn" onClick={clear}>Vaciar</button>
          <a className="btn btn-primary" href="/checkout">Ir a pagar</a>
        </div>
      </div>
    </Layout>
  );
}
