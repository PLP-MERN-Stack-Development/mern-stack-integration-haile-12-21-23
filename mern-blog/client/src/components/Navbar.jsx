import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";
export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  return (
    <nav bg-white shadow mb-6>
      <div className="container mx-auto px-4 py-3 flex justify-between ">
        <Link to={"/"} className="font-bold text-xl tet-blue-600">
          MyBlog
        </Link>
        {user ? (
          <>
            <span className="text-gray-600">Hi ,{user.name}</span>
            <button
              onClick={logout}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to={"/login"} className="hover:text-blue-600">
              Login
            </Link>
            <Link to={"/register"} className="hover:text-blue-600">
              Register
            </Link>
          </>
        )}
        <div className="space-x-4">
          <Link to={"/"}>Home</Link>
          <Link to={"/create"}>Create</Link>
        </div>
      </div>
    </nav>
  );
}
