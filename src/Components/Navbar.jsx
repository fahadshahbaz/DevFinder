import MoonIcon from "./Icons/MoonIcon";
import SunIcon from "./Icons/SunIcon";

const Navbar = () => {
  return (
    <section className="mt-5 sm:mt-[3rem] w-full md:w-[700px] lg:w-[800px] mx-auto">
      <div className="flex justify-between items-center px-5 sm:px-8">
        <h1 className="text-2xl font-bold">devfinder</h1>
        <div className="font-bold">Light <SunIcon /></div>
      </div>
    </section>
  );
};

export default Navbar;
