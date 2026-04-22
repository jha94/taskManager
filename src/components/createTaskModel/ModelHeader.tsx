import { X } from "lucide-react";
const ModelHeader = (props) => {
  const { handleClose, editId } = props;
  return (
    <div className="px-8 pt-8 pb-4 flex items-center justify-between">
      <div>
        <h3 className="text-2xl font-bold text-[#191c1d] tracking-tight">
          {editId ? "Update Task" : "Create Task"}
        </h3>
        <p className="text-[#414754] text-sm mt-1">
          Define the parameters for your next creative milestone.
        </p>
      </div>
      <button
        onClick={handleClose}
        className="text-[#727785] hover:text-[#191c1d] transition-colors p-1"
      >
        <X size={24} />
      </button>
    </div>
  );
};

export default ModelHeader;
