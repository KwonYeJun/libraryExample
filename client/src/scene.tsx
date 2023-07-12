import { motion } from "framer-motion-3d"
import { Canvas } from "@react-three/fiber";

interface SceneProps {
isHovered: boolean;
}

export function Scene({ isHovered }: SceneProps) {
return (
<Canvas>
<motion.group animate={isHovered ? "hover" : "rest"}>
<motion.mesh variants={{ hover: { z: 1 } }} />
</motion.group>
</Canvas>
);
}