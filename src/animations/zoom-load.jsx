import { motion } from 'framer-motion'

export default function ZoomInOnScroll({ children, delay = 0 }) {
  // zoom element in on initial scroll
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1, ease: 'easeOut', delay }}
      viewport={{ once: true, amount: 0.3 }}
      style={{ display: 'inline-block' }}
    >
      {children}
    </motion.div>
  )
}
