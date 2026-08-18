"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { pushToDataLayer } from "@/lib/analytics";

export default function StickyMobileConversionFooter() {
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    const handleViewportScroll = () => setIsFooterVisible(window.scrollY > 450);
    window.addEventListener("scroll", handleViewportScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleViewportScroll);
  }, []);

  const handleClick = () => {
    pushToDataLayer("click_to_whatsapp", {
      location: "mobile_sticky_footer"
    });
  };

  return (
    <AnimatePresence>
      {isFooterVisible && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          transition={{ type: "spring", stiffness: 260, damping: 25 }}
          className="fixed bottom-0 left-0 right-0 z-[60] p-4 bg-pactual-ice/95 backdrop-blur-md border-t border-pactual-slate/20 shadow-[0_-10px_15px_-3px_rgba(0,0,0,0.15)] md:hidden"
        >
          <Link
            href="#cota-agora"
            onClick={handleClick}
            className="flex items-center justify-center w-full py-4 px-4 rounded-xl text-base font-extrabold text-white bg-pactual-blue active:scale-95 transition-transform shadow-md"
          >
            Fazer Cotação Gratuita Agora
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
