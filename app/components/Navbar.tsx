
   "use client"
  import React, { useState } from 'react';
  import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <img src="/logo.png" alt="Logo" className="h-20 w-20" />
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {['Home', 'About', 'Services', 'Contact'].map((item) => (
              <a key={item} href="#" className="text-white hover:text-violet-500  px-3 py-2">
                {item}
              </a>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-48' : 'max-h-0'} overflow-hidden`}>
          {['Home', 'About', 'Services', 'Contact'].map((item) => (
            <a key={item} href="#" className="block py-2 text-violet-500 hover:text-white">
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;