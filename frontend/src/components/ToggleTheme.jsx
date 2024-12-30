import React, { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

function ToggleTheme() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Al cargar, verifica si el tema ya está en localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="flex items-center gap-2 px-3 py-1 rounded-md text-white bg-secondary hover:bg-green-500 transition-all"
    >
      {darkMode ? (
        <>
          <FaSun className="text-xl" /> Modo Claro
        </>
      ) : (
        <>
          <FaMoon className="text-xl" /> Modo Oscuro
        </>
      )}
    </button>
  );
}

export default ToggleTheme;