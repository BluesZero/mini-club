// components/Attractions.jsx
const attractions = [
    {
      title: 'Cancha Volcánica',
      description: 'Rocas ardientes y un cráter al centro.',
      icon: '🌋',
    },
    {
      title: 'Castillo Medieval',
      description: 'Torres, dragones y puertas levadizas.',
      icon: '🏰',
    },
    {
      title: 'Pista Glacial',
      description: 'Pingüinos y rampas resbalosas.',
      icon: '❄️',
    },
    {
      title: 'Feria Colorida',
      description: 'Ruedas giratorias y luces vintage.',
      icon: '🎡',
    },
    {
      title: 'Zona Embrujada',
      description: 'Efectos sorpresa y caminos oscuros.',
      icon: '👻',
    },
    {
      title: 'Pista Futurista',
      description: 'Láseres, sensores y plataformas móviles.',
      icon: '🚀',
    },
  ]
  
  export default function Attractions() {
    return (
      <section className="font-poppins py-16  text-center">
        <h2 className="text-4xl font-bold mb-10 text-green-700">Atracciones</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
          {attractions.map((attr, i) => (
            <div
              key={i}
              className="bg-white border border-green-200 rounded-xl p-6 shadow-md hover:shadow-lg transition transform hover:scale-105"
            >
              <div className="text-6xl mb-4">{attr.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900">{attr.title}</h3>
              <p className="text-gray-600 text-sm mt-1">{attr.description}</p>
            </div>
          ))}
        </div>
      </section>
    )
  }
  