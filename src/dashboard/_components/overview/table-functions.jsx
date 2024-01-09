import { Download } from "./download";
import { Search } from "./search";
import { Sort } from "./sort";

export const TableFunctions = () => {
  return (
    <div className="self-stretch justify-between items-center inline-flex">
      <div className="h-10 justify-start items-start flex">
        <Search />
      </div>
      <div className="justify-end items-center gap-3 flex">
        <Sort />
        <Download />
      </div>
    </div>
  );
};
