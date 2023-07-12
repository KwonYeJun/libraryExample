import { useMotionValue, useTransform } from "framer-motion"
import { motion } from "framer-motion-3d"

export function Box() {
  const x = useMotionValue(0)
  const scaleZ = useTransform(x, v => v / 100)
  
  return (
    <motion.mesh
      position-x={x}
      scale={[1, 1, scaleZ]}
      animate={{ x: 100 }} 
    />
  )
}