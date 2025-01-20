import '../app/globals.css';


// pages/index.js
import Header from '../components/Header'
import Footer from '../components/Footer'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'
import Team from '../components/Team'
import Banner from '../components/BannerCarrosel'
import TiposDeIngreso from '@/components/TiposdeIngreso';
import ModalidadOnline from '@/components/ModOnline';
import ProgramaIntervencion from '@/components/Intervencion';
import WhatsHappening from '@/components/WhatsHappening';
import Layout from '@/components/Layout';


export default function Home() {
  return (
    <div>

      <Layout>
      <Banner />
      {/* Sección Principal - Hero con imagen de fondo y degradado */}
      <section className="relative bg-cover bg-center h-[50vh]" style={{ backgroundImage: "url('/images/hero-bg.jpeg')" }}>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-700 via-transparent to-transparent opacity-75"></div>
        <div className="relative z-10 max-w-7xl mx-auto flex items-center justify-center h-full text-center text-white px-4 sm:px-6 lg:px-8">
          <div>
            <h2 className="text-4xl font-bold tracking-wide sm:text-5xl">Unidos Para Siempre</h2>
            <p className="mt-4 text-lg sm:text-xl">Centro de Rehabilitación especializado en la recuperación de adicciones. Estamos aquí para ayudarte a comenzar una nueva vida.</p>

            <div className="flex flex-col sm:flex-row sm:justify-center gap-4 sm:gap-4 mt-6">
              {/* Primer Botón */}
              <a href="/contacto" className="w-56 mx-auto sm:w-auto inline-block bg-green-500 text-black py-3 px-8 rounded-full text-lg hover:bg-yellow-400 transition duration-300 transform hover:scale-105">
                Línea de Ayuda
              </a>

              {/* Segundo Botón */}
              <a href="/contacto" className="w-56 mx-auto sm:w-auto inline-block bg-yellow-400 text-black py-3 px-8 rounded-full text-lg hover:bg-green-500 transition duration-300 transform hover:scale-105">
                Más Información
              </a>
            </div>
          </div>
        </div>
      </section>

      <TiposDeIngreso />
      {/* Servicios */}

      <ModalidadOnline />

      <ProgramaIntervencion />

      <Team />

      {/* Servicios */}
      <Services />

    <WhatsHappening/>

      {/* Footer */}
      </Layout>
    </div>
  )
}
