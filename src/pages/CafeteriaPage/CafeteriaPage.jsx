import Layout from "../../components/Layout/Layout";

export default function CafeteriaPage(){
  return (
    <Layout>
      <h1 className="text-2xl font-bold">Cafetería</h1>
      <p className="mt-2 text-ink-700">Café de autor y repostería diaria.</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {["Espresso","Latte","Capuccino","Té Matcha","Brownie","Cheesecake"].map((n,i)=>(
          <div key={i} className="card p-4 flex items-center justify-between">
            <span>{n}</span>
            <button className="btn">Pedir</button>
          </div>
        ))}
      </div>
    </Layout>
  );
}
