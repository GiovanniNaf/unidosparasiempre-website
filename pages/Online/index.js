import '../../app/globals.css';


import Footer from '@/components/Footer';
import React, { useState } from 'react';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (

    
    <section className="min-h-screen flex items-center justify-center bg-blue-800">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full">
        {/* Título Principal */}
        <h1 className="text-4xl font-extrabold text-center text-blue-600 mb-6">
          Bienvenidos a <p className='text-black'>UPS Online</p>
        </h1>

        {/* Título del Formulario */}
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          {isLogin ? 'Iniciar Sesión' : 'Registrarse'}
        </h2>

        {/* Formulario */}
        <form>
          {/* Nombre (Solo para registro) */}
          {!isLogin && (
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-2"
              >
                Nombre completo <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                placeholder="Ingresa tu nombre"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>
          )}

          {/* Correo Electrónico */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Correo Electrónico <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              placeholder="Ingresa tu correo electrónico"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          {/* Contraseña */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-2"
            >
              Contraseña <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              id="password"
              placeholder="Ingresa tu contraseña"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          {/* Botón */}
          <div className="mb-6">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all"
            >
              {isLogin ? 'Iniciar Sesión' : 'Registrarse'}
            </button>
          </div>
        </form>

        {/* Cambio entre iniciar sesión y registrarse */}
        <p className="text-center text-gray-600">
          {isLogin
            ? '¿No tienes una cuenta?'
            : '¿Ya tienes una cuenta?'}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-600 font-medium hover:text-blue-700 ml-1 transition-all"
          >
            {isLogin ? 'Regístrate' : 'Inicia sesión'}
          </button>
        </p>
       
      </div>
    </section>
   
  );


};


export default Auth;
