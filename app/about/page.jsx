// app/about/page.jsx
export default function AboutPage() {
    return (
      <section className="px-6 py-20 max-w-5xl mx-auto text-center text-gray-800">
        <h1 className="text-4xl font-bold mb-6 text-blue-700 uppercase">Sobre Nosotros</h1>
        
        <p className="text-lg mb-4">
          En Mini Club creemos que la diversión en familia es la clave para crear recuerdos inolvidables.
          Nuestro minigolf temático fue creado con pasión, pensando en todas las edades y en cada detalle
          que convierte una salida en una experiencia.
        </p>
  
        <p className="text-lg mb-4">
          Cada una de nuestras pistas está inspirada en mundos fantásticos, desde volcanes hasta castillos medievales.
          Nos esforzamos en ofrecer un espacio seguro, limpio y lleno de retos emocionantes.
        </p>
  
        <p className="text-lg mb-4">
          ¡Mini Club no es solo un lugar para jugar minigolf, es un lugar para conectar, reír y competir con quienes más quieres!
        </p>
  
        <img
          src="/images/minigolf.png"
          alt="Niños jugando minigolf"
          className="mx-auto mt-10 rounded-lg shadow-lg w-full max-w-3xl"
        />
      </section>
    )
  }
  