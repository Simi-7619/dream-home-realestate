import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast from 'react-hot-toast';
import { AuthContext } from "../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import { getAuth, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";
import { Helmet } from "react-helmet";


const Register = () => {
    const auth = getAuth(app)
    const { createUser } = useContext(AuthContext)
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()
    const handelRegister = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password')

        // password regex
        if (password.length < 6) {
            return toast.error('Password Must be 6 charecter or longer')
        }
        else if (!/[A-Z]/.test(password)) {
            return toast.error('Your password Should Have at least one UpperCase letter')
        }
        else if (!/[a-z]/.test(password)) {
            return toast.error('Your password Should Have at least one LowerCase letter')
        }

        createUser(email, password)
            .then(result => {

                toast.success('You have registered Successfully')

                // update user's profile
                updateProfile(auth.currentUser, {
                    displayName: name,
                    photoURL: photo,
                    password: password
                })
                    .then()
                    .catch(error => console.log(error.message, 'update error'))

                console.log(result.user)

                e.target.reset()
                navigate('/')
            })
            .catch(error => {
                toast.error(error.message)
            })

        // console.log(name, photo, email, password)
    }
    return (
        <>
            <Helmet>
                <title>Dream Home | Register</title>
            </Helmet>

            <div className="my-12">
                <h2 className="text-3xl font-bold text-center">Register Now</h2>
                <form className="card-body w-[90%] lg:w-[40%] mx-auto" onSubmit={handelRegister}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Your Name" name="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Email address" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input type="text" placeholder="Your profile Photo url" name="photo" className="input input-bordered" required />
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
                    </div>
                    <div className="flex gap-2 items-center mt-2">
                        <input type="checkbox" checked name="terms" id="terms" />
                        <label htmlFor="terms">Except our <a className="text-logoGreen">Tems and Conditions</a></label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-logoGreen hover:bg-green-600 text-white text-xl">Register</button>
                    </div>
                </form>
                <p className="text-center">Already have an account? <a href="/login" className="text-logoGreen font-bold underline">Login</a></p>
            </div>
        </>
    );
};

export default Register;