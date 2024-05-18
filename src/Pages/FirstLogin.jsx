import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const FirstLogin = () => {
    const [showPassword, setShowPassword] = useState(false)

    const handelFirstLogin = e=>{
        e.preventDefault()
    }

    return (
        <div className="my-12">
            <h2 className="text-3xl font-bold text-center">Login Now</h2>
            <form className="card-body w-[90%] lg:w-[40%] mx-auto" onSubmit={handelFirstLogin}>
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
                        <button className="btn bg-blue-600 hover:bg-blue-500 text-white text-xl">Login</button>
                    </div>
                </div>
            </form >
            <p className="text-center">New to Dream Home? <a href="/register" className="text-red-500 font-bold underline">Register</a></p>


        </div >
    )
};

export default FirstLogin;