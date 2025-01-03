from .models import ChatHistory
from .llama_model import load_model

# Cargar el modelo una sola vez para optimizar recursos
model = load_model()

def generate_response(user_id, message, db):
    chat_history = ChatHistory(db)
    
    # Construir la conversación en formato de mensajes
    messages = [
        {"role": "system", "content": "You are a helpful assistant focused on mindfulness."},
        {"role": "user", "content": message}
    ]
    
    try:
        outputs = model(
            messages,
            max_new_tokens=256,
            do_sample=True,
            top_p=0.9,
            temperature=0.7
        )
        
        # Extraer el texto generado
        response = outputs[0]["generated_text"]
        
        # Guardar el historial en la base de datos
        chat_history.save_message(user_id, message, response)
        
        return response
    except Exception as e:
        print(f"Error al generar respuesta: {e}")
        return "Lo siento, ocurrió un error al generar la respuesta."