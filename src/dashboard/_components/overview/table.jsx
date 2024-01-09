import { TableFunctions } from "./table-functions";

import info from "./assets/info.png";
import triangle from "./assets/triangle.png";
import chevronLeft from "./assets/chevron-left.png";
import chevronRight from "./assets/chevron-right.png";
import { useContext } from "react";
import { UserContext } from "../../../Layout/Layout";
import { formatCurrency, formatDate } from "../../../util/helpers";

export const Table = () => {
  const { order } = useContext(UserContext);
  return (
    <div className="w-full px-3 pt-3 pb-6 bg-white rounded-lg shadow flex-col justify-start items-end flex">
      <div className="w-full flex-col justify-start items-end gap-3 flex">
        <TableFunctions />

        <table class="w-full text-center">
          <thead>
            <div className="w-full px-3 py-2.5 bg-zinc-100 rounded">
              <div className="grow shrink basis-0 flex-col ">
                <div className="text-neutral-600 text-sm font-medium font-['Inter'] leading-tight">
                  <tr className="grid grid-cols-4 ">
                    <th className="text-left font-medium">Order ID</th>
                    <th className="font-medium flex gap-1 justify-center items-center cursor-pointer">
                      Order date{" "}
                      <img src={triangle} className="w-3.5 h-3.5 relative" />
                    </th>
                    <th className="font-medium">Order amount</th>
                    <th className="font-medium text-right flex gap-1 justify-end items-center cursor-pointer">
                      Transaction fees
                      <img src={info} className="w-3.5 h-3.5 relative" />
                    </th>
                  </tr>
                </div>
              </div>
            </div>
          </thead>
          <tbody>
            {[...Array(20)].map((_, i) => (
              <tr
                key={i}
                className="grid grid-cols-4 text-center text-sm h-12 px-3 py-3.5 bg-white border-b-[1px] cursor-pointer hover:bg-gray-300/10"
              >
                <td className="text-left text-sky-700 font-medium font-['Inter'] leading-tight hover:underline">
                  #{order.id}
                </td>
                <td>{formatDate(order.date)}</td>
                <td>{formatCurrency(order.amount)}</td>
                <td className="text-right">
                  {formatCurrency(order.transaction_fee)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="w-full flex-col justify-center items-center gap-6 flex mt-[20px]">
        <div className="justify-start items-center gap-6 inline-flex ">
          <div className="pl-1.5 pr-3 py-1.5 bg-white rounded border border-zinc-300 justify-center items-center gap-1.5 flex cursor-pointer hover:bg-sky-600">
            <img src={chevronLeft} className="w-[18px] h-[18px] relative" />
            <div className="justify-start items-start gap-2 flex">
              <div className="text-center hover:text-white text-neutral-600 text-sm font-medium font-['Inter'] leading-tight">
                Previous
              </div>
            </div>
          </div>
          <div className="justify-start items-start gap-2 flex">
            <div className="w-7 h-7 py-0.5 rounded text-neutral-600 hover:bg-sky-600 hover:text-white self-stretch text-center flex-col justify-center items-center gap-2 inline-flex text-sm font-normal font-['Inter'] leading-tight cursor-pointer">
              1
            </div>
            <div className="w-7 h-7 py-0.5 rounded text-neutral-600 hover:bg-sky-600 hover:text-white self-stretch text-center flex-col justify-center items-center gap-2 inline-flex text-sm font-normal font-['Inter'] leading-tight cursor-pointer">
              ...
            </div>
            <div className="w-7 h-7 px-2 text-center py-1.5 bg-sky-700 text-white rounded flex-col font-['Inter'] text-sm font-medium  leading-tight justify-center items-center gap-1.5 inline-flex cursor-pointer">
              10
            </div>
            {[...Array(9)].map((_, i) => (
              <div
                key={{ i }}
                className="w-7 h-7 py-0.5 rounded text-neutral-600 hover:bg-sky-600 hover:text-white self-stretch text-center flex-col justify-center items-center gap-2 inline-flex text-sm font-normal font-['Inter'] leading-tight cursor-pointer"
              >
                {11 + i}
              </div>
            ))}
          </div>
          <div className="pl-3 pr-1.5 py-1.5 bg-white rounded border border-zinc-300 justify-center items-center gap-1.5 flex cursor-pointer hover:bg-sky-600">
            <div className="justify-start items-start gap-2 flex">
              <div className="text-center hover:text-white text-neutral-600 text-sm font-medium font-['Inter'] leading-tight">
                Next
              </div>
            </div>
            <img src={chevronRight} className="w-[18px] h-[18px] relative" />
          </div>
        </div>
      </div>
    </div>
  );
};
