import Layout from "../../components/Layout/Layout";
import { useAuth } from "../../context/AuthContext";

export default function ProfilePage(){
  const { user } = useAuth();
  return (
    <Layout>
      <h1 className="text-2xl font-bold">Mi perfil</h1>
      <div className="card p-4 mt-4">
        <p><strong>Nombre:</strong> {user?.name}</p>
        <p><strong>Email:</strong> {user?.email}</p>
      </div>
    </Layout>
  );
}
