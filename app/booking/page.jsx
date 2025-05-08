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

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Reservación enviada:', form)
    alert('¡Gracias por tu reservación!')
    setForm({ name: '', phone: '', date: '', time: '', people: '', notes: '' })
  }

  return (
    <section className="py-20 px-6 max-w-2xl mx-auto text-gray-800">
      <h1 className="text-4xl font-bold text-center text-blue-700 uppercase mb-10">Reservaciones</h1>

      <form onSubmit={handleSubmit} className="bg-white/80 backdrop-blur-md p-6 rounded-lg shadow-md space-y-5">
        <input
          type="text"
          name="name"
          placeholder="Nombre completo"
          className="w-full p-3 border rounded"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Teléfono o WhatsApp"
          className="w-full p-3 border rounded"
          value={form.phone}
          onChange={handleChange}
          required
        />
        <div className="flex gap-4">
          <input
            type="date"
            name="date"
            className="w-1/2 p-3 border rounded"
            value={form.date}
            onChange={handleChange}
            required
          />
          <input
            type="time"
            name="time"
            className="w-1/2 p-3 border rounded"
            value={form.time}
            onChange={handleChange}
            required
          />
        </div>
        <input
          type="number"
          name="people"
          placeholder="Número de personas"
          min="1"
          className="w-full p-3 border rounded"
          value={form.people}
          onChange={handleChange}
          required
        />
        <textarea
          name="notes"
          placeholder="Comentarios (opcional)"
          rows="4"
          className="w-full p-3 border rounded"
          value={form.notes}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded transition"
        >
          ¡Reservar!
        </button>
      </form>
    </section>
  )
}
