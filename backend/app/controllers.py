from .models import ChatHistory
from .llama_model import load_model

model = load_model()

def generate_response(user_id, message, db):
    chat_history = ChatHistory(db)
    conversation = f"user: {message}"
    
    outputs = model(
        conversation,
        max_new_tokens=256,
        do_sample=True,
        top_p=0.9,
        temperature=0.7
    )
    
    response = outputs[0]["generated_text"]
    
    chat_history.save_message(user_id, message, response)
    
    return response