import { motion } from "motion/react";
const OverviewHeader = () => {
  return (
    <header className="px-8 pt-5 pb-6 max-w-6xl w-full mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-1"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#191c1d] tracking-tight">
          Task Manager
        </h1>
      </motion.div>
    </header>
  );
};

export default OverviewHeader;
