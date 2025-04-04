import mongoose from "mongoose"

export const connectDb = async () => {
    try{
        const conn = await mongoose.connect(process.env.Mongo_URL)
        console.log(`Mongodb connected  ${conn.connection.host}`)
    }
    catch{
        console.error(`Error :  ${error.messsage}`)
        process.exit(1)
    }
}