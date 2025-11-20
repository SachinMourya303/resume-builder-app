import axios from 'axios';
import { logIn } from '../statemanagement/slice/userSlice';
import { toast } from 'react-toastify'

export const signupRequest = async (dispatch, name, email, password) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_API_URI}/auth/signup`, { dispatch, name, email, password });
        dispatch(logIn(response.data));
        toast.success(response.data.message);
    } catch (error) {
        toast.error(error.message);
    }
}