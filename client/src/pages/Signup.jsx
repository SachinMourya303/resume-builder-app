import { Lock, Mail, User2 } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {

    return (
        <div className='w-full flex items-center justify-center h-screen '>
            <form className="m-2 md:w-110 w-80 flex flex-col items-center justify-center text-white glass p-5 md:p-10 rounded-lg">
                <h2 className="text-4xl font-medium">Sign Up</h2>
                <p className="text-sm mt-3">Welcome to ResumX.</p>

                <div className="flex items-center mt-6 w-full bg-transparent border border-white h-12 rounded-full overflow-hidden pl-6 gap-2">
                    <User2 className='size-5' />
                    <input type="text" placeholder="Name" className="bg-transparent placeholder-gray-200/80 outline-none text-sm w-full h-full" required />
                </div>

                <div className="flex items-center mt-6 w-full bg-transparent border border-white h-12 rounded-full overflow-hidden pl-6 gap-2">
                    <Mail className='size-5' />
                    <input type="email" placeholder="Email id" className="bg-transparent placeholder-gray-200/80 outline-none text-sm w-full h-full" required />
                </div>

                <div className="flex items-center mt-6 w-full bg-transparent border border-white h-12 rounded-full overflow-hidden pl-6 gap-2">
                    <Lock className='size-5' />
                    <input type="password" placeholder="Password" className="bg-transparent placeholder-gray-200/80 outline-none text-sm w-full h-full" required />
                </div>

                <button type="submit" class="mt-8 w-full h-11 rounded-full text-white bg-gradient-to-tr from-pink-500 via-orange-500 to-blue-500 hover:opacity-90 transition-opacity cursor-pointer">
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