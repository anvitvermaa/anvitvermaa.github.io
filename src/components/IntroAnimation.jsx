"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function IntroAnimation({ onComplete }) {
  const [stage, setStage] = useState("showing"); // "showing", "fading", "crt-collapse-y", "crt-collapse-x", "done"

  useEffect(() => {
    // Show the text for 1.5 seconds, then trigger the fade out animation
    const fadeTimer = setTimeout(() => setStage("fading"), 1500);
    
    // Trigger CRT collapse vertically
    const crtYTimer = setTimeout(() => setStage("crt-collapse-y"), 2500);
    
    // Trigger CRT collapse horizontally
    const crtXTimer = setTimeout(() => setStage("crt-collapse-x"), 2800);

    // Total animation time before unmounting
    const doneTimer = setTimeout(() => {
      setStage("done");
      if (onComplete) onComplete();
    }, 3100);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(crtYTimer);
      clearTimeout(crtXTimer);
      clearTimeout(doneTimer);
    };
  }, [onComplete]);

  if (stage === "done") return null;

  return (
    <AnimatePresence>
      {stage !== "done" && (
        <motion.div
          key="intro-screen"
          className="fixed z-[999999] flex flex-row items-center justify-center overflow-hidden pointer-events-none"
          initial={{ height: "100vh", width: "100vw", backgroundColor: "#050505", opacity: 1 }}
          animate={{ 
            height: stage === "crt-collapse-y" || stage === "crt-collapse-x" ? "2px" : "100vh",
            width: stage === "crt-collapse-x" ? "0vw" : "100vw",
            backgroundColor: stage === "crt-collapse-y" || stage === "crt-collapse-x" ? "#ffffff" : "#050505",
            opacity: stage === "crt-collapse-x" ? 0 : 1
          }}
          transition={{ 
            height: { duration: 0.25, ease: "circIn" },
            width: { duration: 0.25, ease: "circOut" },
            backgroundColor: { duration: 0.05 },
            opacity: { duration: 0.2, delay: 0.1 }
          }}
          style={{ top: "50%", left: "50%", x: "-50%", y: "-50%", originY: 0.5, originX: 0.5 }}
        >
          {/* We only render the text in the showing and fading stages */}
          {(stage === "showing" || stage === "fading") && (
            <div className="flex flex-row items-center justify-center w-full h-full text-white overflow-hidden">
              {/* "Anvit Verma" fades away down */}
              <motion.div
                initial={{ y: 0, opacity: 0 }}
                animate={{ 
                  y: stage === "fading" ? 100 : 0, 
                  opacity: stage === "fading" ? 0 : 1 
                }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="text-[3rem] md:text-[5rem] lg:text-[7rem] font-medium tracking-wide mr-4 md:mr-8 scale-y-125 origin-bottom"
              >
                Anvit Verma
              </motion.div>
              
              {/* "Portfolio" fades away up */}
              <motion.div
                initial={{ y: 0, opacity: 0 }}
                animate={{ 
                  y: stage === "fading" ? -100 : 0, 
                  opacity: stage === "fading" ? 0 : 1 
                }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="text-[3rem] md:text-[5rem] lg:text-[7rem] font-thin tracking-wide ml-4 md:ml-8 scale-y-125 origin-bottom text-gray-300"
              >
                Portfolio
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
