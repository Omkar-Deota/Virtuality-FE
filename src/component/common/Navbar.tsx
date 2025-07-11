import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };
  const navItems = [
    { label: "Home", href: "#fs" },
    { label: "Tools", href: "#ds" },
    { label: "My Orders", href: "#ps" },
    { label: "Publish tool", href: "#ct" },
  ];
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="Logo" />
            <span className="text-xl tracking-tight">Virtuality</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12 text-lg">
            {navItems.map((item: any, index: any) => (
              <li key={index}>
                <Link to="/">{item.label}</Link>
              </li>

            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-6 items-center">
            <Link to="/login" className="py-2 px-3 bg-gradient-to-r from-orange-400 to-orange-800 rounded-tl-xl rounded-br-xl text-black">
              Sign In
            </Link>
            <Link
              to="/register"
              className="py-2 px-3 mx-3 rounded-tr-xl rounded-bl-xl border"
            >
              Create an account
            </Link>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item: any, index: any) => (
                <li key={index} className="py-4">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <Link to="/login" className="py-2 px-3 border rounded-md">
                Sign In
              </Link>
              <Link
                to="/register"
                className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800"
              >
                Create an account
              </Link>
            </div>
          </div>
        )}
      </div>

    </nav>
  );
};

export default Navbar;
