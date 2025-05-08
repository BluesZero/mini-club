// app/layout.jsx
import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Mini Club | Mini Golf',
  description: 'Diversión en familia en nuestro campo de mini golf temático.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
        <head>
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" />
        </head>
        <body className="bg-[url('/images/pattern.png')] bg-repeat bg-[length:512px_341px] bg-top text-gray-900 font-poppins">
        <Header />
        <main className="min-h-[calc(100vh-160px)]">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
