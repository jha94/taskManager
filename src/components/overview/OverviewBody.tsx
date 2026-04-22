import { Layout } from "lucide-react";
const OverviewBody = () => {
  const OverviewImage = () => {
    return (
      <div className="relative group">
        <div className="absolute inset-0 bg-[#005bbf]/5 rounded-full blur-3xl scale-125 transition-transform group-hover:scale-150 duration-1000"></div>
        <div className="relative mx-auto w-64 h-64 md:w-80 md:h-80 bg-[#f3f4f5] rounded-full flex items-center justify-center p-8 overflow-hidden">
          <div className="w-full h-full bg-white rounded-xl shadow-sm flex flex-col items-center justify-center border border-[#c1c6d6]/10">
            <div className="space-y-4 w-2/3">
              <div className="h-2 w-full bg-[#e1e3e4] rounded-full"></div>
              <div className="h-2 w-4/5 bg-[#e1e3e4] rounded-full"></div>
              <div className="h-2 w-1/2 bg-[#005bbf]/20 rounded-full"></div>
              <div className="pt-4 flex justify-center">
                <div className="w-12 h-12 rounded-full bg-[#d8e2ff] flex items-center justify-center">
                  <Layout className="text-[#005bbf] w-6 h-6" />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-10 right-10 w-4 h-4 bg-[#c55500]/40 rounded-full"></div>
          <div className="absolute bottom-16 left-12 w-3 h-3 bg-[#b2c9fe]/60 rounded-full"></div>
        </div>
      </div>
    );
  };

  const OverviewText = () => {
    return (
      <div className="space-y-3">
        <h2 className="text-3xl font-bold text-[#191c1d] tracking-tight">
          No tasks yet
        </h2>
        <p className="text-[#414754] text-lg max-w-sm mx-auto leading-relaxed">
          Get started by creating your first task to stay organized and boost
          your productivity.
        </p>
      </div>
    );
  };
  return (
    <>
      <OverviewImage />
      <OverviewText />
    </>
  );
};

export default OverviewBody;
