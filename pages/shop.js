// pages/shop.js
export default function Shop() {
  const products = [
    { name: 'Frankincense 100g', price: '$5.00', image: '/product1.jpg' },
    { name: 'Edible High Quality Frank', price: '$5.00', image: '/product2.jpg' },
    { name: 'Frankincense 100g', price: '$5.00', image: '/product3.jpg' },
    { name: 'Lotus Banner', price: '$5.00', image: '/product4.jpg' },
  ];

  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-8 text-center">Shop Frankincense</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {products.map((item, index) => (
          <div key={index} className="bg-white shadow rounded p-4 text-center">
            <img src={item.image} alt={item.name} className="mb-4 rounded h-40 object-cover mx-auto" />
            <h2 className="text-lg font-semibold">{item.name}</h2>
            <p className="text-green-700 font-bold">{item.price}</p>
            <button className="mt-4 bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800">ADD TO CART</button>
          </div>
        ))}
      </div>
    </main>
  );
}
