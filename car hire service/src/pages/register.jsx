import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";

function Register() {
  return (
    <>
      <Navbar />

      <main className="bg-slate-100 min-h-screen flex justify-center items-center px-6 py-12">

        <div className="bg-white w-full max-w-md p-8 rounded-xl shadow-md">

          <h1 className="text-3xl font-bold text-center mb-2">
            Create Account
          </h1>

          <p className="text-gray-500 text-center mb-8">
            Join DriveEasy and book your next ride.
          </p>

          <form>

            <div className="mb-5">
              <label className="block mb-2 font-medium">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full border border-gray-300 rounded-lg p-3"
              />
            </div>

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

            <div className="mb-5">
              <label className="block mb-2 font-medium">
                Phone Number
              </label>

              <input
                type="tel"
                placeholder="Enter your phone number"
                className="w-full border border-gray-300 rounded-lg p-3"
              />
            </div>

            <div className="mb-6">
              <label className="block mb-2 font-medium">
                Password
              </label>

              <input
                type="password"
                placeholder="Create a password"
                className="w-full border border-gray-300 rounded-lg