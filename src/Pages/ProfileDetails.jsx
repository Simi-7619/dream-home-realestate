import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const ProfileDetails = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            <img src={user.photoUrl} alt="" />
            <h2>User Name: {user.displayName}</h2>
            <p>User Email: {user.email}</p>
            <p>Last Login at: {user.lastLoginAt}</p>
        </div>
    );
};

export default ProfileDetails;