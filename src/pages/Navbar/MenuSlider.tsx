import React, { Dispatch, SetStateAction } from 'react'
import { navLinks } from '../../constants/navbarData';
import NavItem from './NavItem';
import { RiBookmark3Fill, RiHeartFill, RiShoppingBagFill, RiUser3Fill } from 'react-icons/ri';
import ProfileDropdown from '../../components/shared/ProfileDropdown';
import { Link } from 'react-router-dom';

interface sliderProps {
    openNav: boolean;
    setOpenNav: Dispatch<SetStateAction<boolean>>;
}

const MenuSlider: React.FC<sliderProps> = ({ openNav, setOpenNav }) => {

    const options = [
        { label: 'Profile', action: `/profile`, icon: <RiUser3Fill /> },
        { label: 'Your orders', action: '/yourOrders', icon: <RiShoppingBagFill /> },
        { label: 'Wishlist', action: '/wishlist', icon: <RiHeartFill /> },
        { label: 'Premium', action: '/premium', icon: <RiBookmark3Fill className="text-hunyadi_yellow-400" /> },
    ];

    const activeUser = localStorage.getItem('loggedUser');

    return (
        <div
            className={`w-full fixed top-0 p-4 gap-4 xl:hidden flex flex-row items-start z-20 bg-white transition-transform ${openNav ? 'transform translate-x-0' : 'transform translate-x-full '
                }`}
        >
            <div className="flex flex-col gap-4 w-full md:flex-row items-start md:items-center ">
                <div className="flex flex-col md:flex-row gap-6 w-full lg:justify-center">
                    {navLinks.links.map((link, index) => (
                        <NavItem key={index} label={link.label} url={link.url} className='font-inter font-medium text-sm' />
                    ))}
                </div>

                {
                    activeUser === "true" ? (
                        <div className="flex gap-8">
                            <ProfileDropdown options={options} />
                        </div>
                    ) : (
                        <div className='w-full md:w-2/5 lg:w-1/4 flex md:justify-between justify-start gap-4'>
                            <Link className="rounded-full bg-purple-500 border border-purple-500 text-white px-4 py-1 hover:bg-transparent hover:text-purple-500 transition-all duration-300" to={'/login'} >Sign in</Link>

                            <Link className="rounded-full border-purple-500 border bg-transparent text-purple-500 px-4 py-1 transition-all duration-300 hover:bg-purple-500 hover:text-white" to={'/signup'} >Signup</Link>
                        </div>
                    )
                }
            </div>

            <div className="closeSlider">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6"
                    onClick={() => setOpenNav(!openNav)}
                >
                    <path strokeLinecap="round" d="M6 18 18 6M6 6l12 12" />
                </svg>

            </div>

        </div>
    )
}

export default MenuSlider