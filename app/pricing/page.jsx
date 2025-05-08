import Link from 'next/link'

export default function PricingPage() {
  return (
    <section className="px-6 py-20 max-w-4xl mx-auto text-gray-800 text-center">
      <h1 className="text-4xl font-bold mb-10 text-blue-700 uppercase">Precios</h1>

      <div className="overflow-x-auto">
        <table className="w-full text-left border border-gray-300 shadow-md rounded-md overflow-hidden">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="p-4">Tipo de juego</th>
              <th className="p-4">Número de personas</th>
              <th className="p-4">Precio por persona</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 text-gray-800">
            <tr>
              <td className="p-4 font-medium">Juego completo</td>
              <td className="p-4">2 a 5</td>
              <td className="p-4">$300</td>
            </tr>
            <tr>
              <td className="p-4 font-medium">Juego completo</td>
              <td className="p-4">6</td>
              <td className="p-4">$250</td>
            </tr>
            <tr>
              <td className="p-4 font-medium">Medio juego</td>
              <td className="p-4">2 a 6</td>
              <td className="p-4">$250</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="mt-6 text-sm text-gray-500">
        * Todos los precios son por persona e incluyen acceso a pistas temáticas durante el tiempo asignado.
      </p>

      {/* Imagen decorativa */}
      <img
        src="/images/hero.jpg"
        alt="Grupo divirtiéndose en Mini Club"
        className="mx-auto mt-10 rounded-lg shadow-lg w-full max-w-3xl"
      />

      {/* Botón de reserva */}
      <Link
        href="/booking"
        className="inline-block mt-10 bg-blue-600 hover:bg-blue-700 text-white font-bold uppercase px-8 py-4 rounded-full text-lg transition shadow-md"
      >
        ¡Reserva ahora!
      </Link>
    </section>
  )
}
