import { motion, AnimatePresence } from "motion/react";
import { useState, FormEvent } from "react";
import { useTask } from "../context/TaskContext";
import {
  ModelHeader,
  ModelFields,
  ModelButton,
} from "../components/createTaskModel";

export default function CreateTaskModal() {
  const { isModalOpen, closeModal, createTask, tasks, editId } = useTask();
  const taskToEdit = tasks.find((t) => t.id === editId);
  const [errors, setErrors] = useState<{ title?: string; dueDate?: string }>(
    {},
  );
  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const title = formData.get("title") as string;
    const dateInput = formData.get("dueDate") as string;

    const newErrors: { title?: string; dueDate?: string } = {};
    if (!title.trim()) newErrors.title = "Task title is required";
    if (!dateInput) newErrors.dueDate = "Due date is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});

    // Format date for display
    const displayDate = new Date(dateInput).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });

    const taskPaylaod = {
      title: title.trim(),
      description: formData.get("description") as string,
      dueDate: displayDate,
    };
    createTask(
      taskToEdit?.id
        ? {
            ...taskPaylaod,
            updateId: taskToEdit.id,
            status: taskToEdit.status,
          }
        : { ...taskPaylaod },
    );
  };
  const handleClose = () => {
    setErrors({});
    closeModal();
  };

  return (
    <AnimatePresence>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-[#191c1d]/10 backdrop-blur-[2px]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-xl bg-white rounded-xl shadow-[0_12px_32px_rgba(25,28,29,0.06)] overflow-hidden"
          >
            <ModelHeader handleClose={handleClose} editId={taskToEdit?.id} />
            <form
              onSubmit={handleSubmit}
              noValidate
              className="px-8 py-6 space-y-6"
            >
              <ModelFields
                errors={errors}
                setErrors={setErrors}
                taskToEdit={taskToEdit}
              />
              <ModelButton closeModal={closeModal} editId={taskToEdit?.id} />
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
