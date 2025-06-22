/* eslint-disable */

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      className="container mx-auto p-4 mt-3 md:flex md:items-center justify-between"
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="text-center"
      >
        <Link to={"/"}>
          <h1 className="text-xl font-extrabold leading-none tracking-tight text-primary-text md:text-md lg:text-lg">
            AI Study Assistant
          </h1>
        </Link>
      </motion.div>
      <div className="flex items-center justify-center gap-2 mt-2">
        <Link to={"/login"}>
          <motion.button
            className="bg-primary-text text-white hover:bg-transparent hover:text-primary-text border font-medium px-4 py-2 rounded-xl text-sm transition cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Log In
          </motion.button>
        </Link>
        <motion.button
          className="text-black hover:bg-primary-text hover:text-white border font-medium px-4 py-2 rounded-xl text-sm transition cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
        >
          Register
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
