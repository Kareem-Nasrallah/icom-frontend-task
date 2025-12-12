"use client";

import { motion } from "framer-motion";
import React from "react";

const FadeSlideIn = ({
  duration,
  children,
}: {
  duration?: number;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: duration ?? 0.7, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default FadeSlideIn;
