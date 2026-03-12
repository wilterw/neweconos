"use client";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

const variants = {
  initial: { scaleY: 1, transformOrigin: "top" },
  animate: { scaleY: 0, transformOrigin: "top", transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } },
  exit:    { scaleY: 1, transformOrigin: "bottom", transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] } },
};

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <>
      <AnimatePresence mode="wait">
        {/* Overlay curtain — sube/baja al cambiar de ruta */}
        <motion.div
          key={pathname + "-curtain"}
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
            background: "#000",
            zIndex: 9999,
            transformOrigin: "top",
            pointerEvents: "none",
          }}
        />
      </AnimatePresence>

      {/* Contenido de la página con fade sutil */}
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.4, delay: 0.3 } }}
          exit={{ opacity: 0, transition: { duration: 0.2 } }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
