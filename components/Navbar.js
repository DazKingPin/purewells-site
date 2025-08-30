/ components/Navbar.js
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-green-700">PUREWELLS</div>
        <ul className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
          <li><Link href="/">HOME</Link></li>
          <li><Link href="/history">HISTORY</Link></li>
          <li><Link href="/benefits">BENEFITS</Link></li>
          <li><Link href="/rituals">RITUAL</Link></li>
          <li><Link href="/shop">SHOP</Link></li>
          <li><Link href="/contact">CONTACT</Link></li>
        </ul>
      </nav>
    </header>
  );
}
