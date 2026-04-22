const TaskFilter = (props) => {
  const { statusFilter, setStatusFilter, sortBy, setSortBy } = props;
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 mb-8 bg-[#e1e3e4]/30 p-4 rounded-2xl">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-extrabold text-[#414754] uppercase tracking-wider">
            Status:
          </span>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="bg-white border-none text-sm font-bold text-[#191c1d] rounded-lg px-3 py-1.5 focus:ring-2 focus:ring-[#005bbf]/20 outline-none cursor-pointer shadow-sm"
          >
            <option value="all">All Tasks</option>
            <option value="pending">Pending</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[10px] font-extrabold text-[#414754] uppercase tracking-wider">
            Sort:
          </span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as "none" | "date")}
            className="bg-white border-none text-sm font-bold text-[#191c1d] rounded-lg px-3 py-1.5 focus:ring-2 focus:ring-[#005bbf]/20 outline-none cursor-pointer shadow-sm"
          >
            <option value="none">Default</option>
            <option value="date">Earliest Due Date</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default TaskFilter;
