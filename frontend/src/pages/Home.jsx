import React from 'react'
import { Link } from 'react-router-dom'
import { FaSmile, FaSignInAlt, FaUserPlus } from 'react-icons/fa'


function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <h1 className="text-4xl font-bold text-primary mb-6">¡Bienvenido al Chatbot de Mindfulness!</h1>
      <p className="text-lg text-gray-700 mb-4">Tu compañero diario para el bienestar mental.</p>
      <div className="flex gap-4 mt-6">
        <Link to="/login" className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg">
          <FaSignInAlt /> Iniciar Sesión
        </Link>
        <Link to="/register" className="flex items-center gap-2 bg-secondary text-white px-4 py-2 rounded-lg">
          <FaUserPlus /> Registrarse
        </Link>
      </div>
      <FaSmile className="text-6xl text-secondary mt-6" />
    </div>
  )
}

export default Home;