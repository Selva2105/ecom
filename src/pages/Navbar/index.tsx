import React, { useState } from "react";
import NavItem from "./NavItem";
import { navLinks } from "../../constants/navbarData";
import { Link, useNavigate } from "react-router-dom";
import MenuSlider from "./MenuSlider";

import { RiUser3Fill } from "react-icons/ri";
import { RiShoppingBagFill } from "react-icons/ri";
import { RiHeartFill } from "react-icons/ri";
import { RiBookmark3Fill } from "react-icons/ri";
import { RiShoppingCartFill } from "react-icons/ri";
import ProfileDropdown from "../../components/shared/ProfileDropdown";
import SideSlider from "../../components/shared/SideSlider";
import CartSlider from "../CartSlider";


const Navbar: React.FC<{}> = () => {
    const navigate = useNavigate();

    const [openNav, setOpenNav] = useState(false);
    const [showSlider, setShowSlider] = useState(false);

    const options = [
        { label: 'Profile', action: `/profile`, icon: <RiUser3Fill className="text-purple-500" /> },
        { label: 'Your orders', action: '/yourOrders', icon: <RiShoppingBagFill className="text-fuchsia-500" /> },
        { label: 'Wishlist', action: '/wishlist', icon: <RiHeartFill className="text-red-500" /> },
        { label: 'Premium', action: '/premium', icon: <RiBookmark3Fill className="text-yellow-400" /> },
    ];

    const activeUser = localStorage.getItem('loggedUser');

    return (
        <>
            <nav className="w-full fixed top-0 z-10 p-4 xl:px-20 flex flex-row justify-between items-start md:items-center bg-white">
                <div className="flex justify-between items-start lg:items-center flex-col md:flex-row w-full md:w-[70%] lg:w-[60%] xl:w-[60%] gap-4">
                    <div className="flex">
                        <div
                            className="font-inter text-sm font-semibold cursor-pointer"
                            onClick={() => navigate("/")}
                        >
                            IKart
                        </div>
                    </div>

                    <div id="links-container" className='hidden xl:flex gap-8'>
                        {navLinks.links.map((link, index) => (
                            <NavItem key={index} label={link.label} url={link.url} className='font-inter font-medium text-sm hover:text-purple-500 duration-300 transition-all ' />
                        ))}
                    </div>

                </div>

                <div className="hidden xl:flex justify-end">
                    <div id="btns-container" className='flex gap-8'>

                        {
                            activeUser === "true" ? (
                                <div className="flex gap-8">
                                    <SideSlider
                                        setShowSlider={setShowSlider}
                                        showSlider={showSlider}
                                        icon={<RiShoppingCartFill className="w-6 h-6 text-black" />}
                                        title='Your cart'
                                        content={<CartSlider />}
                                    />
                                    <ProfileDropdown options={options} />
                                </div>
                            ) : (
                                <>
                                    <Link className="rounded-full bg-purple-500 border border-purple-500 text-white px-4 py-1 hover:bg-transparent hover:text-purple-500 transition-all duration-300" to={'/login'} >Sign in</Link>

                                    <Link className="rounded-full border-purple-500 border bg-transparent text-purple-500 px-4 py-1 transition-all duration-300 hover:bg-purple-500 hover:text-white" to={'/signup'} >Signup</Link>
                                </>
                            )
                        }

                    </div>
                </div>

                <div className="flex xl:hidden gap-4 items-end">
                    {
                        activeUser === "true" &&
                        <>
                            <SideSlider
                                setShowSlider={setShowSlider}
                                showSlider={showSlider}
                                icon={<RiShoppingCartFill className="w-6 h-6 text-black" />}
                                title='Your cart'
                                content={<CartSlider />}
                            />

                        </>
                    }

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                        onClick={() => setOpenNav(!openNav)}
                    >
                        <path
                            strokeLinecap="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        />
                    </svg>

                </div>
            </nav>
            {openNav && <MenuSlider openNav setOpenNav={setOpenNav} />}
        </>
    );
};

export default Navbar;
