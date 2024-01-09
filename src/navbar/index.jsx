import { pages } from "./_components/assets/pages";
import userImage from "../assets/user/user-image.jpg";
import { NavItem } from "./_components/nav-item";
import credits from "./_components/assets/credits.png";
import chevron from "./_components/assets/chevron.png";
import git from "./_components/assets/git.png";

import { useContext, useState } from "react";
import { UserContext } from "../Layout/Layout";

const Navbar = () => {
  const user = useContext(UserContext);
  const [open, setOpen] = useState(true);

  return (
    <>
      <aside className="sticky top-0 w-56 h-screen flex-col justify-start items-start inline-flex">
        <div className="w-56 grow shrink basis-0 px-2.5 py-4 bg-slate-800 flex-col justify-start items-center gap-4 flex">
          <div className="w-52 grow shrink basis-0 flex-col justify-start items-center gap-6 flex">
            <div className="w-48 justify-start items-center gap-3 inline-flex">
              <img className="w-[39px] h-[39px] rounded" src={userImage} />
              <div className="grow shrink basis-0 flex-col justify-center items-start gap-1 inline-flex">
                <div className="self-stretch text-white text-[15px] font-medium font-['Inter'] leading-snug capitalize">
                  {user.name}
                </div>
                <a
                  href="#"
                  className="self-stretch opacity-80 text-white text-[13px] font-normal font-['Inter'] underline leading-none cursor-pointer"
                >
                  Visit store
                </a>
              </div>
              <div>
                <img
                  onClick={() => setOpen(!open)}
                  src={chevron}
                  className={`w-5 h-5 relative cursor-pointer transition ${
                    !open && "rotate-180"
                  } `}
                />
              </div>
            </div>
            <ul className="w-52 grow shrink basis-0 flex-col justify-start items-start gap-1 flex">
              {pages.map((page, i) => (
                <NavItem key={i} page={page} />
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-full cursor-pointer">
            <a
              href="https://github.com/kanandvardhan/dukaan-dashboard"
              target="_blank"
            >
              <img width={30} height={30} src={git} />
            </a>
          </div>
          <div className="h-[54px] px-3 py-1.5 bg-slate-700 rounded flex-col justify-start items-start gap-2.5 flex cursor-pointer">
            <div className="justify-start items-center gap-3 inline-flex">
              <div className="p-1.5 bg-white bg-opacity-10 rounded justify-start items-start gap-2.5 flex">
                <div className="w-6 h-6 relative">
                  <img
                    className="w-[23.65px] h-[19.60px] left-[0.20px] top-[2.20px] absolute"
                    src={credits}
                  />
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-0.5 inline-flex">
                <div className="opacity-80 text-white text-[13px] font-normal font-['Inter'] leading-none">
                  Available credits
                </div>
                <div className="text-white text-base font-medium font-['Inter'] leading-normal">
                  {user.credits.toFixed(2)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
