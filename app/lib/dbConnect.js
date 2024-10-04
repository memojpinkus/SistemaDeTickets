import mongoose from 'mongoose';

const connectMongo = () => {

    try{
        mongoose.connect(process.env.MONGODB_URI);
        console.log("conectado")

    }catch(error){
        console.log(error)
    }

}



export default connectMongo;
