import { Lock, Mail } from 'lucide-react'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signinRequest } from '../utils/signinRequest';
import { useDispatch } from 'react-redux'

const Signin = () => {

      const dispatch = useDispatch();
        const navigate = useNavigate();
        const [signInData, setsignInData] = useState({
            email: "",
            password: ""
        });
    
        const onChangeHandle = (e) => {
            const { name, value } = e.target;
            setsignInData(prev => ({ ...prev, [name]: value }));
        }
    
        const email = signInData.email;
        const password = signInData.password;
    
        const sendSignInRequest = async (e) => {
            e.preventDefault();
            await signinRequest(dispatch, navigate , email, password)
        }

    return (
        <div className='w-full flex items-center justify-center h-screen '>
            <form onSubmit={sendSignInRequest} className="m-2 md:w-110 w-80 flex flex-col items-center justify-center text-white glass p-5 md:p-10 rounded-lg">
                <h2 className="text-4xl font-medium">Sign In</h2>
                <p className="text-sm mt-3">Welcome back!</p>

                <div className="flex items-center mt-6 w-full bg-transparent border border-white h-12 rounded-full overflow-hidden pl-6 gap-2">
                    <Mail className='size-5' />
                    <input onChange={onChangeHandle} name='email' value={signInData.email} type="email" placeholder="Email id" className="bg-transparent placeholder-gray-200/80 outline-none text-sm w-full h-full" required />
                </div>

                <div className="flex items-center mt-6 w-full bg-transparent border border-white h-12 rounded-full overflow-hidden pl-6 gap-2">
                    <Lock className='size-5' />
                    <input onChange={onChangeHandle} name='password' value={signInData.password} type="password" placeholder="Password" className="bg-transparent placeholder-gray-200/80 outline-none text-sm w-full h-full" required />
                </div>

                <button type="submit" className="mt-8 w-full h-11 rounded-full text-white bg-gradient-to-tr from-pink-500 via-orange-500 to-blue-500 hover:opacity-90 transition-opacity cursor-pointer">
                    Login
                </button>

                <Link to="/" className='btn glass w-full mt-6 text-center'>
                    Go Back
                </Link>
                <p className="text-sm mt-4">Don’t have an account? <Link className="text-indigo-400 hover:underline" to="/auth/signup">Sign up</Link></p>
            </form>
        </div>
    )
}

export default Signin