import { Link } from "react-router-dom"

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

const rightRoutes = [
    {
        path: "/login",
        label: "Login",
    }
]

function Navbar() {
  return (
    <div className="text-lg p-4 flex justify-between items-center w-full font-semibold">
        <left className="flex gap-4">
            {leftRoutes.map((e) => (
                <Link className="hover:text-gray-500 transition" to={e.path}>{e.label}</Link>
            ))}
        </left>
        <right>
            {rightRoutes.map((e) => (
                <Link className="hover:text-gray-500 transition" to={e.path}>{e.label}</Link>
            ))}
        </right>
    </div>
  )
}

export default Navbar