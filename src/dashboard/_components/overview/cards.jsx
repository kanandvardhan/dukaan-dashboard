import { useContext } from "react";
import { UserContext } from "../../../Layout/Layout";
import { formatCurrency } from "../../../util/helpers";

export const Cards = () => {
  const user = useContext(UserContext);

  return (
    <div className="self-stretch justify-start items-start gap-5 inline-flex">
      <div className="grow shrink basis-0 h-[118px] justify-center items-center gap-6 flex">
        <div className="grow shrink basis-0 p-5 bg-white rounded-lg shadow flex-col justify-start items-start gap-4 inline-flex">
          <div className="self-stretch h-[78px] flex-col justify-start items-start gap-4 flex">
            <div className="justify-start items-center gap-2 inline-flex">
              <div className="text-neutral-600 text-base font-normal font-['Inter'] leading-normal">
                Online orders
              </div>
            </div>
            <div className="text-zinc-900 text-[32px] font-medium font-['Inter'] leading-[38px]">
              {user.orders}
            </div>
          </div>
        </div>
      </div>
      <div className="grow shrink basis-0 p-5 bg-white rounded-lg shadow flex-col justify-start items-start gap-4 inline-flex">
        <div className="self-stretch h-[78px] flex-col justify-start items-start gap-4 flex">
          <div className="justify-start items-center gap-2 inline-flex">
            <div className="text-neutral-600 text-base font-normal font-['Inter'] leading-normal">
              Amount received
            </div>
          </div>
          <div className="self-stretch justify-start items-center gap-4 inline-flex">
            <div className="grow shrink basis-0 h-[38px] justify-between items-center flex">
              <div className="text-zinc-900 text-[32px] font-medium font-['Inter'] leading-[38px]">
                {formatCurrency(user.amount_received)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
