export default function AttractionCard({ title, description, image }) {
    return (
      <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="p-4 text-gray-800">
          <h2 className="text-xl font-bold mb-2 text-blue-600">{title}</h2>
          <p className="text-sm">{description}</p>
        </div>
      </div>
    )
  }
  