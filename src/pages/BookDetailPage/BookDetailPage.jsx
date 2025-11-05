import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import { getBookById, getBookReviews, addBookReview } from "../../services/api";
import { useCart } from "../../hooks/useCart";
import { formatPriceDisplay, parsePrice } from "../../utils/price";
import Toast from "../../components/Toast/Toast";

export default function BookDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { add } = useCart();
  
  const [book, setBook] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [reviewsLoading, setReviewsLoading] = useState(true);
  const [showToast, setShowToast] = useState(false);
  
  // Estado para el formulario de nueva reseña
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [newReview, setNewReview] = useState({
    puntuacion: 5,
    comentario: ""
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  // Cargar datos del libro
  useEffect(() => {
    (async () => {
      try {
        const data = await getBookById(id);
        setBook(data);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  // Cargar reseñas
  useEffect(() => {
    (async () => {
      try {
        const data = await getBookReviews(id);
        // Asegurarse de que siempre sea un array
        if (Array.isArray(data)) {
          setReviews(data);
        } else {
          setReviews([]);
        }
      } catch (e) {
        console.error("Error cargando reseñas:", e);
        setReviews([]);
      } finally {
        setReviewsLoading(false);
      }
    })();
  }, [id]);

  const handleAddToCart = () => {
    if (book) {
      const precioNum = parsePrice(book.precio ?? "0,00");
      add({ ...book, price: precioNum });
      setShowToast(true);
    }
  };

  const handleSubmitReview = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError(null);

    try {
      await addBookReview(id, newReview);
      // Recargar las reseñas
      const updatedReviews = await getBookReviews(id);
      // Asegurarse de que siempre sea un array
      if (Array.isArray(updatedReviews)) {
        setReviews(updatedReviews);
      } else {
        setReviews([]);
      }
      // Resetear el formulario
      setNewReview({ puntuacion: 5, comentario: "" });
      setShowReviewForm(false);
    } catch (e) {
      setSubmitError(e.message);
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <Layout>
        <div className="text-center py-12">
          <p className="text-ink-700">Cargando libro...</p>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="text-center py-12">
          <p className="text-red-600">Error: {error}</p>
          <button 
            onClick={() => navigate("/catalogo")} 
            className="btn btn-primary mt-4"
          >
            Volver al catálogo
          </button>
        </div>
      </Layout>
    );
  }

  if (!book) {
    return (
      <Layout>
        <div className="text-center py-12">
          <p className="text-ink-700">Libro no encontrado</p>
          <button 
            onClick={() => navigate("/catalogo")} 
            className="btn btn-primary mt-4"
          >
            Volver al catálogo
          </button>
        </div>
      </Layout>
    );
  }

  const precioNum = parsePrice(book.precio ?? "0,00");

  return (
    <Layout>
      <div className="max-w-6xl mx-auto">
        {/* Botón volver */}
        <button 
          onClick={() => navigate("/catalogo")} 
          className="mb-6 text-primary-600 hover:underline flex items-center gap-2"
        >
          ← Volver al catálogo
        </button>

        {/* Información del libro */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex items-center justify-center bg-gray-50 rounded-lg p-4">
            <img 
              src={book.imagen} 
              alt={book.titulo} 
              className="max-w-full max-h-96 object-contain rounded-lg shadow-lg"
            />
          </div>

          {/* Detalles */}
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold text-ink-900">{book.titulo}</h1>
            <p className="text-xl text-ink-700 mt-2">por {book.autor}</p>
            <p className="text-sm text-ink-500 mt-1">Publicado en {book.anyo}</p>

            <div className="mt-6">
              <h2 className="text-xl font-semibold mb-2">Sinopsis</h2>
              <p className="text-ink-700 leading-relaxed">{book.sinopsis}</p>
            </div>

            <div className="mt-auto pt-8">
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-primary-600">
                  {formatPriceDisplay(precioNum)}
                </span>
                <button 
                  onClick={handleAddToCart}
                  className="btn btn-primary text-lg px-8 py-3"
                >
                  Añadir al carrito
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Sección de reseñas */}
        <div className="mt-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-ink-900">
              Reseñas ({reviews.length})
            </h2>
            <button 
              onClick={() => setShowReviewForm(!showReviewForm)}
              className="btn btn-primary"
            >
              {showReviewForm ? "Cancelar" : "Escribir reseña"}
            </button>
          </div>

          {/* Formulario de nueva reseña */}
          {showReviewForm && (
            <div className="card p-6 mb-6">
              <h3 className="text-xl font-semibold mb-4">Nueva reseña</h3>
              <form onSubmit={handleSubmitReview}>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">
                    Puntuación
                  </label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setNewReview({ ...newReview, puntuacion: star })}
                        className={`text-3xl ${
                          star <= newReview.puntuacion
                            ? "text-yellow-500"
                            : "text-gray-300"
                        }`}
                      >
                        ★
                      </button>
                    ))}
                    <span className="ml-2 text-ink-700">
                      ({newReview.puntuacion} de 5)
                    </span>
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">
                    Comentario
                  </label>
                  <textarea
                    value={newReview.comentario}
                    onChange={(e) => setNewReview({ ...newReview, comentario: e.target.value })}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    rows="4"
                    required
                    placeholder="Escribe tu opinión sobre el libro..."
                  />
                </div>

                {submitError && (
                  <p className="text-red-600 mb-4">Error: {submitError}</p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="btn btn-primary"
                >
                  {submitting ? "Enviando..." : "Publicar reseña"}
                </button>
              </form>
            </div>
          )}

          {/* Lista de reseñas */}
          {reviewsLoading ? (
            <p className="text-ink-700">Cargando reseñas...</p>
          ) : reviews.length === 0 ? (
            <div className="card p-6 text-center">
              <p className="text-ink-700">
                No hay reseñas aún. ¡Sé el primero en escribir una!
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {reviews.map((review) => (
                <div key={review.id} className="card p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span
                          key={star}
                          className={`text-xl ${
                            star <= review.puntuacion
                              ? "text-yellow-500"
                              : "text-gray-300"
                          }`}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                    <span className="text-sm text-ink-500">
                      ({review.puntuacion}/5)
                    </span>
                  </div>
                  <p className="text-ink-700">{review.comentario}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Toast notification */}
      {showToast && (
        <Toast 
          message={`"${book.titulo}" añadido al carrito`}
          onClose={() => setShowToast(false)}
          type="success"
        />
      )}
    </Layout>
  );
}
