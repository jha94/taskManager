import { useState } from "react";
import { motion } from "motion/react";
import { useTask } from "../context/TaskContext";
import { filterSort } from "../utils";
import {
  TaskDashboardHeader,
  TaskByStatus,
  TaskFilter,
  TaskCard,
  AddTaskCard,
} from "../components/taskDashboard";

export default function TaskDashboard() {
  const { tasks } = useTask();
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [sortBy, setSortBy] = useState<"none" | "date">("none");
  const filteredAndSortedTasks = filterSort(tasks, statusFilter, sortBy);

  return (
    <div className="flex-1 flex flex-col min-h-screen">
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-7xl mx-auto px-8 pb-12 w-full">
          <TaskDashboardHeader />
          <TaskByStatus />
          <TaskFilter
            statusFilter={statusFilter}
            setStatusFilter={setStatusFilter}
            sortBy={sortBy}
            setSortBy={setSortBy}
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-6">
            {filteredAndSortedTasks.length ? (
              filteredAndSortedTasks.map((task) => (
                <TaskCard task={task} index={task.id} key={task.id} />
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="group bg-white p-6 rounded-xl ghost-border hover:bg-[#d8e2ff]/5 transition-all duration-300 flex flex-col items-center justify-center min-h-[200px]"
              >
                <p className="text-center text-gray-500 font-medium">
                  No tasks found
                </p>
              </motion.div>
            )}

            <AddTaskCard />
          </div>
        </div>
      </main>
    </div>
  );
}
