"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function IntroAnimation({ onComplete }) {
  const [stage, setStage] = useState("writing"); // "writing", "zooming", "done"

  useEffect(() => {
    // Stage 1: Writing (0 to 2.5 seconds)
    // Stage 2: Zooming (2.5 to 4 seconds)
    const zoomTimer = setTimeout(() => setStage("zooming"), 2500);
    const doneTimer = setTimeout(() => {
      setStage("done");
      if (onComplete) onComplete();
    }, 4500);

    return () => {
      clearTimeout(zoomTimer);
      clearTimeout(doneTimer);
    };
  }, [onComplete]);

  if (stage === "done") return null;

  return (
    <AnimatePresence>
      {stage !== "done" && (
        <motion.div
          key="intro-screen"
          className="fixed inset-0 z-[999999] flex items-center justify-center bg-[#050505] overflow-hidden"
          initial={{ opacity: 1 }}
          animate={{ opacity: stage === "zooming" ? 0 : 1 }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
          exit={{ opacity: 0 }}
        >
          {/* We scale this container up massively to zoom into the space */}
          <motion.div
            className="flex items-center justify-center w-full px-8 md:px-24"
            initial={{ scale: 1 }}
            animate={{ scale: stage === "zooming" ? 150 : 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            style={{ transformOrigin: "center center" }}
          >
            {/* The Text Reveal / Calligraphy effect using the SVG */}
            <motion.img
              src="/Anvit_Verma_Sign.svg"
              alt="Anvit Verma Signature"
              className="w-full max-w-4xl object-contain invert brightness-200" // invert makes dark grey to white
              initial={{ clipPath: "inset(0 100% 0 0)" }} // hidden on the right
              animate={{ clipPath: "inset(0 0% 0 0)" }} // revealed
              transition={{ duration: 2, ease: "easeInOut", delay: 0.2 }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
