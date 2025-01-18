import '../../app/globals.css';

import Header from '@/components/Header'; // Importa el Header
import Link from 'next/link'; // Utiliza Link para navegar sin recargar la página

const BlogIndex = () => {
  // Datos de ejemplo para los posts del blog
  const blogPosts = [
    {
      id: 1,
      title: "La Importancia del Apoyo Familiar en la Recuperación",
      excerpt: "El proceso de recuperación es un camino que no se recorre solo. Descubre cómo el apoyo familiar puede marcar la diferencia...",
      date: "15 de Enero, 2025",
      category: "Recuperación",
      imageUrl: "/images/drogas.webp"
    },
    {
      id: 2,
      title: "Técnicas de Mindfulness para la Recuperación",
      excerpt: "Aprende cómo las técnicas de atención plena pueden ayudarte en tu proceso de rehabilitación y mantener un equilibrio mental...",
      date: "10 de Enero, 2025",
      category: "Bienestar",
      imageUrl: "/images/drogas.webp"
    },
    {
      id: 3,
      title: "Historias de Éxito: Un Camino hacia la Nueva Vida",
      excerpt: "Conoce las inspiradoras historias de personas que han logrado superar sus adicciones y construir una vida plena...",
      date: "5 de Enero, 2025",
      category: "Testimonios",
      imageUrl: "/images/drogas.webp"
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
                <Link href={`/blog/${post.id}`}>
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
