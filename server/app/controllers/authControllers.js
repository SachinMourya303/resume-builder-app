import userModel from "../models/userModel.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const signup = async (req, res) => {
    try {
        const { name, email, passward } = req.body;

        const findUser = await userModel.findOne({ email });
        if (findUser) {
            return res.status(409).json({ success: false, message: 'User already exists you can signin' });
        }

        const user = new userModel({ name, email, passward });
        user.passward = await bcrypt.hash(passward, 10);
        await user.save();
        return res.status(200).json({ success: true, message: 'Signup successfull' });
    } catch (error) {
        return res.status(200).json({ success: false, message: error.message });
    }
}

export const signin = async (req, res) => {
    try {
        const { email, passward } = req.body;

        const findUser = await userModel.findOne({ email });
        if (!findUser) {
            return res.status(409).json({ success: false, message: 'User not found please signup!' });
        }

        const isPassEqual = await bcrypt.compare(passward, findUser.passward);
        if (!isPassEqual) {
            return res.status(409).json({ success: false, message: 'Incorrect passward' });
        }

        const jwtToken = jwt.sign({ email: findUser.email, _id: findUser._id },
            process.env.JWT_SECRET,
            { expiresIn: '24h' });
        return res.status(200).json({ success: true, message: 'Signin successfull' , token: jwtToken , name: findUser.name , email: findUser.email });
    } catch (error) {
        return res.status(200).json({ success: false, message: error.message });
    }
}