import os
from dotenv import load_dotenv

load_dotenv()


class Config: 
    SECRET_KEY = os.getenv("SECRET_KEY")
    MONGO_URI = os.getenv("MONGO_URI")
    HF_TOKEN = os.getenv("HF_TOKEN")
    MODEL_ID = os.getenv("MODEL_ID")
    
    
    