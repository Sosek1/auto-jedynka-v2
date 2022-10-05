export const scaleVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
};

export const fadeVariant = {
  visible: { opacity: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0 },
};

export const slideBottomVariant = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hidden: { opacity: 0, y: "60%" },
};

export const slideRightVariant = {
  visible: { opacity: 1, x: 0, transition: { duration: 0.3, delay: 0.3 } },
  hidden: { opacity: 0, x: "30%" },
};
export const slideLeftVariant = {
  visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  hidden: { opacity: 0, x: "-30%" },
};
