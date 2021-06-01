export const pageAnimation = {
  show: {
    opacity: 1,
    transition: {
      duration: 0.7,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
  hide: { opacity: 0 },
  exit: {
    scale: 1.25,
    opacity: 0,
    transition: { duration: 0.2 },
  },
}
export const WorkpageAnimation = {
  show: {
    opacity: 1,
    transition: {
      duration: 0.7,
      when: "beforeChildren",
      staggerChildren: 0.18,
      delay: 1.5,
    },
  },
  hide: {},
  exit: {
    scale: 1.3,
    opacity: 0,
    transition: { duration: 0.5 },
  },
}
export const workPageStaggerDiv = {
  show: {
    opacity: 1,
    transition: {
      ease: "easeOut",
      staggerChildren: 0.18,
    },
  },
  hide: { opacity: 1 },
}
export const textAnim = {
  show: {
    y: "0%",
    rotate: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  hide: { y: "120%", rotate: 5 },
}
export const imgAnim = {
  show: {
    x: "0%",
    scale: 1,
    opacity: 1,
    rotateY: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  hide: { x: "5%", opacity: 0, scale: 1, rotateY: 10 },
}
export const lineImageAnim = {
  show: {
    width: "100%",
    transition: { duration: 0.4, ease: "easeOut" },
  },
  hide: {
    width: "0%",
    transition: { duration: 0.4, ease: "easeOut" },
  },
}
export const imgAnim2 = {
  show: {
    skew: "0deg",
    scale: 1,
    opacity: 1,
    rotateY: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  hide: { skew: "3deg", opacity: 0, scale: 1 },
}
export const imgContainerAnim = {
  show: {
    opacity: 1,
    transition: {
      ease: "easeOut",
      staggerChildren: 0.4,
    },
  },
  hide: {
    opacity: 1,
  },
}

export const workPageTransition = {
  show: {
    x: "120%",
    skew: "0deg",
    transition: { duration: 1.8 },
  },
  hide: {
    skew: "68deg",
    x: "-160%",
  },
}

export const animCont = {
  show: {
    opacity: 1,
    transition: {
      ease: "easeOut",
      staggerChildren: 0.18,
    },
  },
  hide: {
    opacity: 1,
  },
}
export const fade = {
  show: { opacity: 1 },
  hide: { opacity: 0, transition: { duration: 0.6, ease: "easeOut" } },
}
