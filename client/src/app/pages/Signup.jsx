import { Lock, Mail, User2 } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { signupRequest } from '../utils/signupRequest'
import { useDispatch } from 'react-redux'

const Signup = () => {
    const dispatch = useDispatch();
    const [signUpData, setSignUpData] = useState({
        name: "",
        email: "",
        password: ""
    })

    console.log(signUpData);

    const onChangeHandle = (e) => {
        const { name, value } = e.target;
        setSignUpData(prev => ({ ...prev, [name]: value }));
    }

    const name = signUpData.name;
    const email = signUpData.email;
    const password = signUpData.password;

    const sendSignUpRequest = async (e) => {
        e.preventDefault();
        await signupRequest(dispatch, name, email, password)
    }

    return (
        <div className='w-full flex items-center justify-center h-screen '>
            <form onSubmit={sendSignUpRequest} className="m-2 md:w-110 w-80 flex flex-col items-center justify-center text-white glass p-5 md:p-10 rounded-lg">
                <h2 className="text-4xl font-medium">Sign Up</h2>
                <p className="text-sm mt-3">Welcome to ResumX.</p>

                <div className="flex items-center mt-6 w-full bg-transparent border border-white h-12 rounded-full overflow-hidden pl-6 gap-2">
                    <User2 className='size-5' />
                    <input onChange={onChangeHandle} value={signUpData.name} type="text" placeholder="Name" name='name' className="bg-transparent placeholder-gray-200/80 outline-none text-sm w-full h-full" required />
                </div>

                <div className="flex items-center mt-6 w-full bg-transparent border border-white h-12 rounded-full overflow-hidden pl-6 gap-2">
                    <Mail className='size-5' />
                    <input onChange={onChangeHandle} value={signUpData.email} type="email" placeholder="Email id" name='email' className="bg-transparent placeholder-gray-200/80 outline-none text-sm w-full h-full" required />
                </div>

                <div className="flex items-center mt-6 w-full bg-transparent border border-white h-12 rounded-full overflow-hidden pl-6 gap-2">
                    <Lock className='size-5' />
                    <input onChange={onChangeHandle} value={signUpData.password} type="password" placeholder="Password" name='password' className="bg-transparent placeholder-gray-200/80 outline-none text-sm w-full h-full" required />
                </div>

                <button type="submit" className="mt-8 w-full h-11 rounded-full text-white bg-gradient-to-tr from-pink-500 via-orange-500 to-blue-500 hover:opacity-90 transition-opacity cursor-pointer">
                    Login
                </button>

                <Link to="/" className='btn glass w-full mt-6 text-center'>
                    Go Back
                </Link>
                <p className="text-sm mt-4">Don’t have an account? <Link className="text-indigo-400 hover:underline" to="/auth/signin">Sign in</Link></p>
            </form>
        </div>
    )
}

export default Signup