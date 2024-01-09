import download from "./assets/download.png";

export const Download = () => {
  return (
    <div className="w-9 h-9 relative cursor-pointer">
      <div className="w-9 h-9 left-0 top-0 absolute rounded border border-zinc-300" />
      <img src={download} className="w-5 h-5 left-[8px] top-[8px] absolute" />
    </div>
  );
};
