import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const FirstLogin = () => {
    const {user, signInUser} = useContext(AuthContext)
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()


    const handelFirstLogin = e=>{
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        // sign in user
        signInUser(email, password)
            .then(result=>{
                console.log(result.user)
                navigate('/')
            })
            .catch(error => {
                console.log(error, 'in the first login page')
            })
    }

    return (
        <div className="my-12">
            <h2 className="text-3xl font-bold text-center">You have A Registered Profile, Please login now</h2>
            <form className="card-body w-[90%] lg:w-[40%] mx-auto" onSubmit={handelFirstLogin}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" defaultValue={user.email} name="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <div className="relative">
                        <input type={
                            showPassword ? "text" : "password"
                        }
                         defaultValue={user.password} name="password" className="input w-full input-bordered" required />
                        <span className="absolute right-2 bottom-3" onClick={() => setShowPassword(!showPassword)}>{
                            showPassword ? <FaEyeSlash className="text-2xl" /> : <FaEye className="text-2xl" />
                        }</span>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-blue-600 hover:bg-blue-500 text-white text-xl">Login</button>
                    </div>
                </div>
            </form >


        </div >
    )
};

export default FirstLogin;