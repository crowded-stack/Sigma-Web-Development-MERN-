import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className=" py-4 px-7 bg-red-700">
      <ul className=" list-none flex gap-8 text-white">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
