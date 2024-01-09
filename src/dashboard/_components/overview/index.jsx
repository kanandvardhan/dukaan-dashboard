import { Cards } from "./cards";
import { DurationFilter } from "./duration-filter";
import { Table } from "./table";

export const Overview = () => {
  return (
    <section className="w-full p-[32px]">
      <div className="w-full flex-col justify-start items-start gap-8 inline-flex">
        <div className="self-stretch h-[178px] flex-col justify-start items-start gap-6 flex">
          <div className="self-stretch h-9 flex-col justify-start items-start gap-5 flex">
            <div className="self-stretch justify-between items-center inline-flex">
              <div className="text-zinc-900 text-xl font-medium font-['Inter'] leading-7">
                Overview
              </div>
              <DurationFilter />
            </div>
          </div>
          <Cards />
        </div>
        <div className="w-full flex-col justify-start items-start gap-5 flex">
          <div className="text-zinc-900 text-xl font-medium font-['Inter'] leading-7">
            Transactions | This Month
          </div>
          <Table />
        </div>
      </div>
    </section>
  );
};
