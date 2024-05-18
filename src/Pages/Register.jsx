import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false)
    const handelRegister = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password')
        console.log(name, photo, email, password)
    }
    return (
        <div className="my-12">
            <h2 className="text-3xl font-bold text-center">Register Now</h2>
            <form className="card-body w-[90%] lg:w-1/2 mx-auto" onSubmit={handelRegister}>
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
                    <input type="checkbox" name="terms" id="terms" />
                    <label htmlFor="terms">Except our <a className="text-blue-500">Tems and Conditions</a></label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn bg-logoGreen text-white text-xl">Register</button>
                </div>
            </form>
            <p className="text-center">Already have an account? <a href="/login" className="text-blue-500 underline">Login</a></p>
        </div>
    );
};

export default Register;