import sort from "./assets/sort.png";

export const Sort = () => {
  return (
    <div className="justify-start items-center gap-3 flex">
      <div className="px-3 py-1.5 bg-white rounded border border-zinc-300 justify-start items-center gap-1.5 flex cursor-pointer">
        <div className="text-neutral-600 text-base font-normal font-['Inter'] leading-normal">
          Sort
        </div>
        <img src={sort} className="w-4 h-4 relative" />
      </div>
    </div>
  );
};
