import '../../app/globals.css';

import Header from '@/components/Header'; // Importa el Header
import Link from 'next/link'; // Utiliza Link para navegar sin recargar la página

const BlogIndex = () => {
  // Datos de ejemplo para los posts del blog
  const blogPosts = [
    {
      id: 1,
      title: "¿Que es la adiccion a las drogas?",
      excerpt: "La adicción se define como un trastorno crónico recurrente que se caracteriza por la búsqueda compulsiva de drogas, el uso continuo a pesar de las consecuencias dañinas y cambios duraderos en el cerebro..",
      date: "15 de Enero, 2025",
      category: "Adicciones",
      imageUrl: "https://cdn.karar.com/news/1639658.jpg"
    },
    {
      id: 2,
      title: "¿Qué es la coodependencia?",
      excerpt: "La codependencia propiamente dicha comienza y es evidente en el círculo familiar y / o de pertenencia de un adicto, del que podemos ser parte cualquiera de nosotros...",
      date: "10 de Enero, 2025",
      category: "Emocional",
      imageUrl: "https://images.delfi.ee/media-api-image-cropper/v1/1e975429-70d0-41df-972c-f080d37d354b.jpg?w=1200&h=800"
    },
    {
      id: 3,
      title: "¿Que son las drogas y el alcohol?",
      excerpt: "Las drogas o el alcohol son agentes naturales o químicos que afectan las funciones del cuerpo de los seres vivientes. Cambian la manera de pensar, actuar o sentir de quienes lo consumen...",
      date: "6 de Julio, 2022",
      category: "Adicciones",
      imageUrl: "/images/drogas.webp"
    },
    {
      id: 4,
      title: "Sindrome de abstinecia",
      excerpt: "Se define como “grupo de signos y síntomas que aparecen en el individuo como consecuencia de la supresión o reducción del consumo de una droga...",
      date: "6 de Julio, 2022",
      category: "Adicciones",
      imageUrl: "https://fondnika.ru/wp-content/uploads/2018/08/1-8.jpg"
    }
  ];

  return (
    <>
      <Header /> {/* Incluir el Header en la página */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Encabezado del Blog */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Nuestro Blog
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Artículos, consejos y experiencias para apoyarte en tu camino hacia la recuperación
          </p>
        </div>

        {/* Grid de Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-500 text-sm mb-2">{post.date}</p>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                <Link href={`/blog/id/${post.id}`}>
                  <span className="text-blue-600 font-medium hover:text-blue-700 transition-colors">
                    Leer más →
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogIndex;
