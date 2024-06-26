import { useContext } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../Providers/AuthProvider";
import { getAuth, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";



const UpdateProfile = () => {
    const {user} = useContext(AuthContext)
    const auth = getAuth(app)
    const navigate = useNavigate()


    //  updte profile
    const handelUpdate = e =>{
        e.preventDefault();
        const name = e.target.name.value
        const email = e.target.email.value
        const photo = e.target.photo.value

        updateProfile(auth.currentUser, {
            displayName: name,
            email: email,
            photoURL: photo
        })
            .then(()=> {
                toast.success('Profile Updated Successfully')
                navigate('/')

             } )
    }
    return (
        <>
            <Helmet>
                <title>Dream Home | Profile Update</title>
            </Helmet>
            <div className="my-12">
                <h2 className="text-3xl font-bold text-center">Update Your Profile Info</h2>
                <form className="card-body w-[90%] lg:w-[40%] mx-auto" onSubmit={handelUpdate}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" defaultValue={user.displayName} name="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" defaultValue={user.email} name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input type="text" defaultValue={user.photoURL} name="photo" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-logoGreen hover:bg-green-600 text-white text-xl">Update</button>
                    </div>
                </form>
                <p className="text-center">Already have an account? <a href="/login" className="text-logoGreen font-bold underline">Login</a></p>
            </div>
        </>
    );
};

export default UpdateProfile;