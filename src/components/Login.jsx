/* eslint-disable */

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";
import { motion } from "framer-motion";
import Spinner from "./spinner";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert("Login Gagal: ", error.message);
      return;
    }

    const userId = data.user.id;
    const { data: profiles, error: profileError } = await supabase
      .from("profiles")
      .select("full_name")
      .eq("id", userId)
      .limit(1);

    if (profileError || !profiles || profiles.length === 0) {
      alert("Gagal Mengambil Profil");
      console.log(data.user.id);
      console.log(
        "profile error: ",
        profileError?.message || "data tidak ditemukan"
      );
      return;
    }

    if (!profiles || profiles.length === 0) {
      console.log("Data Profil kosong", userId);
      return;
    }

    const fullname = profiles[0].full_name;
    setFullName(fullname);
    setLoading(false);
    setTimeout(() => {
      navigate("/");
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
            Welcome Back!
          </h1>
          <p className="text-sm font-light text-gray-500">
            We missed you pleased enter your details
          </p>
        </div>
        {/* Input section */}
        <div className="mt-5 flex flex-col items-center">
          <form onSubmit={handleLogin}>
            <div className="flex flex-col min-w-md p-2">
              <label>Email</label>
              <input
                type="text"
                className="border outline-none max-w-lg border-gray-300 rounded-2xl p-3"
                placeholder="Enter Your Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col min-w-md p-2">
              <label>Password</label>
              <input
                type="password"
                className="border outline-none max-w-lg border-gray-300 rounded-2xl p-3"
                placeholder="Enter Your Email"
                onChange={(e) => setPassword(e.target.value)}
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
                {loading ? <Spinner /> : "Log In"} 
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
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Login;
