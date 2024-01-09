import { useNavigate } from "react-router-dom";

export const NavItem = ({ page }) => {
  const navigate = useNavigate();
  return (
    <li
      onClick={() => {
        navigate({ pathname: page.path });
      }}
      className="w-52 px-4 py-2 rounded justify-start items-start gap-3 inline-flex cursor-pointer hover:bg-white hover:bg-opacity-10"
    >
      <img src={page.icon} className="w-5 h-5 relative opacity-80" />
      <div className="opacity-80 text-white text-sm font-medium font-['Inter'] leading-tight">
        {page.label}
      </div>
    </li>
  );
};
