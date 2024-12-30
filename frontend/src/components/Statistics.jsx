import React from 'react';
import { FaChartLine, FaClock } from 'react-icons/fa';

function Statistics({ chatCount }) {
  return (
    <section className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md flex items-center gap-4">
        <FaChartLine className="text-4xl text-green-500" />
        <div>
          <h3 className="text-xl font-semibold">Chats Realizados</h3>
          <p className="text-gray-500 dark:text-gray-300">{chatCount}</p>
        </div>
      </div>
      <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md flex items-center gap-4">
        <FaClock className="text-4xl text-blue-500" />
        <div>
          <h3 className="text-xl font-semibold">Tiempo Total</h3>
          <p className="text-gray-500 dark:text-gray-300">2 horas 15 minutos</p>
        </div>
      </div>
    </section>
  );
}

export default Statistics;