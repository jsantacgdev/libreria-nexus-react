import Layout from "../../components/Layout/Layout";

export default function CoworkingPage(){
  return (
    <Layout>
      <h1 className="text-2xl font-bold">Co-working</h1>
      <p className="mt-2 text-ink-700">Reserva tu espacio por horas o días.</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {["Sala Focus","Sala Reuniones","Espacio Abierto"].map((n,i)=>(
          <div key={i} className="card p-4">
            <h3 className="font-semibold">{n}</h3>
            <p className="text-sm text-ink-700 mt-1">Conectividad y comodidad aseguradas.</p>
            <button className="btn btn-primary mt-4">Reservar</button>
          </div>
        ))}
      </div>
    </Layout>
  );
}
