import { useState } from "react";
import chevron from "./assets/chevron.png";

export const DurationFilter = () => {
  const [open, setOpen] = useState(false);
  return (
    <div
      onClick={() => setOpen(!open)}
      className="justify-start items-center gap-4 flex cursor-pointer focus:outline-1"
    >
      <div className="w-[137px] h-9 relative">
        <div className="w-[137px] h-9 left-0 top-0 absolute bg-white rounded border border-zinc-300" />
        <div className="left-[14px] top-[6px] absolute text-neutral-600 text-base font-normal font-['Inter'] leading-normal">
          <select className="bg-inherit cursor-pointer">
            <option>Last Month</option>
          </select>
        </div>
        <img
          src={chevron}
          className={`w-4 h-4 left-[107px] top-[10px] absolute transition ${
            open && "rotate-180"
          }`}
        />
      </div>
    </div>
  );
};
