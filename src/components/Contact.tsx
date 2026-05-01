import { useState } from "react"

function Contact(): React.JSX.Element {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <section id="contact" className="py-20 px-6 text-center">
      <h2 className="text-3xl font-bold mb-6">Let's Work Together 🚀</h2>

      <form className="max-w-md mx-auto space-y-4">
        <input
          name="name"
          placeholder="Name"
          onChange={handleChange}
          className="w-full p-3 bg-gray-800 rounded"
        />
        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full p-3 bg-gray-800 rounded"
        />
        <textarea
          name="message"
          placeholder="Message"
          onChange={handleChange}
          className="w-full p-3 bg-gray-800 rounded"
        />
      </form>
    </section>
  )
}

export default Contact