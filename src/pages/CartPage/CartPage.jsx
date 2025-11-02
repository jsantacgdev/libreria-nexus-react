import Layout from "../../components/Layout/Layout";
import { useCart } from "../../hooks/useCart";

export default function CartPage(){
  const { items, remove, clear, total } = useCart();

  return (
    <Layout>
      <h1 className="text-2xl font-bold">Carrito</h1>
      <p className="mt-2 text-ink-700">Gestiona tus productos.</p>

      <div className="mt-6 space-y-3">
        {items.map((it)=>(
          <div key={it.id} className="card p-4 flex items-center justify-between">
            <div>
              <p className="font-semibold">{it.title}</p>
              <p className="text-sm text-ink-700">x{it.qty} · {(it.price ?? 0).toFixed(2)} €</p>
            </div>
            <button className="btn" onClick={()=>remove(it.id)}>Quitar</button>
          </div>
        ))}
        {items.length===0 && <p className="text-ink-700">Tu carrito está vacío.</p>}
      </div>

      <div className="mt-6 flex items-center justify-between">
        <span className="text-lg font-bold">Total: {total.toFixed(2)} €</span>
        <div className="flex gap-2">
          <button className="btn" onClick={clear}>Vaciar</button>
          <a className="btn btn-primary" href="/checkout">Ir a pagar</a>
        </div>
      </div>
    </Layout>
  );
}
