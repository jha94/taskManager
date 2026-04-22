import { motion } from "motion/react";
import { Goal, Target, Edit3, Trash2, Calendar } from "lucide-react";
import { useTask } from "@/src/context/TaskContext";
const TaskCard = (props) => {
  const { task, index } = props;
  const { openModal, deleteTask, updateStatus } = useTask();

  return (
    <motion.div
      key={task.id}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05 }}
      className="group bg-white p-6 rounded-xl ghost-border hover:bg-[#d8e2ff]/5 transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        <div className="flex justify-between items-start mb-4">
          <div className="flex gap-1 group-hover:opacity-100 ">
            {task.status === "completed" ? null : (
              <button
                onClick={() => {
                  openModal(task.id);
                }}
                className="p-1.5 hover:bg-[#edeeef] rounded-lg text-[#414754] transition-colors"
              >
                <Edit3 size={18} />
              </button>
            )}
            <button
              onClick={() => deleteTask(task.id)}
              className="p-1.5 hover:bg-[#ffdad6] hover:text-[#ba1a1a] rounded-lg text-[#414754] transition-colors"
            >
              <Trash2 size={18} />
            </button>
            <button
              onClick={() => updateStatus(task.id)}
              className="p-1.5 hover:bg-[#ffdad6] hover:text-[#ba1a1a] rounded-lg text-[#414754] transition-colors"
            >
              {task.status === "pending" ? <Target size={18} /> : null}
              {task.status === "in-progress" ? <Goal size={18} /> : null}
            </button>
          </div>
        </div>
        <div className="mb-2">
          <h4
            className={`text-lg font-bold text-[#191c1d] leading-tight ${task.status === "completed" ? "line-through opacity-50" : ""}`}
          >
            {task.title}
          </h4>
        </div>
        <p
          className={`text-[#414754] text-sm mb-6 line-clamp-2 ${task.status === "completed" ? "opacity-50" : ""}`}
        >
          {task.description}
        </p>
      </div>
      <div className="flex items-center justify-between pt-4 border-t border-[#c1c6d6]/10">
        <div className="flex items-center gap-2 text-[#414754]">
          <Calendar size={16} />
          <span className="text-xs font-semibold">{task.dueDate}</span>
        </div>
        <div className="flex items-center gap-2">
          <span
            className={`w-2 h-2 rounded-full ${
              task.status === "completed"
                ? "bg-[#005bbf]"
                : task.status === "in-progress"
                  ? "bg-[#9e4300]"
                  : "bg-[#727785]"
            }`}
          />
          <span
            className={`text-xs font-bold uppercase tracking-tight ${
              task.status === "completed" ? "text-[#005bbf]" : "text-[#191c1d]"
            }`}
          >
            {task?.status?.length && task?.status.replace("-", " ")}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default TaskCard;
