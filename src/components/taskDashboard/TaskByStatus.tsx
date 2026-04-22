import { motion } from "motion/react";
const TaskByStatus = (props) => {
  const { stats } = props;
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className={`bg-white p-6 rounded-xl ghost-border flex items-center justify-between shadow-sm ${stat.border || ""}`}
        >
          <div>
            <p className="text-[#414754] text-sm font-medium mb-1">
              {stat.label}
            </p>
            <h3 className="text-3xl font-black text-[#191c1d]">{stat.value}</h3>
          </div>
          <div
            className={`w-12 h-12 rounded-full ${stat.bg} flex items-center justify-center ${stat.color}`}
          >
            <stat.icon size={24} />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default TaskByStatus;
