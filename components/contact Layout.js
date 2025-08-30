// components/Layout.js
import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white text-gray-800">
        {children}
      </div>
    </>
  );
}