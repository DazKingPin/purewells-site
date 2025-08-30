// pages/index.js
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>PUREWELLS | Nature’s Miracle, Treasure of Oman</title>
        <meta name="description" content="Premium Omani Frankincense for wellness, rituals, and healing." />
      </Head>

      <main className="bg-white text-gray-800 font-sans">
        {/* Hero Section */}
        <section className="relative bg-[url('/hero-bg.jpg')] bg-cover bg-center text-white py-20 px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Nature’s Miracle, Treasure of Oman</h1>
          <p className="text-lg md:text-xl mb-6">The World’s Finest Frankincense</p>
          <div className="flex justify-center gap-4">
            <a href="/shop" className="bg-green-700 hover:bg-green-800 px-6 py-3 rounded text-white">SHOP NOW</a>
            <a href="/history" className="border border-white px-6 py-3 rounded text-white">READ MORE</a>
          </div>
        </section>

        {/* History Section */}
        <section className="py-16 px-6 max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4">History of Frankincense</h2>
          <div className="border-l-4 border-purple-600 pl-4 mb-6">
            <p>
              Frankincense has been cherished for thousands of years. Revered as a “gem” since ancient times, it brings spiritual purification and peace of mind. Famously gifted at the birth of Christ, it was once as valuable as gold.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <img src="/resin-tree.jpg" alt="Frankincense on tree" className="rounded shadow" />
            <img src="/resin-bowl.jpg" alt="Frankincense in bowl" className="rounded shadow" />
            <img src="/tree-trunk.jpg" alt="Tree trunk with resin" className="rounded shadow" />
          </div>
        </section>

        {/* Rituals Section */}
        <section className="bg-gray-100 py-16 px-6">
          <h2 className="text-3xl font-semibold mb-8 text-center">Wellness Rituals</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded shadow">
              <img src="/water-course.jpg" alt="Frankincense in water" className="mb-4 rounded" />
              <h3 className="text-xl font-bold mb-2">Frankincense in Water</h3>
              <p className="mb-4">A 4-week online course to explore purification through hydration rituals.</p>
              <a href="/rituals" className="text-green-700 underline">READ MORE</a>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <img src="/smoke-course.jpg" alt="Rituals at home" className="mb-4 rounded" />
              <h3 className="text-xl font-bold mb-2">Rituals at Home</h3>
              <p className="mb-4">A 4-week course on using frankincense for relaxation and spiritual clarity.</p>
              <a href="/rituals" className="text-green-700 underline">READ MORE</a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
