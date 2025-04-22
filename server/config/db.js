import mongoose from "mongoose"

export const connectDb = async () => {
    try{
        const conn = await mongoose.connect(process.env.Mongo_URL)
        console.log(`Mongodb connected  ${conn.connection.host}`)
    }
    catch (error) {
        console.error(`Error: ${error.message}`); 
        process.exit(1);
      }
}