import { createContext } from "react";
import Dashboard from "../dashboard";
import Navbar from "../navbar";

const user = {
  name: "Nishyan",
  credits: 222.1,
  orders: 231,
  amount_received: 2392312.19,
};

export const UserContext = createContext(user);

const Layout = () => {
  return (
    <UserContext.Provider value={user}>
      <div className="flex flex-row">
        <Navbar />
        <Dashboard />
      </div>
    </UserContext.Provider>
  );
};

export default Layout;
