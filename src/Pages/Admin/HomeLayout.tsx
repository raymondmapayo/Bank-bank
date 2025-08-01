import AllTransac from "../Home/AllTransac";
import Budgets from "../Home/Budgets";
import Financial from "../Home/Financial";
import Homes from "../Home/Homes";
import Loan from "../Home/Loan";
import Reports from "../Home/Reports";
import Savings from "../Home/Savings";
import Subs from "../Home/Subs";

const Home = () => {
  return (
    <div className="rounded-2xl bg-slate-100 dark:bg-[#2b1d11] p-4 flex-1 min-w-[130px] h-screen flex flex-col xl:flex-row gap-4 transition-colors duration-300">
      {/* Left Side */}
      <div className="w-full xl:w-[37%] flex flex-col gap-4">
        <Homes />
        <Budgets />
      </div>

      {/* Right Side */}
      <div className="w-full xl:w-[30%] flex flex-col gap-4">
        <AllTransac />
        <Subs />
        <Savings />
      </div>
      {/* Right Side */}
      <div className="w-full xl:w-[31%] flex flex-col gap-4">
        <Reports />
        <Loan />
        <Financial />
      </div>
    </div>
  );
};

export default Home;
