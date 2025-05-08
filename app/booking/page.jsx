'use client'

import { useState } from 'react'

export default function BookingPage() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    people: '',
    notes: ''
  })
  const [groupSize, setGroupSize] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('¡Gracias por tu reservación!')
    setForm({ name: '', phone: '', date: '', time: '', people: '', notes: '' })
    setGroupSize('')
  }

  return (
    <section className="py-28 px-6 max-w-2xl mx-auto text-gray-800 mt-12">
      <h1 className="text-4xl font-bold text-center text-blue-700 uppercase mb-10">Reservaciones</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg space-y-5 border border-blue-100"
      >
        <input
          type="text"
          name="name"
          placeholder="Nombre completo"
          className="w-full p-3 border border-gray-300 rounded focus:outline-blue-500"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Teléfono o WhatsApp"
          className="w-full p-3 border border-gray-300 rounded focus:outline-blue-500"
          value={form.phone}
          onChange={handleChange}
          required
        />
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="date"
            name="date"
            className="w-full p-3 border border-gray-300 rounded focus:outline-blue-500"
            value={form.date}
            onChange={handleChange}
            required
          />
          <input
            type="time"
            name="time"
            className="w-full p-3 border border-gray-300 rounded focus:outline-blue-500"
            value={form.time}
            onChange={handleChange}
            required
          />
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2 text-left">¿Cuántas personas asistirán?</label>
            <div className="flex flex-wrap gap-2 content-center">
              {[2, 3, 4, 5, 6].map(n => (
                <button
                  key={n}
                  type="button"
                  onClick={() => {
                    setGroupSize(n)
                    setForm({ ...form, people: '' })
                  }}
                  className={`px-8.5 py-2 rounded-full border font-semibold ${
                    groupSize === n ? 'bg-blue-600 text-white' : 'border-gray-300 hover:border-blue-500'
                  }`}
                >
                  {n} 🙍‍♂️{n > 1 ? '' : ''}
                </button>
              ))}
            </div>
          </div>

          {groupSize && (
            <div>
              <label className="block text-sm font-medium mb-2 text-left">Tipo de juego:</label>
              <div className="grid gap-4">
                {groupSize < 6 ? (
                  <>
                    <label className={`block border rounded-lg p-4 cursor-pointer transition ${
                      form.people === '18h-300' ? 'border-blue-600 bg-blue-50' : 'border-gray-300 hover:border-blue-400'
                    }`}>
                      <input
                        type="radio"
                        name="people"
                        value="18h-300"
                        className="hidden"
                        checked={form.people === '18h-300'}
                        onChange={handleChange}
                      />
                      <div className="text-left">
                        <p className="font-semibold text-blue-800">Juego completo – 18 hoyos</p>
                        <p className="text-sm text-gray-600">$300 por persona</p>
                      </div>
                    </label>

                    <label className={`block border rounded-lg p-4 cursor-pointer transition ${
                      form.people === '9h-250' ? 'border-blue-600 bg-blue-50' : 'border-gray-300 hover:border-blue-400'
                    }`}>
                      <input
                        type="radio"
                        name="people"
                        value="9h-250"
                        className="hidden"
                        checked={form.people === '9h-250'}
                        onChange={handleChange}
                      />
                      <div className="text-left">
                        <p className="font-semibold text-blue-800">Medio juego – 9 hoyos</p>
                        <p className="text-sm text-gray-600">$250 por persona</p>
                      </div>
                    </label>
                  </>
                ) : (
                  <label className={`block border rounded-lg p-4 cursor-pointer transition ${
                    form.people === '18h-250-6' ? 'border-blue-600 bg-blue-50' : 'border-gray-300 hover:border-blue-400'
                  }`}>
                    <input
                      type="radio"
                      name="people"
                      value="18h-250-6"
                      className="hidden"
                      checked={form.people === '18h-250-6'}
                      onChange={handleChange}
                    />
                    <div className="text-left">
                      <p className="font-semibold text-blue-800">Juego completo – 18 hoyos</p>
                      <p className="text-sm text-green-700">6 personas – Precio especial</p>
                      <p className="text-sm text-gray-600">$250 por persona</p>
                    </div>
                  </label>
                )}
              </div>
            </div>
          )}
        </div>

        <textarea
          name="notes"
          placeholder="Comentarios (opcional)"
          rows="4"
          className="w-full p-3 border border-gray-300 rounded focus:outline-blue-500"
          value={form.notes}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-full transition"
        >
          ¡Reservar!
        </button>
      </form>
    </section>
  )
}