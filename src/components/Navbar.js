import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="p-4 bg-blue-500 text-white flex justify-between">
      <h1 className="text-xl font-bold">🐍 Snake Alert System</h1>
      <div>
        <Link className="mr-4" to="/">Home</Link>
        <Link className="mr-4" to="/alerts">Alerts</Link>
        <Link to="/emergency">Emergency</Link>
      </div>
    </nav>
  );
};

export default Navbar;
