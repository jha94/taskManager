import { CheckCircle, ClockFading, Clock, Layout } from "lucide-react";

export const formatToInputDate = (dateStr?: string) => {
  if (!dateStr) return "";
  const date = new Date(dateStr);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

export const getTaskStats = (tasks) => {
  return [
    {
      label: "Total Tasks",
      value: tasks.length,
      icon: Layout,
      color: "text-[#005bbf]",
      bg: "bg-[#adc7ff]/20",
      border: "border-l-4 border-[#005bbf]",
    },
    {
      label: "Pending",
      value: tasks.filter((t) => t.status === "pending")?.length || 0,
      icon: ClockFading,
      color: "text-[#9e4300]",
      bg: "bg-[#ffdbcb]/40",
      border: "border-l-4 border-[#9e4300]",
    },
    {
      label: "In-Progress",
      value: tasks.filter((t) => t.status === "in-progress")?.length || 0,
      icon: Clock,
      color: "text-[#9e4300]",
      bg: "bg-[#ffdbcb]/40",
      border: "border-l-4 border-[#9e4300]",
    },
    {
      label: "Completed",
      value: tasks.filter((t) => t.status === "completed")?.length || 0,
      icon: CheckCircle,
      color: "text-[#005bbf]",
      bg: "bg-[#b2c9fe]/20",
      border: "border-l-4 border-[#005bbf]",
    },
  ];
};

export const filterSort = (tasks, statusFilter, sortBy) => {
  return tasks
    .filter((task) =>
      statusFilter === "all" ? true : task.status === statusFilter,
    )
    .sort((a, b) => {
      if (sortBy === "date") {
        return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
      }
      return 0;
    });
};
