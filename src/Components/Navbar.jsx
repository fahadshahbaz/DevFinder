import MoonIcon from "./Icons/MoonIcon";
import SunIcon from "./Icons/SunIcon";

const Navbar = () => {
  return (
    <section className="mt-10 sm:mt-[4.5rem] w-full md:w-[670px] lg:w-[800px] mx-auto">
      <div className="flex justify-between items-center px-4 sm:px-12">
        <h1 className="text-2xl font-bold">devfinder</h1>
        <div className="font-bold">Light <SunIcon /></div>
      </div>
    </section>
  );
};

export default Navbar;
