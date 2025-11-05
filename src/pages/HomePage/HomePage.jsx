import React from "react";
import Layout from "../../components/Layout/Layout";
import "./HomePage.css";

const HomePage = () => {
  return (
    <Layout>
      <div className="home-page">
        <section className="hero">
          <h1>Bienvenido a Nexus Café</h1>
          <p className="subtitle">
            Tu espacio multifuncional de libros, coworking y el mejor café.
          </p>
          <p>
            Nexus no es solo una librería; es un punto de encuentro. Un
            lugar donde la cultura, el trabajo y el placer se fusionan. Descubre
            nuestra zona de coworking, disfruta de un café de especialidad o
            piérdete entre nuestras estanterías.
          </p>
          <button className="button mt-6">Ver el Menú</button>
        </section>

        <section className="features-grid">
          <div className="feature-item">
            <h3>Nuestra Cafetería</h3>
            <p>
              Ofrecemos una selección de granos de origen único y bollería
              artesanal. Es el combustible perfecto para tus sesiones de estudio
              o trabajo. Relájate en un ambiente tranquilo y acogedor.
            </p>
          </div>
          <div className="feature-item">
            <h3>Zona de Coworking</h3>
            <p>
              ¿Necesitas un lugar para concentrarte? Nuestra zona de coworking
              ofrece internet de alta velocidad, mesas cómodas y un ambiente
              profesional. Y lo mejor: puedes pedir tu café directamente a tu
              mesa.
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
};



export default HomePage;
