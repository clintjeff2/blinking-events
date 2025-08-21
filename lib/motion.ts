'use client';

// Import and re-export directly from framer-motion
import {
  motion,
  AnimatePresence,
  useAnimation,
  useInView,
  useScroll,
  useTransform,
  stagger,
  animate,
  cubicBezier,
  easeIn,
  easeInOut,
  easeOut,
  spring,
} from 'framer-motion';

// Re-export all components and functions
export {
  motion,
  AnimatePresence,
  useAnimation,
  useInView,
  useScroll,
  useTransform,
  stagger,
  animate,
  cubicBezier,
  easeIn,
  easeInOut,
  easeOut,
  spring,
};

// Re-export types
export type { Variant, Variants } from 'framer-motion';

// Common variants for animations
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } }
};

// Letter animation variants
export const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.5,
      ease: easeOut,
    },
  }),
};

// Fade up animation
export const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easeOut,
    },
  },
};

export const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export const staggerChildren = {
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const staggerFast = {
  visible: {
    transition: {
      staggerChildren: 0.06
    }
  }
};

export const staggerSlow = {
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

export const easing = [0.6, -0.05, 0.01, 0.99];

// Animation variants with consistent easing
export const fadeInUp = {
  hidden: { y: 60, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: easing } }
};

export const fadeInDown = {
  hidden: { y: -60, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: easing } }
};

export const fadeInLeft = {
  hidden: { x: -60, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: easing } }
};

export const fadeInRight = {
  hidden: { x: 60, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: easing } }
};

export const scaleUp = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.6, ease: easing } }
};

export const containerAnimation = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    }
  }
};

export const listItemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

// Page transition variants
export const pageVariants = {
  initial: {
    opacity: 0,
    scale: 0.98,
  },
  animate: { // Using 'animate' instead of 'enter' to match convention
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

// Export consolidated animation collections 
export const animations = {
  fadeIn,
  fadeUp,
  fadeInUp,
  fadeInDown,
  fadeInLeft,
  fadeInRight,
  scaleUp,
  staggerChildren,
  staggerFast,
  staggerSlow,
  containerAnimation,
  listItemVariant,
  pageVariants,
  easing
};

export default animations;
