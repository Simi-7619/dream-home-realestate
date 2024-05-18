import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const ProfileDetails = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className="xl:w-1/3 md:w-1/2 w-[90%] text-center mx-auto bg-gray-100 rounded-3xl p-6 md:p-12 space-y-4 my-12 ">
            <div className="avatar online">
                <div className="w-48 rounded-full border border-green-300">
                <img src={user.photoURL} className="w-[200px] block mx-auto  rounded-2xl" alt="" />
                </div>
            </div>
            <h2 className="text-2xl font-medium">Name: {user.displayName}</h2>
            <p className="text-xl font-medium">Email Address: {user.email}</p>
            <p className="font-medium">(Last Login at: {user?.reloadUserInfo?.lastLoginAt})</p>
        </div>
    );
};

export default ProfileDetails;