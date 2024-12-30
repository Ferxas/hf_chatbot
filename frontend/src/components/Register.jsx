import React, { useState } from 'react';
import api from '../services/api';
import { notifySuccess, notifyError } from '../toastConfig';
import { useNavigate } from 'react-router-dom';
import { FaUserPlus, FaLock, FaEnvelope } from 'react-icons/fa';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      notifyError('Las contraseñas no coinciden');
      return;
    }

    try {
      const response = await api.post('/register', { username, password });
      notifySuccess('Registro exitoso. ¡Ahora puedes iniciar sesión!');
      navigate('/login');
    } catch (error) {
      notifyError(error.response?.data?.message || 'Error al registrar usuario');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h2 className="text-3xl font-bold text-center text-primary mb-6">Registro</h2>
        
        <div className="flex items-center border rounded-lg px-4 py-2 mt-2">
          <FaEnvelope className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Nombre de Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full"
          />
        </div>

        <div className="flex items-center border rounded-lg px-4 py-2 mt-4">
          <FaLock className="text-gray-500 mr-2" />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full"
          />
        </div>

        <div className="flex items-center border rounded-lg px-4 py-2 mt-4">
          <FaLock className="text-gray-500 mr-2" />
          <input
            type="password"
            placeholder="Confirmar Contraseña"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full"
          />
        </div>

        <button
          onClick={handleRegister}
          className="w-full mt-6 bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded-lg flex justify-center items-center gap-2 transition-all"
        >
          <FaUserPlus /> Registrarse
        </button>

        <p className="text-center text-gray-500 mt-4">
          ¿Ya tienes una cuenta?{' '}
          <span
            onClick={() => navigate('/login')}
            className="text-primary cursor-pointer hover:underline"
          >
            Inicia sesión aquí
          </span>
        </p>
      </div>
    </div>
  );
}

export default Register;