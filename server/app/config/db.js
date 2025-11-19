import mongoose from "mongoose";

export const ConnectDB = async () => {
 try {
    await mongoose.connect(`${process.env.MONGODB_URI}/resume-collection`);
    console.log('DB Connected');
 } catch (error) {
    console.error(error.message);
 }
}