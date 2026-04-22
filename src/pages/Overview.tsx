import { motion } from "motion/react";
import { Plus } from "lucide-react";
import { useTask } from "../context/TaskContext";
import { OverviewHeader, OverviewBody } from "../components/overview";
export default function Overview() {
  const { openModal } = useTask();
  return (
    <div className="flex-1 flex flex-col min-h-screen">
      <OverviewHeader />

      <main className="flex-1 flex items-center justify-center p-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-xl w-full text-center space-y-8"
        >
          <OverviewBody />
          <div className="pt-4">
            <button
              onClick={openModal}
              className="inline-flex items-center gap-2 px-8 py-4 glass-gradient text-white rounded-full font-semibold text-lg shadow-lg shadow-[#005bbf]/20 hover:shadow-xl hover:shadow-[#005bbf]/30 active:scale-95 transition-all group"
            >
              <Plus
                className="group-hover:rotate-90 transition-transform duration-300"
                size={24}
              />
              <span>Create Task</span>
            </button>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
