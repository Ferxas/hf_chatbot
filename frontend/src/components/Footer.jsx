import React from 'react';

function Footer() {
  return (
    <footer className="bg-primary text-white text-center py-2 mt-auto shadow-inner">
      <p>&copy; {new Date().getFullYear()} Mindfulness Chatbot. Todos los derechos reservados.</p>
    </footer>
  );
}

export default Footer;