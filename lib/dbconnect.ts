import mongoose from 'mongoose';

let isConnected: boolean = false;

export const connectToDatabase = async () => {
    mongoose.set('strictQuery', false);

    if (!process.env.MONGODB_URL) {
        return console.log('MONGODB_URL is missing from env variables');
    }

    if (isConnected) {
        return console.log("Database connection already established");
    }

    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            dbName: "dev-overflow",
        })

        isConnected = true;

        console.log("Connected to the database");
    }
    catch (error) {
        console.log("Error connecting to the database", error);
    }
}