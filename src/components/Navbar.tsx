import { ReactNode } from "react";

const Navbar = ({ children }: { children: ReactNode }) => {
    return (
        <nav className="px-4 py-2 bg-indigo-500 flex justify-between items-center sticky top-0 w-full z-10 shadow-md">
            <h1 className="font-bold text-4xl text-white">Notes</h1>
            {children}
        </nav>
    );
};

export default Navbar;
