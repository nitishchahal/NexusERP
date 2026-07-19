import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

import type { ModalProps } from "./modal.types";
import type { MouseEvent } from "react";
import { modalSizes } from "./modal.styles";


const Modal = ({
  open,
  onClose,
  children,
  size = "md",
  closeOnBackdrop = true,
}: ModalProps) => {
  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => {
            if (closeOnBackdrop) {
              onClose();
            }
          }}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            className={`
              w-full
              rounded-xl
              bg-white
              shadow-2xl
              ${modalSizes[size]}
            `}
            initial={{
              opacity: 0,
              y: 40,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 40,
              scale: 0.96,
            }}
            transition={{
              duration: 0.2,
            }}
            onClick={(e: MouseEvent<HTMLDivElement>) => {
                e.stopPropagation();
              }}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;