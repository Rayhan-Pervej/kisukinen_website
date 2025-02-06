"use client";
import Link from "next/link";
import Menu from "./Menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import SearchBar from "./SearchBar";
import NavIcons from "./NavIcons";

const Navbar = () => {
    return (
        <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
            {/* Mobile */}
            <div className="h-full flex items-center justify-between md:hidden">
                <Link href="/">
                    <div className="text-2xl tracking-wide">KisuKinen</div>
                </Link>
                <Menu />
            </div>

            {/* Bigger screens */}
            <div className="hidden md:flex items-center h-full justify-between gap-8">
                {/* Left */}
                <div className="w-1/3 xl:w-1/2 flex items-center gap-12">
                    <Link href='' className="flex items-center gap-3">
                        <FontAwesomeIcon icon={faCartShopping} size='2x' />
                        <div className="text-2xl tracking-wide">KisuKinen</div>
                    </Link>
                    <div className="hidden xl:flex gap-4">
                        <Link href='/homepage'>Home</Link>
                        <Link href='/shop?category=all'>Shop</Link>
                        <Link href='/discount'>Discount</Link>
                        <Link href='/contact'>Contact</Link>
                        <Link href='/About'>About</Link>
                    </div>
                </div>
                {/* Right */}
                <div className="w-2/3 flex items-center justify-between gap-8">
                    <SearchBar />
                    <NavIcons />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
