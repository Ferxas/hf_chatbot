import React from 'react';
import { FaUserCircle, FaSignOutAlt, FaHistory, FaHome, FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import ToggleTheme from './ToggleTheme';

function Sidebar({ username, handleLogout, toggleSidebar }) {
  const navigate = useNavigate();

  return (
    <aside className="h-screen w-64 bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-lg flex flex-col justify-between relative transition-all duration-300">
      {/* Botón para Ocultar Sidebar */}
      <button
        onClick={toggleSidebar}
        className="absolute top-4 right-4 bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white px-2 py-1 rounded-md hover:bg-gray-400 dark:hover:bg-gray-600 transition-all"
      >
        <FaArrowLeft />
      </button>

      {/* Encabezado */}
      <div className="p-6 text-center border-b border-gray-200 dark:border-gray-700 animate-fadeIn">
        <h2 className="text-2xl font-bold">Mindfulness Chatbot</h2>
        <p className="text-sm mt-1">Bienvenido, {username}</p>
      </div>

      {/* Navegación */}
      <nav className="flex-1 p-4 space-y-4 overflow-y-auto animate-slideIn">
        <button
          onClick={() => navigate('/')}
          className="w-full text-left px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 hover:scale-105"
        >
          <FaHome className="inline-block mr-2" /> Dashboard
        </button>
        <button
          onClick={() => navigate('/history')}
          className="w-full text-left px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 hover:scale-105"
        >
          <FaHistory className="inline-block mr-2" /> Historial
        </button>
      </nav>

      {/* Botones Inferiores */}
      <div className="absolute bottom-4 left-0 w-full px-4 space-y-3 animate-fadeInUp">
        {/* Botón de Modo Oscuro */}
        <div className="flex justify-center">
          <ToggleTheme />
        </div>
        {/* Botón de Cerrar Sesión */}
        <button
          onClick={handleLogout}
          className="flex items-center justify-center gap-2 bg-red-500 px-4 py-2 rounded-md text-white hover:bg-red-700 transition-all duration-200 hover:scale-105 w-full"
        >
          <FaSignOutAlt className="text-xl" /> Cerrar Sesión
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;