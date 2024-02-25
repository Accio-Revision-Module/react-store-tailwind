import { Link, useNavigate } from "react-router-dom"
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "../../firebaseConfig";
import Loading from "./Loading";
import Error from "./Error";
import { signOut } from "firebase/auth";

const leftRoutes = [
    {
        path: "/",
        label: "Home",
    },
    {
        path: "/about",
        label: "About",
    },
    {
        path: "/cart",
        label: "Cart",
    },
]

function Navbar() {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    if(loading) {
        return <Loading />
    }

    if(error) {
        return <Error e={error.toString()} />
    }

    const rightRoutes = user ? [
        {
            path: "/profile",
            label: "Profile",
        }
    ] :  [
        {
            path: "/login",
            label: "Login",
        }
    ]  
    
    const handleLogout = async () => {
        await signOut(auth);
        navigate("/login");
    }

  return (
    <div className="text-lg p-4 flex justify-between items-center w-full font-semibold">
        <div className="flex gap-4 items-center">
            {leftRoutes.map((e) => (
                <Link key={e.path} className="hover:text-gray-500 transition" to={e.path}>{e.label}</Link>
            ))}
        </div>
        <div className="flex gap-4 items-center">
            {rightRoutes.map((e) => (
                <Link key={e.path} className="hover:text-gray-500 transition" to={e.path}>{e.label}</Link>
            ))}
            {user && (
                <button onClick={handleLogout} className="bg-red-500 hover:bg-transparent text-white hover:text-red-500 p-2 rounded cursor-pointer border-red-500 border-2 transition">Logout</button>
            )}
        </div>
    </div>
  )
}

export default Navbar