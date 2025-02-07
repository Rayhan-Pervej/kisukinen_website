const SelectSize = () => {
    return (
      <div className="gap-4 flex flex-col">
        <h4 className="font-semibold text-md md:text-lg lg:text-xl">Select Size</h4>
  
        <div className="flex items-center gap-3 flex-wrap">
          <button className="ring-1 ring-slate-950 text-black rounded-md py-1 px-4 text-sm cursor-pointer">
            Small
          </button>
          <button className="ring-1 ring-slate-950 text-black rounded-md py-1 px-4 text-sm cursor-pointer">
            Medium
          </button>
          <button className="ring-1 ring-slate-950 bg-black text-white rounded-md py-1 px-4 text-sm cursor-pointer">
            Large
          </button>
          <button className="ring-1 ring-slate-950 text-black rounded-md py-1 px-4 text-sm cursor-pointer">
            X Large
          </button>
          <button className="ring-1 ring-slate-300 bg-slate-300 text-slate-600 rounded-md py-1 px-4 text-sm cursor-not-allowed">
            XX Large
          </button>
        </div>
      </div>
    );
  };
  
  export default SelectSize;
  