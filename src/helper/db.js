import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb+srv://aasibkhan155471:r7Z_d7wg%23D7c5Wy@cluster2.ea3iz.mongodb.net/RESUME?retryWrites=true&w=majority&appName=Cluster2");
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error connecting to MongoDB: ${error.message}`);
        process.exit(1);
    }
};

export default connectDB;

