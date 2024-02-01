import { useLogin } from "../hooks/useLogin";

const ProfilePage = () => {
    const username = useLogin();
    return (
        <div>
            {
                username && 
                <h1>{username}</h1>
            }
        </div>
    )
} 

export default ProfilePage;