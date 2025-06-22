/* eslint-disable */

import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <section className="container mx-auto mt-16 md:mt-52 mb-10 h-screen] flex flex-col items-center justify-center">
      <div>
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Belajar Cerdas Dengan AI Study Assistant
        </motion.h1>
      </div>
      <div>
        <motion.p
          className="text-center text-lg md:text-xl mt-4 max-w-xl capitalize"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Ubah materi pelajaran jadi flashcard dan kuis interaktif hanya dengan
          satu klik.
        </motion.p>
      </div>
      <motion.div
        className="mt-8 flex gap-4 items-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.9, duration: 0.8, ease: "easeOut" }}
      >
        <Link to={"/register"}>
          <button className="text-black hover:bg-primary-text hover:text-white border font-medium px-6 py-3 rounded-xl text-lg transition cursor-pointer">
            Mulai Sekarang
          </button>
        </Link>
      </motion.div>
      {/* <motion.div
        className="w-full h-[700px] mt-36 rounded-xl shadow-2xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{opacity: 1, y:0}}
        transition={{ delay: 0.5, duration: 0.7 }}
        viewport={{once: true, amount: 0.5}}
      >
        <img
          src="src\assets\image_1.jpg"
          alt="Study"
          className="object-cover w-full h-full rounded-xl"
        />
      </motion.div> */}
    </section>
  );
};

export default LandingPage;
