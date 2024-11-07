import Link from 'next/link';

type NavItem = {
    label: string;
    href: string;
};

const navItems: NavItem[] = [
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Sign Up', href: '#cta' },
];

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center p-6 bg-white shadow-lg fixed w-full z-10">
            <h1 className="text-2xl font-bold text-pink-600">Dating App</h1>
            <ul className="hidden md:flex space-x-6">
                {navItems.map((item) => (
                    <li key={item.href}>
                        <Link href={item.href}
                          className={`hover:text-pink-500 transition`}>
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
            <div className="md:hidden">
                <button className="text-pink-600 focus:outline-none">Menu</button>
                {/* Add a dropdown menu for mobile devices */}
                <ul className="hidden md:hidden dropdown-menu">
                    {navItems.map((item) => (
                        <li key={item.href}>
                            <Link href={item.href}
                            className={`hover:text-pink-500 transition`}
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

  
