/* eslint-disable */

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { supabase } from "../lib/supabase";

import Spinner from "./spinner";

const Register = () => {
  const [email, setEmail] = useState("");
  const [fullname, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState(null);
  const [succesMsg, setSuccesMsg] = useState(null);
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setErrorMsg(null);
    setSuccesMsg(null);
    setLoading(true)

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setErrorMsg(`Gagal Daftar: ${error.message}`);
      return;
    }

    if (data?.user) {
      const { error: profileError } = await supabase.from("profiles").insert([
        {
          id: data.user.id,
          full_name: fullname,
        },
      ]);
      if (profileError) {
        setErrorMsg(`Gagal Simpan Profil: ${profileError.message}`);
        return;
      }
    }

    setSuccesMsg("Registrasi Berhasil! Silahkan Login.");
    setLoading(false)
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };

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
            Create your account to continue
          </h1>
          <p className="text-sm font-light text-gray-500">
            Quick and easy setup, get started in minutes.
          </p>
        </div>
        {/* Input section */}
        <div className="mt-5 flex flex-col items-center">
          <form onSubmit={handleRegister}>
            <div className="flex flex-col min-w-md p-2">
              <label>Full Name</label>
              <input
                type="text"
                className="border outline-none max-w-lg border-gray-300 rounded-2xl p-3"
                placeholder="Enter Full Name"
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col min-w-md p-2">
              <label>Email</label>
              <input
                type="text"
                className="border outline-none max-w-lg border-gray-300 rounded-2xl p-3"
                placeholder="Enter Your Email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col min-w-md p-2">
              <label>Password</label>
              <input
                type="password"
                className="border outline-none max-w-lg border-gray-300 rounded-2xl p-3"
                placeholder="Enter Password"
                onChange={(e) => setPassword(e.target.value)}
                required
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
              <button
                type="submit"
                className="bg-primary-text text-white hover:bg-transparent hover:text-primary-text border font-medium px-4 py-2 rounded-xl text-sm transition cursor-pointer min-w-md"
              >
                {loading ? <Spinner /> : "Sign Up"}
              </button>
            </div>
          </form>
          <div className="mt-5">
            <p className="text-gray-500 text-sm">
              Already Have An Account ?{" "}
              <Link
                to={"/login"}
                className="text-primary-text underline underline-offset-2"
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Register;
