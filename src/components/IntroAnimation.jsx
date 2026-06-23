"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function IntroAnimation({ onComplete }) {
  const [stage, setStage] = useState("showing"); // "showing", "fading", "done"

  useEffect(() => {
    // Show the text for 1.5 seconds, then trigger the fade out animation
    const fadeTimer = setTimeout(() => setStage("fading"), 1500);
    
    // Total animation time before unmounting
    const doneTimer = setTimeout(() => {
      setStage("done");
      if (onComplete) onComplete();
    }, 2500);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(doneTimer);
    };
  }, [onComplete]);

  if (stage === "done") return null;

  return (
    <AnimatePresence>
      {stage !== "done" && (
        <motion.div
          key="intro-screen"
          className="fixed inset-0 z-[999999] flex flex-col items-center justify-center bg-[#050505] overflow-hidden pointer-events-none"
          initial={{ opacity: 1 }}
          animate={{ opacity: stage === "fading" ? 0 : 1 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
          exit={{ opacity: 0 }}
        >
          <div className="flex flex-row items-center justify-center space-x-3 md:space-x-4 font-sans text-white w-screen h-screen">
            {/* "Anvit Verma" fades away down */}
            <motion.div
              initial={{ y: 0, opacity: 0 }}
              animate={{ 
                y: stage === "fading" ? 40 : 0, 
                opacity: stage === "fading" ? 0 : 1 
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="text-3xl md:text-5xl lg:text-6xl font-normal tracking-wide"
            >
              Anvit Verma
            </motion.div>
            
            {/* "Portfolio" fades away up */}
            <motion.div
              initial={{ y: 0, opacity: 0 }}
              animate={{ 
                y: stage === "fading" ? -40 : 0, 
                opacity: stage === "fading" ? 0 : 1 
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="text-3xl md:text-5xl lg:text-6xl font-thin tracking-wide"
            >
              Portfolio
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
