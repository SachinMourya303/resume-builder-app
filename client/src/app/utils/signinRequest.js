import axios from 'axios';
import { logIn } from '../statemanagement/slice/userSlice';
import { toast } from 'react-hot-toast'

export const signinRequest = async (dispatch, navigate , email, password) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_API_URI}/auth/signin`, { email, password });
        dispatch(logIn(response.data));
        if(response){
            navigate('/dashboard');
        }
        toast.success(response.data.message);
    } catch (error) {
        toast.error(error.message);
    }
}