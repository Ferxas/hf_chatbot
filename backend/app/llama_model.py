import transformers
import os
import torch

def load_model():
    model_id = os.getenv("MODEL_ID")
    token = os.getenv("HF_TOKEN")
    
    pipeline = transformers.pipeline(
        "text-generation",
        model=model_id,
        tokenizer=model_id,
        device_map="auto",
        model_kwargs={"torch_dtype": torch.bfloat16},
        token=token
    )
    
    return pipeline