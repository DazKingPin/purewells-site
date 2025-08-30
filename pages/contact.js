// pages/contact.js
export default function Contact() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
      <p className="mb-6 text-center text-gray-600">
        For inquiries or custom orders related to frankincense, feel free to reach out. Our experts are here to assist.
      </p>
      <form className="grid gap-6 bg-white p-6 rounded shadow">
        <input type="text" placeholder="Name" className="border p-3 rounded" required />
        <input type="email" placeholder="Email" className="border p-3 rounded" required />
        <input type="text" placeholder="Subject" className="border p-3 rounded" />
        <textarea placeholder="Message" rows="5" className="border p-3 rounded" required></textarea>
        <button type="submit" className="bg-green-700 text-white px-6 py-3 rounded hover:bg-green-800">SUBMIT</button>
      </form>
      <p className="mt-6 text-center text-sm text-gray-500">Email: INFO@THEFRANKINCENSE.COM</p>
    </main>
  );
}
