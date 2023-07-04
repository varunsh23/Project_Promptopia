import mongoose from "mongoose";

// track the connection
let isConnected = false;

export const connectToDB = async ()=>{
    mongoose.set("strictQuery",true)
if(isConnected){
    console.log("MongoDB is already connected");
    return;
}
try {
    await mongoose.connect(process.env.MONGODB_URI ,{
        dbName:"share-prompt",
        useNewUrlParser:true,
        useUnifiedTopology:true,

    })
    isConnected=true;
    console.log("Connected to MongoDB")
} catch (error) {
    console.log(error);
}

} 