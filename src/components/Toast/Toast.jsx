import { useEffect } from "react";

export default function Toast({ message, onClose, duration = 3000, type = "success" }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const bgColor = type === "success" ? "bg-green-500" : "bg-red-500";

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-slide-up">
      <div className={`${bgColor} text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-3 max-w-md`}>
        <svg 
          className="h-6 w-6 flex-shrink-0" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          {type === "success" ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          )}
        </svg>
        <p className="font-medium">{message}</p>
        <button 
          onClick={onClose}
          className="ml-auto hover:opacity-80 transition"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
