import React, { useEffect, useState } from 'react';
import { FaQuoteLeft, FaQuoteRight, FaSyncAlt } from 'react-icons/fa';

function MotivationalQuote() {
    const [quote, setQuote] = useState('');
    const [fade, setFade] = useState(false);

    const morningQuotes = [
        "¡Buenos días! Hoy es un nuevo comienzo; respira profundo, sonríe y enfrenta el día con la fuerza que llevas dentro.",
        "Cada amanecer es una nueva oportunidad para ser mejor.",
        "¡Despierta con gratitud y vive con propósito hoy!"
    ];

    const afternoonQuotes = [
        "Recuerda: cada pequeño paso que das hoy te acerca a tus sueños. ¡Sigue adelante, estás haciendo un gran trabajo!",
        "El esfuerzo de hoy será la recompensa de mañana.",
        "¡Tómate un respiro y sigue con energía renovada!"
    ];

    const nightQuotes = [
        "Deja que la calma inunde tu corazón; lo que hiciste hoy fue suficiente. Mañana será otra oportunidad para brillar.",
        "El descanso es parte del éxito. Duerme bien.",
        "Reflexiona sobre tus logros y prepárate para un nuevo día."
    ];

    const getQuote = () => {
        const hours = new Date().getHours();
        let selectedQuotes = [];

        if (hours < 12) {
            selectedQuotes = morningQuotes;
        } else if (hours < 18) {
            selectedQuotes = afternoonQuotes;
        } else {
            selectedQuotes = nightQuotes;
        }

        // Agregar animación al cambiar la frase
        setFade(true);
        setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * selectedQuotes.length);
            setQuote(selectedQuotes[randomIndex]);
            setFade(false);
        }, 300);
    };

    useEffect(() => {
        getQuote();
    }, []);

    return (
        <div className="flex flex-col items-center justify-center p-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-lg transition-transform hover:scale-105">
            <FaQuoteLeft className="text-4xl mb-2" />
            <p className={`text-lg italic text-center transition-opacity duration-300 ${fade ? 'opacity-0' : 'opacity-100'}`}>
                {quote}
            </p>
            <FaQuoteRight className="text-4xl mt-2" />

            {/* Botón para refrescar la frase */}
            <button
                onClick={getQuote}
                className="mt-4 flex items-center gap-2 px-4 py-2 bg-secondary text-white rounded-lg hover:bg-green-500 transition-all"
            >
                <FaSyncAlt /> Nueva frase
            </button>
        </div>
    );
}

export default MotivationalQuote;