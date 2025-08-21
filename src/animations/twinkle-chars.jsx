import { motion } from 'framer-motion'

export default function Twinkle({ children, stagger = 1 }) {
  // "twinkle" a string of characters
  const characters = children.split('')
  
  return (
    <>
      {characters.map((char, index) => (
        <motion.span
          key={index}
          animate={{ opacity: [0.1, 0.9, 0.1] }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: index * stagger
          }}
        >
          {char}
        </motion.span>
      ))}
    </>
  )
}