import mongoose from 'mongoose';



export const mongoConnect = async ()=>{

    try {
        await  mongoose.connect('mongodb://127.0.0.1:27017/Barbearia-Avuá')
        console.log('Mongo Conectado!')
    } catch (error) {
        console.log('Erro ao conectar o Mongo!')
    }

}

