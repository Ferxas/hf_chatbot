import React, { useState, useEffect } from 'react';
import api from '../services/api';
import { notifyError } from '../toastConfig';
import { FaHistory } from 'react-icons/fa';

function History() {
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl w-full">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <FaHistory className="mr-2 text-primary" /> Historial de Conversaciones
        </h2>
        <div className="space-y-4 max-h-80 overflow-y-auto">
          {history.length > 0 ? (
            history.map((item, index) => (
              <div key={index} className="p-4 border rounded-md bg-gray-50">
                <p><strong>Mensaje:</strong> {item.message}</p>
                <p><strong>Respuesta:</strong> {item.response}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No hay historial disponible.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default History;