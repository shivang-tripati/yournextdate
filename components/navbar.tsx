import Link from "next/link";

type NavItem = {
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Sign Up", href: "#cta" },
];

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-6 bg-white shadow-lg fixed w-full z-10">
      <h1 className="text-2xl font-bold text-pink-600">MatchUp</h1>
      <ul className="hidden md:flex space-x-6">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className={`hover:text-pink-500 transition`}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="md:hidden flex items-center">
        <button className="text-pink-600 focus:outline-none">
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <ul className="dropdown-menu absolute top-0 right-0 w-40 bg-white shadow-lg py-2 mt-2 hidden">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`hover:text-pink-500 transition block px-4 py-2`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
