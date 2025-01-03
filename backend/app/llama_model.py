import transformers
import os
import torch

def load_model():
    model_id = os.getenv("MODEL_ID", "meta-llama/Llama-3.2-1B-Instruct")  # Modelo por defecto
    token = os.getenv("HF_TOKEN")
    
    # Validación de las variables de entorno
    if not token:
        raise ValueError("El token de HuggingFace (HF_TOKEN) no está definido en las variables de entorno.")
    
    # Cargar el pipeline con el modelo
    pipeline = transformers.pipeline(
        "text-generation",
        model=model_id,
        tokenizer=model_id,
        device_map="auto",
        torch_dtype=torch.bfloat16,
        token=token
    )
    
    return pipeline