import { Calendar, Type, AlignLeft, AlertCircle } from "lucide-react";
import { formatToInputDate } from "@/src/utils";

const ModelFields = (props) => {
  const today = new Date().toISOString().split("T")[0];
  const { errors, setErrors, taskToEdit } = props;
  return (
    <>
      <div className="space-y-2">
        <label className="flex items-center gap-2 text-[10px] font-extrabold tracking-[0.06em] text-[#414754] uppercase">
          <Type size={12} />
          Task Title
        </label>
        <input
          name="title"
          className={`w-full px-4 py-3 bg-[#e1e3e4] border-none rounded-xl text-[#191c1d] placeholder:text-[#727785]/50 focus:ring-2 transition-all outline-none ${
            errors.title ? "ring-2 ring-red-500/50" : "focus:ring-[#005bbf]/20"
          }`}
          defaultValue={taskToEdit?.title}
          placeholder="e.g., Finalize Brand Guidelines"
          type="text"
          onChange={() =>
            errors.title && setErrors({ ...errors, title: undefined })
          }
        />
        {errors.title && (
          <p className="text-red-500 text-xs flex items-center gap-1 mt-1 font-medium italic animate-in slide-in-from-top-1">
            <AlertCircle size={12} />
            {errors.title}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <label className="flex items-center gap-2 text-[10px] font-extrabold tracking-[0.06em] text-[#414754] uppercase">
          <Calendar size={12} />
          Due Date
        </label>
        <div className="relative">
          <input
            name="dueDate"
            min={today}
            className={`w-full pl-11 pr-4 py-3 bg-[#e1e3e4] border-none rounded-xl text-[#191c1d] focus:ring-2 transition-all outline-none appearance-none ${
              errors.dueDate
                ? "ring-2 ring-red-500/50"
                : "focus:ring-[#005bbf]/20"
            }`}
            defaultValue={
              taskToEdit?.dueDate && formatToInputDate(taskToEdit?.dueDate)
            }
            type="date"
            onChange={() =>
              errors.dueDate && setErrors({ ...errors, dueDate: undefined })
            }
          />
          <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-[#005bbf] w-5 h-5 pointer-events-none" />
        </div>
        {errors.dueDate && (
          <p className="text-red-500 text-xs flex items-center gap-1 mt-1 font-medium italic animate-in slide-in-from-top-1">
            <AlertCircle size={12} />
            {errors.dueDate}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <label className="flex items-center gap-2 text-[10px] font-extrabold tracking-[0.06em] text-[#414754] uppercase">
          <AlignLeft size={12} />
          Description
        </label>
        <textarea
          name="description"
          defaultValue={taskToEdit?.description}
          className="w-full px-4 py-3 bg-[#e1e3e4] border-none rounded-xl text-[#191c1d] placeholder:text-[#727785]/50 focus:ring-2 focus:ring-[#005bbf]/20 transition-all outline-none resize-none"
          placeholder="Briefly describe the scope of work..."
          rows={4}
        ></textarea>
      </div>
    </>
  );
};

export default ModelFields;
