import { Header } from "./_components/header";
import { Overview } from "./_components/overview";

const Dashboard = () => {
  return (
    <div className="flex flex-col w-full">
      <Header />
      <Overview />
    </div>
  );
};

export default Dashboard;
