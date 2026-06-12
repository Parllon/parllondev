// src/components/ui/Reveal/Reveal.jsx
import { motion } from "motion/react";

const OFFSET = {
  up: { y: 32 },
  down: { y: -32 },
  left: { x: 32 },
  right: { x: -32 },
  none: {},
};

export default function Reveal({
  children,
  delay = 0,
  direction = "up",
  duration = 0.6,
  once = true,
  className,
}) {
  const offset = OFFSET[direction] ?? OFFSET.up;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
