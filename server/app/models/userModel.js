import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: { type: String , required: true },
    email: { type: String , unique: true , required: true },
    passward: { type: String , required: true}
}, { timestamps: true });

const userModel = mongoose.models.usermodel || mongoose.model('usermodel' , userSchema);
export default userModel;