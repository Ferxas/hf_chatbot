import React, { useState } from 'react';
import { FaBell, FaTimesCircle } from 'react-icons/fa';

function Notifications() {
  const [showNotifications, setShowNotifications] = useState(false);

  const notifications = [
    { id: 1, message: '¡No olvides tu sesión de meditación esta tarde!' },
    { id: 2, message: 'Nuevo mensaje en tu historial de chat.' },
    { id: 3, message: 'Recuerda beber agua y tomar descansos.' },
  ];

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  const closeNotification = (id) => {
    // Eliminar notificación individual (opcional)
    console.log(`Notificación ${id} cerrada`);
  };

  return (
    <div className="relative">
      {/* Botón de Notificaciones */}
      <button
        onClick={toggleNotifications}
        className="relative p-2 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 transition-all"
      >
        <FaBell className="text-xl text-primary" />
        {notifications.length > 0 && (
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
            {notifications.length}
          </span>
        )}
      </button>

      {/* Panel de Notificaciones */}
      {showNotifications && (
        <div className="absolute right-0 mt-2 w-72 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg rounded-lg z-50 overflow-hidden">
          <div className="p-4 border-b bg-gray-100 dark:bg-gray-700">
            <h3 className="text-lg font-bold text-gray-800 dark:text-white">Notificaciones</h3>
          </div>
          <ul className="max-h-64 overflow-y-auto">
            {notifications.length > 0 ? (
              notifications.map((notification) => (
                <li
                  key={notification.id}
                  className="p-3 flex justify-between items-center border-b last:border-b-0 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all"
                >
                  <span className="text-sm text-gray-700 dark:text-gray-200">
                    {notification.message}
                  </span>
                  <button onClick={() => closeNotification(notification.id)} className="text-red-500 hover:text-red-700">
                    <FaTimesCircle />
                  </button>
                </li>
              ))
            ) : (
              <li className="p-4 text-sm text-gray-500 dark:text-gray-400 text-center">
                No hay notificaciones nuevas.
              </li>
            )}
          </ul>
          <div className="p-2 text-center bg-gray-50 dark:bg-gray-700">
            <button
              onClick={toggleNotifications}
              className="text-primary dark:text-white hover:underline"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Notifications;