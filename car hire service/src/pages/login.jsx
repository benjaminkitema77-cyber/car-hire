import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";

function Login() {
  return (
    <>
      <Navbar />

      <main className="bg-slate-100 min-h-screen flex justify-center items-center px-6 py-12">

        <div className="bg-white w-full max-w-md p-8 rounded-xl shadow-md">

          <h1 className="text-3xl font-bold text-center mb-2">
            Welcome Back
          </h1>

          <p className="text-gray-500 text-center mb-8">
            Login to your DriveEasy account
          </p>

          <form>

            <div className="mb-5">
              <label className="block mb-2 font-medium">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg p-3"
              />
            </div>

            <div className="mb-6">
              <label className="block mb-2 font-medium">
                Password
              </label>

              <input
                type="password"
                placeholder="Enter your password"
                className="w-full border border-gray-300 rounded-lg p-3"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold"
            >
              Login
            </button>

          </form>

          <p className="text-center text-gray-600 mt-6">
            Don't have an account?{" "}
            <Link to="/register" className="text-orange-500 font-semibold">
              Register
            </Link>
          </p>

        </div>

      </main>

      <Footer />
    </>
  );
}

export default Login;