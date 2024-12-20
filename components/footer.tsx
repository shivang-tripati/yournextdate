// components/Footer.js
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Language Section */}
          <div className="w-full sm:w-1/5 mb-4 sm:mb-0">
            <h2 className="text-lg font-semibold">Language</h2>
            <ul className="mt-2">
              <li>
                <Link href="#" className="hover:text-gray-400 ">
                  English
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div className="w-full sm:w-1/5 mb-4 sm:mb-0">
            <h2 className="text-lg font-semibold">Company</h2>
            <ul className="mt-2">
              <li>
                <Link href="#" className="hover:text-gray-400 ">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-400 ">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-400 ">
                  Press
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-400 ">
                  Ad Choices
                </Link>
              </li>
            </ul>
          </div>

          {/* Conditions Section */}
          <div className="w-full sm:w-1/5 mb-4 sm:mb-0">
            <h2 className="text-lg font-semibold">Conditions</h2>
            <ul className="mt-2">
              <li>
                <Link href="#" className="hover:text-gray-400 ">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-400 ">
                  Cookies – Manage preferences
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-400 ">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-400">
                  Community Guidelines
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-400 ">
                  Consumer Health Data Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="w-full sm:w-1/5 mb-4 sm:mb-0">
            <h2 className="text-lg font-semibold">Contact</h2>
            <ul className="mt-2">
              <li>
                <Link href="#" className="hover:text-gray-400 ">
                  Support
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-400 ">
                  Security
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-400 text-sm">
                  Safety Tips
                </Link>
              </li>
            </ul>
          </div>

          {/* Follow Section */}
          <div className="w-full sm:w-1/5 mb-4 sm:mb-0">
            <h2 className="text-lg font-semibold">Follow</h2>
            <ul className="mt-2 flex flex-col">
              <li>
                <Link href="#" className="hover:text-gray-400 text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-400 text-sm">
                  Tech&nbsp;Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-400 text-sm">
                  Facebook
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-400 text-sm">
                  Instagram
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-400 text-sm">
                  Twitter
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>© 2024 MatchUp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
