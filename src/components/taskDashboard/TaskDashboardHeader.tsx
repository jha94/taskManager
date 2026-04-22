import { Plus } from "lucide-react";
const TaskDashboardHeader = (props) => {
  const { openModal } = props;
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between py-8 gap-4">
      <div>
        <p className="text-[#005bbf] font-bold text-sm tracking-widest uppercase mb-1">
          Overview
        </p>
        <h2 className="text-4xl font-extrabold text-[#191c1d] tracking-tight">
          My Tasks
        </h2>
      </div>
      <button
        onClick={openModal}
        className="px-6 py-3 glass-gradient text-white font-bold rounded-full shadow-lg shadow-[#005bbf]/20 hover:scale-[1.02] transition-transform flex items-center gap-2"
      >
        <Plus size={20} />
        Create Task
      </button>
    </div>
  );
};

export default TaskDashboardHeader;
