import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import Notifications from './Notifications';

function Header({ username }) {
  return (
    <header className="bg-primary text-white py-4 px-6 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-bold">¡Hola, {username}!</h1>
      <div className="flex items-center gap-4">
        {/* 📌 Componente de Notificaciones */}
        <Notifications />
        {/* 📌 Ícono de Usuario */}
        <FaUserCircle className="text-3xl" />
      </div>
    </header>
  );
}

export default Header;