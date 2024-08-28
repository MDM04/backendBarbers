import mongoose from 'mongoose';
import env from 'dotenv'

env.config()


export const mongoConnect = async ()=>{

    try {
        await  mongoose.connect(process.env.MONGO_DB || "", {serverSelectionTimeoutMS: 30000})
        console.log('Mongo Conectado!')
        
    } catch (error) {
        console.log('Erro ao conectar o Mongo!')
    }

}

