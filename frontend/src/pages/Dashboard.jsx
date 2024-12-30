import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Statistics from '../components/Statistics';
import MotivationalQuote from '../components/MotivationalQuote';
import Chatbot from '../components/Chatbot';
import Footer from '../components/Footer';
import { notifySuccess } from '../toastConfig';

function Dashboard() {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);
  const [username, setUsername] = useState('Usuario');
  const [chatCount, setChatCount] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    const user = localStorage.getItem('username') || 'Invitado';
    setUsername(user);
    setChatCount(42);
    notifySuccess('¡Bienvenido al Dashboard de Mindfulness!');
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    navigate('/login');
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`relative flex min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen bg-white dark:bg-gray-800 shadow-lg z-50 transition-all duration-300 ${
          isSidebarOpen ? 'translate-x-0 opacity-100 w-64' : '-translate-x-full opacity-0 w-0'
        }`}
      >
        <Sidebar
          username={username}
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
          handleLogout={handleLogout}
          toggleSidebar={toggleSidebar}
        />
      </div>

      {/* Contenido Principal */}
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ${
          isSidebarOpen ? 'ml-64' : 'ml-0'
        }`}
      >
        {/* Botón de alternar Sidebar */}
        <button
          onClick={toggleSidebar}
          className="fixed top-4 left-4 z-50 bg-slate-700 text-white px-3 py-2 rounded-md hover:bg-secondary transition-all"
        >
          {isSidebarOpen ? 'Ocultar' : 'Mostrar'} Sidebar
        </button>

        {/* Header */}
        <Header username={username} />

        {/* Estadísticas */}
        <Statistics chatCount={chatCount} />

        {/* Contenido Principal */}
        <main className="flex flex-col md:flex-row gap-4 p-6 flex-grow">
          <section className="w-full md:w-1/3">
            <MotivationalQuote />
          </section>
          <section className="w-full md:w-2/3">
            <Chatbot />
          </section>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default Dashboard;