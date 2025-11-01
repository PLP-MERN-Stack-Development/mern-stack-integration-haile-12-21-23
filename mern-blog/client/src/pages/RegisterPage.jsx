import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { registerUser } from "../services/userService";

export default function RegisterPage() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      await registerUser(data);
      navigate("/login");
    } catch (error) {
      alert("Registration Failed");
      console.log("Error occurred:", error.message);
    }
  };

  return (
    <div className=" mx-w-md mx-auto bg-white p-6 shadow rounded">
      <h2 className="text-xl font-bold mb-4">Register</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
        <input
          {...register("name")}
          placeholder="Name"
          className="w-full border p-2 rounded text-white"
        />
        <input
          {...register("email")}
          type="email"
          placeholder="Email"
          className="w-full border p-2 rounded text-white"
        />
        <input
          {...register("password")}
          placeholder="password"
          type="password"
          className="w-full border p-2 rounded text-white"
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded "
        >
          Register
        </button>
      </form>
      <p>
        Already have an account?{""}
        <Link to={"/login"} className="text-blue-600 underline">
          Login
        </Link>
      </p>
    </div>
  );
}
