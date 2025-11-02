import Layout from "../../components/Layout/Layout";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function LoginPage(){
  const [email, setEmail] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const submit = (e)=>{
    e.preventDefault();
    if(!email) return;
    login(email);
    navigate("/perfil");
  };

  return (
    <Layout>
      <h1 className="text-2xl font-bold">Entrar</h1>
      <form onSubmit={submit} className="mt-6 max-w-sm space-y-3">
        <input className="w-full border rounded-xl2 px-3 py-2" placeholder="email@unir.net"
               value={email} onChange={e=>setEmail(e.target.value)} />
        <button className="btn btn-primary w-full">Acceder</button>
      </form>
    </Layout>
  );
}
