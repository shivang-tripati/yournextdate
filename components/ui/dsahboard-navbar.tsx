import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { MdMessage } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { LuUserSquare2 } from "react-icons/lu";
import Image from "next/image";
import { motion } from "framer-motion";
import useAuthStore from "@/hooks/user-auth-store";
import { useRouter } from "next/navigation";

type NavItem = {
  label: string;
  href: string;
  icon: JSX.Element;
};

const navItems: NavItem[] = [
  {
    label: "Discover",
    href: "#discover",
    icon: <LuUserSquare2 className="h-8 w-8" />,
  },
  { label: "Likes", href: "#likes", icon: <FaHeart className="h-8 w-8" /> },
  {
    label: "Messages",
    href: "#messages",
    icon: <MdMessage className="h-8 w-8" />,
  },
];

const Navbar = ({
  activeSection,
  setActiveSection,
}: {
  activeSection: string;
  setActiveSection: (section: string) => void;
}) => {
  const [lineStyle, setLineStyle] = useState({ left: 0, width: 0 });
  const navRef = useRef<HTMLUListElement>(null);
  const { user } = useAuthStore();
  const router = useRouter();

  console.log(user);

  useEffect(() => {
    const activeItem = navRef.current?.querySelector(
      `[data-href='${activeSection}']`
    );
    if (activeItem) {
      const { offsetLeft, offsetWidth } = activeItem as HTMLElement;
      setLineStyle({ left: offsetLeft, width: offsetWidth });
    }
  }, [activeSection]);

  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-lg relative w-full z-10">
      <div className="flex items-center gap-x-10">
        <h1 className="ml-5 text-2xl font-bold text-pink-600">Dating App</h1>
        <ul ref={navRef} className="hidden md:flex space-x-6 relative gap-x-5">
          {navItems.map((item) => (
            <li
              key={item.href}
              data-href={item.href}
              className={`gap-x-1 mb-1 items-center flex cursor-pointer ${
                activeSection === item.href ? "text-pink-500" : ""
              }`}
              onClick={() => setActiveSection(item.href)}
              aria-label={item.label}
            >
              {item.icon}
              <Link
                href={item.href}
                className={`hover:text-pink-500 transition ${
                  activeSection === item.href ? "font-bold" : ""
                }`}
                aria-label={item.label}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div
        className="flex justify-center items-center gap-x-2 mr-10 cursor-pointer"
        onClick={() => router.push(`/profile/${user?.id}`)}
        aria-label={`Go to profile of ${user?.name}`}
      >
        <Image
          src={user?.profilePictureUrl ? user.profilePictureUrl : ""}
          alt={`${user?.name}'s profile`}
          className="h-9 w-9 rounded-full object-cover"
        />
        <div>
          <p className="text-pink-600">{user?.name}</p>
        </div>
      </div>
      <motion.div
        className="h-1 bg-pink-500 rounded-t-md absolute bottom-0"
        initial={false}
        animate={{ left: lineStyle.left + 200, width: lineStyle.width + 15 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      />
    </nav>
  );
};

export default Navbar;
