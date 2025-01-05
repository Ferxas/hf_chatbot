const { MongoClient } = require('mongodb');
require('dotenv').config(); // Cargar variables de entorno desde .env

// Obtener variables de entorno
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/mindfulness_chatbot';
const DB_NAME = MONGO_URI.split('/').pop();

// Función para sembrar datos en la base de datos
const seedDatabase = async () => {
  const client = new MongoClient(MONGO_URI);

  try {
    await client.connect();
    console.log(`✅ Conexión a MongoDB establecida en ${MONGO_URI}`);

    const db = client.db(DB_NAME);

    // 🗑️ Eliminar datos existentes
    await db.collection('users').deleteMany({});
    await db.collection('chats').deleteMany({});
    console.log('🗑️ Datos existentes eliminados.');

    // 👤 Insertar usuarios de ejemplo
    const users = await db.collection('users').insertMany([
      {
        username: 'admin',
        password: 'hashed_password_admin', // Simula contraseña cifrada
        created_at: new Date()
      },
      {
        username: 'user1',
        password: 'hashed_password_user1', // Simula contraseña cifrada
        created_at: new Date()
      }
    ]);
    console.log(`👤 Usuarios insertados: ${users.insertedCount}`);

    // 💬 Insertar historial de chats de ejemplo
    await db.collection('chats').insertMany([
      {
        user_id: users.insertedIds[0],
        user_message: 'Hola, ¿cómo estás?',
        bot_response: '¡Hola! Estoy aquí para ayudarte con mindfulness. 😊',
        timestamp: new Date()
      },
      {
        user_id: users.insertedIds[1],
        user_message: 'Dame un consejo para relajarme.',
        bot_response: 'Claro, intenta respirar profundamente durante unos minutos. 🌿',
        timestamp: new Date()
      }
    ]);
    console.log('💬 Historial de chats insertado correctamente.');

  } catch (err) {
    console.error('❌ Error al sembrar la base de datos:', err);
  } finally {
    await client.close();
    console.log('🔒 Conexión a MongoDB cerrada.');
  }
};

// Ejecutar el script de sembrado
seedDatabase();