import React, { useState } from 'react';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-blue-700 text-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Barra superior */}
        <div className="flex justify-between items-center py-4">
          <h1 className="text-lg md:text-xl font-light">
            <span className="font-bold">Unidos </span>Para 
            <span className="font-bold"> Siempre</span>
          </h1>
          {/* Navegación desktop */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li><a href="/" className="hover:text-yellow-200 transition-colors">Inicio</a></li>
              <li><a href="/servicios" className="hover:text-yellow-200 transition-colors">Servicios</a></li>
              <li><a href="/testimonios" className="hover:text-yellow-200 transition-colors">Testimonios</a></li>
              <li><a href="/Blog" className="hover:text-yellow-200 transition-colors">Blog</a></li> {/* Aquí se asegura la ruta */}
            </ul>
          </nav>

          {/* Botón de contacto en desktop */}
          <div className="hidden md:block">
            <a 
              href="/contacto" 
              className="bg-green-500 text-black py-2 px-4 rounded-lg hover:bg-yellow-400 transition-colors font-medium"
            >
              Contáctanos
            </a>
          </div>

          {/* Botón de menú móvil */}
          <button 
            className="md:hidden p-2 hover:bg-blue-700 rounded-lg transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Menú móvil */}
        <div 
          className={`md:hidden bg-blue-600 border-t border-blue-600 ${
            isMenuOpen ? 'block' : 'hidden'
          }`}
        >
          <nav className="py-4">
            <ul className="space-y-2">
              <li><a href="/" className="block py-2 px-4 hover:bg-blue-700 rounded-lg transition-colors">Inicio</a></li>
              <li><a href="/servicios" className="block py-2 px-4 hover:bg-blue-700 rounded-lg transition-colors">Servicios</a></li>
              <li><a href="/testimonios" className="block py-2 px-4 hover:bg-blue-700 rounded-lg transition-colors">Testimonios</a></li>
              <li><a href="/Blog" className="block py-2 px-4 hover:bg-blue-700 rounded-lg transition-colors">Blog</a></li> {/* Enlace al índice del blog */}
              <li className="px-4 pt-2">
                <a 
                  href="/contacto" 
                  className="block bg-green-500 text-black py-2 px-4 rounded-lg hover:bg-yellow-400 transition-colors text-center font-medium"
                >
                  Contáctanos
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
