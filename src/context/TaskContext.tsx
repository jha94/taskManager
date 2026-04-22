import React, {
  useEffect,
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

export interface Task {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  status: "pending" | "in-progress" | "completed";
}

interface TaskContextType {
  tasks: Task[];
  isModalOpen: boolean;
  editId: string | null;
  openModal: (id?: string) => void;
  closeModal: () => void;
  createTask: (
    taskData: Omit<Task, "id" | "status"> & {
      updateId?: string;
      status?: Task["status"];
    },
  ) => void;
  deleteTask: (id: string) => void;
  updateStatus: (id: string) => void;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [tasks, setTasks] = useState<Task[]>(() => {
    try {
      const savedTasks = localStorage.getItem("addedTasks");
      return savedTasks ? JSON.parse(savedTasks) : [];
    } catch (error) {
      console.error("Failed to load your added tasks from storage", error);
      return [];
    }
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editId, setEditId] = useState<string | null>(null);

  useEffect(() => {
    localStorage.setItem("addedTasks", JSON.stringify(tasks));
  }, [tasks]);

  const openModal = (id?: string) => {
    if (id) setEditId(id);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditId(null);
  };

  const createTask = (
    taskData: Omit<Task, "id" | "status"> & {
      updateId?: string;
      status?: Task["status"];
    },
  ) => {
    setTasks((prevTasks) => {
      if (taskData.updateId) {
        return prevTasks.map((task) => {
          if (task.id === taskData.updateId) {
            return {
              ...task,
              title: taskData.title,
              description: taskData.description,
              dueDate: taskData.dueDate,
              status: taskData.status ?? task.status,
            };
          }
          return task;
        });
      }

      return [
        ...prevTasks,
        {
          id: crypto.randomUUID(),
          title: taskData.title,
          description: taskData.description,
          dueDate: taskData.dueDate,
          status: "pending",
        },
      ];
    });
    closeModal();
  };

  const deleteTask = (id: string) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  const updateStatus = (id: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((t) => {
        if (t.id === id) {
          const nextStatus: Task["status"] =
            t.status === "pending"
              ? "in-progress"
              : t.status === "in-progress"
                ? "completed"
                : "completed";
          return { ...t, status: nextStatus };
        }
        return t;
      }),
    );
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        isModalOpen,
        editId,
        openModal,
        closeModal,
        createTask,
        deleteTask,
        updateStatus,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTask = () => {
  const context = useContext(TaskContext);
  if (context === undefined) {
    throw new Error("useTask must be used within a TaskProvider");
  }
  return context;
};
