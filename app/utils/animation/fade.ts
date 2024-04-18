import { MotionProps, delay } from "framer-motion";

export const FADE_IN: MotionProps = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { duration: 1.4 }
}

export const menuDropdown = {
    open: {
        scale: 1,
        transition: {
          type: "spring",
          duration: 0.4,
          delayChildren: 0.2,
          staggerChildren: 0.05,
        },
      },
    closed: {
        scale: 0,
        transition: {
          delay: 0.15,
        },
      },
}