import { useState } from 'react';
import { motion } from 'framer-motion';

interface ToggleContentProps {
  header: string;
  content: JSX.Element;
}

const ToggleContent: React.FC<ToggleContentProps> = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <motion.div
      layout
      onClick={() => setIsOpen(!isOpen)}
    >
      <motion.h2 layout></motion.h2>
      {isOpen ? 'test' : null}
    </motion.div>
  );
};

export default ToggleContent;
