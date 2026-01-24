export function SharedModal({ open, onClose, data }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/80"
        onClick={onClose}
      />

      <div className="bg-white rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto relative shadow-2xl animate-slide-up">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white text-primary font-bold text-xl"
        >
          ×
        </button>

        <div className="h-64 bg-gray-200" />
        <div className="p-8">
          <h2 className="text-2xl font-black text-primary mb-4">
            {data?.title}
          </h2>
          <p className="text-gray-600">{data?.content}</p>
        </div>
      </div>
    </div>
  );
}
