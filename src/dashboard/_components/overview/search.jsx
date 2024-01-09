import search from "./assets/search.png";

export const Search = () => {
  return (
    <div className="grow shrink basis-0 h-10 px-4 py-2.5 bg-white rounded border border-zinc-300 justify-start items-center gap-2 flex">
      <img src={search} className="w-3.5 h-3.5 relative" />
      <div>
        <input
          placeholder="Search by order ID..."
          className="grow shrink basis-0 text-neutral-400 text-sm font-normal font-['Inter'] leading-tight bg-inherit"
        />
      </div>
    </div>
  );
};
