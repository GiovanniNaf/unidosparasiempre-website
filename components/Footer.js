// components/Footer.js
const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white text-center py-4">
      <p>&copy; {new Date().getFullYear()} Unidos Para Siempre. Todos los derechos reservados.</p>
      <div className="mt-4">
        <a href="https://www.facebook.com/UnidosParaSiempre" target="_blank" className="hover:underline mx-2">Facebook</a>
        <a href="https://www.instagram.com/UnidosParaSiempre" target="_blank" className="hover:underline mx-2">Instagram</a>
      </div>
    </footer>
  );
};

export default Footer;
