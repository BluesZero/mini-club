import AttractionCard from '@/components/AttractionCard'

const attractions = [
  {
    id: 1,
    title: 'Volcán de Aventura',
    description: 'Un reto ardiente con obstáculos en lava y humo.',
    image: '/images/volcan.jpg',
  },
  {
    id: 2,
    title: 'Castillo Encantado',
    description: 'Mini golf entre torres, dragones y puentes levadizos.',
    image: '/images/castillo.jpg',
  },
  {
    id: 3,
    title: 'Túnel de Luz',
    description: 'Recorre una pista oscura llena de luces LED.',
    image: '/images/tunel.jpg',
  },
  {
    id: 4,
    title: 'Zona Jungla',
    description: 'Desafíos escondidos entre lianas, árboles y sonidos selváticos.',
    image: '/images/jungla.jpg',
  },
  {
    id: 5,
    title: 'Circuito Pirata',
    description: 'Trampas, cofres y timones en alta mar.',
    image: '/images/pirata.jpg',
  },
  {
    id: 6,
    title: 'a',
    description: 'b',
    image: '/images/pirata.jpg',
  }
]

export default function AttractionsPage() {
  return (
    <section className="px-6 py-20 max-w-6xl mx-auto bg-transparent">

      <h1 className="text-4xl font-bold mb-10 text-center text-blue-700 uppercase">Atracciones</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {attractions.map(attr => (
          <AttractionCard key={attr.id} {...attr} />
        ))}
      </div>
    </section>
  )
}
