import { motion } from "motion/react";
import { Plus } from "lucide-react";
import { useTask } from "@/src/context/TaskContext";
const AddTaskCard = () => {
  const { openModal } = useTask();
  return (
    <motion.button
      onClick={() => openModal()}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      className="group bg-white p-6 rounded-xl ghost-border border-2 border-dashed border-[#c1c6d6]/30 flex flex-col items-center justify-center min-h-[160px] cursor-pointer hover:border-[#005bbf]/50"
    >
      <div className="w-12 h-12 rounded-full bg-[#e7e8e9] flex items-center justify-center text-[#414754] group-hover:bg-[#005bbf] group-hover:text-white transition-all">
        <Plus size={24} />
      </div>
      <p className="mt-3 text-sm font-bold text-[#414754]">Create Task</p>
    </motion.button>
  );
};

export default AddTaskCard;
