import React, { useState } from 'react';
import api from '../services/api';
import { notifySuccess, notifyError } from '../toastConfig';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaLock, FaSignInAlt } from 'react-icons/fa';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!username || !password) {
      notifyError('Por favor, completa todos los campos.');
      return;
    }

    try {
      console.log('API_URL:', import.meta.env.VITE_API_URL); // Verifica la URL de la API
      const response = await api.post('/login', { username, password });

      localStorage.setItem('token', response.data.token);
      notifySuccess('Inicio de sesión exitoso. ¡Bienvenido!');
      navigate('/dashboard');
    } catch (error) {
      console.error('Error de inicio de sesión:', error.response?.data || error.message);
      notifyError(error.response?.data?.message || 'Error al iniciar sesión');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h2 className="text-3xl font-bold text-center text-primary mb-6">Iniciar Sesión</h2>
        
        {/* Campo de Usuario */}
        <div className="flex items-center border rounded-lg px-4 py-2 mt-2">
          <FaUser className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Nombre de Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full focus:outline-none"
          />
        </div>

        {/* Campo de Contraseña */}
        <div className="flex items-center border rounded-lg px-4 py-2 mt-4">
          <FaLock className="text-gray-500 mr-2" />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full focus:outline-none"
          />
        </div>

        {/* Botón de Iniciar Sesión */}
        <button
          onClick={handleLogin}
          className="w-full mt-6 bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded-lg flex justify-center items-center gap-2 transition-all"
        >
          <FaSignInAlt /> Iniciar Sesión
        </button>

        {/* Enlace a Registro */}
        <p className="text-center text-gray-500 mt-4">
          ¿No tienes una cuenta?{' '}
          <span
            onClick={() => navigate('/register')}
            className="text-primary cursor-pointer hover:underline"
          >
            Regístrate aquí
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;