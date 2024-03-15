import { ModeToggle } from "./ModeToggle";

const Navbar = () => {
  return (
    <div className=" flex h-14 max-w-screen-2xl items-center justify-end space-x-4">
      <ModeToggle />
    </div>
  );
};
export default Navbar;
