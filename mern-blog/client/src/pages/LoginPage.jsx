import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../services/userService";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";

export default function LoginPage() {
  const { register, handleSubmit } = useForm();
  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const res = await login(data);
      loginUser(res.data.token);
      navigate("/");
    } catch (error) {
      alert("Invalid credentials.");
      console.log("Error occurred:", error);
    }
  };

  return (
    <div className="mx-w-md mx-auto bg-white p-6 shadow rounded">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
        <input
          {...register("email")}
          type="email"
          placeholder="Email"
          className="w-full border p-2 rounded text-white"
        />
        <input
          {...register("password")}
          type="password"
          placeholder="Password"
          className="w-full border p-2 rounded text-white"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded w-full"
        >
          Login
        </button>
      </form>
      <p className="text-center mt-3">
        Don't have an account?{""}
        <Link to={"/register"} className="text-blue-600 underline">
          Register
        </Link>
      </p>
    </div>
  );
}
