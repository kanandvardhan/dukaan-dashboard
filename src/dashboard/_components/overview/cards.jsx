export const Cards = () => {
  function formatCurrency(amount) {
    return amount.toLocaleString("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }

  const formattedNumber = formatCurrency(2392312.19);

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
              231
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
                ₹23,92,312.19
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
