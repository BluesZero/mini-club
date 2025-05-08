import Link from 'next/link'

export default function Hero() {
  return (
    <section
      className="relative h-[85vh] bg-center bg-cover flex items-center justify-center pt-24"
      style={{ backgroundImage: "url('/images/back.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 text-center px-6 max-w-3xl text-white animate-fade-up">
        <h1 className="text-3xl md:text-6xl font-extrabold mb-4 uppercase tracking-wide text-white-400 drop-shadow-lg">
          ¡la experiencia más divertida en mini golf!
        </h1>
        <p className="text-lg md:text-2xl mb-6 font-medium uppercase text-white drop-shadow-md">
          supera retos, ríe a carcajadas y crea recuerdos únicos.
        </p>
        <Link
          href="/booking"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-bold uppercase shadow-lg transition drop-shadow"
        >
          ¡vive la aventura!
        </Link>
      </div>
    </section>
  )
}
