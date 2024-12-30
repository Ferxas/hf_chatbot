import React, { useState, useEffect } from 'react';
import api from '../services/api';
import { notifyError } from '../toastConfig';
import { FaHistory } from 'react-icons/fa';

function HistoryPage() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await api.get('/history', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setHistory(response.data.history);
      } catch (error) {
        notifyError('Error al cargar el historial');
      }
    };

    fetchHistory();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4 flex items-center gap-2 text-primary">
        <FaHistory /> Historial de Conversaciones
      </h1>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-4xl overflow-y-auto max-h-[600px]">
        {history.length > 0 ? (
          history.map((item, index) => (
            <div key={index} className="p-4 border-b last:border-b-0 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all">
              <p><strong>Mensaje:</strong> {item.message}</p>
              <p><strong>Respuesta:</strong> {item.response}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center">No hay historial disponible.</p>
        )}
      </div>
    </div>
  );
}

export default HistoryPage;