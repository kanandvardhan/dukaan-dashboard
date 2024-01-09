import search from "./assets/search.png";
import announcement from "./assets/announcement.png";
import chevron from "./assets/chevron-fill.png";
import help from "./assets/help.png";

export const Header = () => {
  return (
    <div className="h-16 px-8 py-3 bg-white border-b border-zinc-300 justify-between items-center gap-4 inline-flex">
      <div className="grow shrink basis-0 h-[22px] justify-start items-center gap-4 flex">
        <div className="justify-start items-center gap-4 flex">
          <div className="text-zinc-900 text-[15px] font-normal font-['Inter'] leading-snug">
            Payments
          </div>
        </div>
        <div className="justify-start items-center gap-1.5 flex cursor-pointer">
          <img src={help} className="w-3.5 h-3.5 relative" />
          <p className="hidden md:block text-neutral-600 text-xs font-normal font-['Inter'] leading-none">
            How it works
          </p>
        </div>
      </div>
      <div className="grow shrink max-w-[400px] self-stretch px-4 py-[9px] bg-zinc-100 rounded-md justify-start items-center gap-2 flex">
        <img src={search} className="w-4 h-4 relative" />
        <input
          placeholder="Search features, tutorials, etc."
          className="text-zinc-500 text-[15px] font-normal font-['Inter'] leading-snug w-full bg-inherit border-transparent focus:border-transparent focus:ring-0"
        />
      </div>
      <div className="grow shrink basis-0 h-10 justify-end items-start gap-2 flex">
        <div className="justify-start items-start gap-3 flex ">
          <div className="w-10 h-10 bg-neutral-200 rounded-full flex items-center justify-center cursor-pointer">
            <img src={announcement} className="w-[20px] h-[20px] " />
          </div>
          <div className="w-10 h-10 bg-neutral-200 rounded-full flex items-center justify-center cursor-pointer">
            <img src={chevron} className="w-[20px] h-[12.73px] " />
          </div>
        </div>
      </div>
    </div>
  );
};
