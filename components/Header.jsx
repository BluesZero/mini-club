import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="font-poppins fixed top-0 left-0 w-full z-55 bg-[rgba(255,255,255,.75)] text-blue-800 px-20 py-2.5 flex justify-between items-center shadow-md border-b-2 border-blue-800">
      
      <Link href="/" className="flex items-center gap-3">
        <Image
          src="/images/logoNav.png"
          alt="Mini Club logo"
          width={200}
          height={200}
          className="w-50 h-14"
        />
      </Link>

      <nav className="space-x-4 text-sm sm:text-base font-bold uppercase">
        {[
            { href: '/', label: 'Inicio' },
            { href: '/about', label: 'Mini Club' },
            { href: '/attractions', label: 'Atracciones' },
            { href: '/pricing', label: 'Precios' },
            { href: '/booking', label: 'Reservaciones' },
            { href: '/gallery', label: 'Galería' },
            { href: '/contact', label: 'Contacto' },
        ].map((link, i) => (
            <Link
            key={i}
            href={link.href}
            className="hover:text-blue-400 transition-colors duration-200"
            >
            {link.label}
            </Link>
        ))}
    </nav>

    </header>
  )
}
