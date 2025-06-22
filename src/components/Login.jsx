/* eslint-disable */

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Login = () => {
  return (
    <motion.div
      className="container mx-auto mt-5 h-[90vh] flex items-center justify-center"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="bg-white min-w-xl p-4 rounded-2xl shadow-xs scale-85 md:scale-100">
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-2xl text-primary-text">
            Welcome Back!
          </h1>
          <p className="text-sm font-light text-gray-500">
            We missed you pleased enter your details
          </p>
        </div>
        {/* Input section */}
        <div className="mt-5 flex flex-col items-center">
          <div className="flex flex-col min-w-md p-2">
            <label>Email</label>
            <input
              type="text"
              className="border outline-none max-w-lg border-gray-300 rounded-2xl p-3"
              placeholder="Enter Your Email"
            />
          </div>
          <div className="flex flex-col min-w-md p-2">
            <label>Password</label>
            <input
              type="password"
              className="border outline-none max-w-lg border-gray-300 rounded-2xl p-3"
              placeholder="Enter Your Email"
            />
          </div>
          <div className="min-w-md text-right">
            <a
              href="#"
              className="text-sm text-primary-text underline underline-offset-1"
            >
              Forgot Pasword ?
            </a>
          </div>
          <div className="mt-2">
            <button className="bg-primary-text text-white hover:bg-transparent hover:text-primary-text border font-medium px-4 py-2 rounded-xl text-sm transition cursor-pointer min-w-md">
              Log In
            </button>
          </div>
          <div className="mt-5">
            <p className="text-gray-500 text-sm">
              Don't Have An Account ?{" "}
              <Link
                to={"/register"}
                className="text-primary-text underline underline-offset-2"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Login;
