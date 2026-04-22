const ModelButton = (props) => {
  const { closeModal, editId } = props;
  return (
    <div className="flex items-center justify-end gap-4 pt-4">
      <button
        type="button"
        onClick={closeModal}
        className="px-6 py-3 text-sm font-semibold text-[#005bbf] hover:bg-[#adc7ff]/30 transition-colors rounded-xl"
      >
        Cancel
      </button>
      <button
        type="submit"
        className="px-8 py-3 text-sm font-bold text-white glass-gradient rounded-full shadow-lg shadow-[#005bbf]/20 hover:shadow-[#005bbf]/40 active:scale-95 transition-all"
      >
        {editId ? "Update Task" : "Create Task"}
      </button>
    </div>
  );
};

export default ModelButton;
