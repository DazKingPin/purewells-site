// components/Navbar.js
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/benefits">Benefits</Link></li>
        <li><Link href="/contact">Contact</Link></li>
        {/* Add more links as needed */}
      </ul>
    </nav>
  );
}
