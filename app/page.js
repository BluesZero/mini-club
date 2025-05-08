import Hero from '../components/Hero'
import Attractions from '../components/Attractions'

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="bg-blue-50 text-blue-900 py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto border-2 border-blue-300 rounded-2xl p-8 shadow-md">
          <h2 className="text-3xl font-bold uppercase mb-4">🎁 Combo Especial</h2>
          <p className="text-lg mb-2">Juego completo para <strong>6 personas</strong></p>
          <p className="text-2xl font-extrabold text-blue-600 mb-4">$250 MXN POR PERSONA</p>
          <p className="mb-6">Incluye pistas temáticas, tiempo extendido y diversión garantizada.</p>
          <a
            href="/booking"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-full transition"
          >
            ¡Reserva ahora!
          </a>
        </div>
      </section>

      <Attractions />
    </>
  )
}
