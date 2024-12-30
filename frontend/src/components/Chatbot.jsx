import React, { useState } from 'react'
import api from '../services/api'
import { notifySuccess, notifyError } from '../toastConfig'
import { FaRobot, FaPaperPlane, FaUserPlus, FaLock } from 'react-icons/fa'


function Chatbot() {
    const [message, setMessage] = useState("")
    const [response, setResponse] = useState("")

    const sendMessage = async () => {
        try {
            const token = localStorage.getItem("token");
            const res = await api.post("/chat", { user_id: '123', message }, {
                headers: { Authorization: `Bearer ${token}` }
            })
            setResponse(res.data.response);
        } catch (error) {
            notifyError("Error en el chatbot");
        }
    }


    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-md max-w-xl w-full">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                    <FaRobot className="mr-2 text-primary" />
                    <div className='text-gray-500'>
                        Chatbot de Mindfulness
                    </div>
                </h2>
                <input
                    type="text"
                    placeholder="Escribe un mensaje"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button onClick={sendMessage} className="w-full mt-4 flex items-center justify-center">
                    <FaPaperPlane className="mr-2" /> Enviar
                </button>
                <p className="mt-4 text-gray-600"><strong>Respuesta:</strong> {response}</p>
            </div>
        </div>
    )
}

export default Chatbot;