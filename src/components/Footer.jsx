/* eslint-disable */

import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      className="relative top-[750px] md:top-[900px] lg:top-[750px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      <div className="w-full mx-auto max-w-screen-xl p-4">
        <div className="text-sm text-primary-text text-center">
          This Web Created By
          <a
            href="https://www.instagram.com/afriandyz"
            className="hover:underline"
          >
            {" "}
            Afriandy 😎
          </a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
