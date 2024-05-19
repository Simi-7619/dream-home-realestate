import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet';


const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    const { signInUser, googleLogin } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    console.log(location)

    // email password auth
    const handelLogin = e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        // sign in user
        signInUser(email, password)
            .then(result => {
                console.log(result.user)
                toast.success('You have logged in Successfully!')
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.log(error.message);
                toast.error('Sorry! Invalid Credential')
            })
    }

    const handelGoogleLogin = () => {
        googleLogin()
            .then(result => {
                console.log(result.user)
                toast.success('You have logged in Successfully')
            })
            .catch(error => toast.error(error.message))
    }



 return (
    <>
        <Helmet>
            <title>Dream Home | Login</title>
        </Helmet>
        <div className="my-12 bg-gray-100 rounded-3xl  w-[90%] lg:w-[40%] mx-auto px-12 py-20">
            <h2 className="text-3xl font-bold text-center">Login Now</h2>
            <form className="card-body" onSubmit={handelLogin}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="Email address" name="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <div className="relative">
                        <input type={
                            showPassword ? "text" : "password"
                        }
                            placeholder="password" name="password" className="input w-full input-bordered" required />
                        <span className="absolute right-2 bottom-3" onClick={() => setShowPassword(!showPassword)}>{
                            showPassword ? <FaEyeSlash className="text-2xl" /> : <FaEye className="text-2xl" />
                        }</span>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-logoGreen hover:bg-green-600 text-white text-xl">Login</button>
                    </div>
                </div>
            </form >
            <div className="w-[90%] lg:w-[85%] mx-auto">
                <div className="relative flex py-5 items-center">
                    <div className="flex-grow border-t border-gray-400"></div>
                    <span className="flex-shrink text-xl mx-4 text-gray-400">or sign in with</span>
                    <div className="flex-grow border-t border-gray-400"></div>
                </div>
            </div>
            {/* social login */}
            <div className="flex flex-col md:flex-row gap-6 justify-center w-[35%] mx-auto">
                <button onClick={handelGoogleLogin} className="btn w-full bg-blue-600 hover:bg-blue-700 text-white text-xl">Google</button>
                <button className="btn w-full bg-gray-600 hover:bg-gray-700 text-white text-xl">Github</button>
            </div>

            <p className="text-center mt-10">New to Dream Home? <a href="/register" className="text-red-500 font-bold underline">Register</a></p>


        </div >
    </>
);
}

export default Login