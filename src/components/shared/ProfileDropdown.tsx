import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Avatar, Button } from 'flowbite-react';
import { emptyCart, removeFromCart } from '../../features/user/cartSlice';
import { useAppDispatch } from '../../app/hooks';

// Define the structure of each dropdown option
interface Option {
  label: string;
  action: string;
  icon?: any;
}

// Define the properties for the ProfileDropdown component
interface ProfileDropdownProps {
  options: Option[];
}

// ProfileDropdown component
const ProfileDropdown: React.FC<ProfileDropdownProps> = ({ options }) => {

  // State to manage the visibility of the dropdown
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const navigate = useNavigate(); // React Router's navigation hook
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Effect to handle clicks outside the dropdown to close it
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownVisible(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  // Function to handle the click on the profile avatar
  const handleProfileClick = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const dispatch = useAppDispatch();

  // Function to handle the sign-out action
  const handleSignOut = async () => {
    try {
      localStorage.removeItem('loggedUser');
      // Dispatch the action to remove items from the cart
      dispatch(emptyCart([]));

      // Navigate to '/products' after a delay (2.5 seconds in this case)
      setTimeout(() => {
        navigate('/products');
      }, 2500);

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="relative font-inter" ref={dropdownRef}>

      {/* Avatar component representing the user's profile picture */}
      <Avatar img='https://www.elevenforum.com/data/attachments/82/82529-ade63e4209709292183f654907b168f5.jpg' status="online" statusPosition="top-right" className='bg-purple-500 cursor-pointer ring-purple-500 ring-offset-2 rounded-full' onClick={handleProfileClick} />

      {/* Dropdown menu to display options when the avatar is clicked */}
      {dropdownVisible && (
        <div className="absolute top-12 sm:left-0 md:left-auto md:right-0 bg-white border border-gray-200 p-2 rounded w-max">
          <ul className="list-none p-0 m-0">
            {/* Map through options and create list items for each */}
            {options.map((option, index) => (
              <li key={index} className="cursor-pointer hover:bg-gray-100 p-2 rounded-lg flex flex-row justify-between items-center gap-6">
                {/* Link to navigate to the specified action when the option is clicked */}
                <Link to={option.action} onClick={handleProfileClick}>
                  {option.label}
                </Link>
                {option.icon}
              </li>
            ))}
            {/* Button to handle the sign-out action */}
            <Button className='cursor-pointer rounded-lg bg-red-500 w-full hover:!bg-transparent hover:!text-red-500 text-white hover:!border-red-500 border-2' title='Sign out' onClick={handleSignOut}>
              <span className='flex flex-row items-center justify-between w-full'>
                Sign out
              </span>
            </Button>
          </ul>
        </div>
      )}

    </div>
  );
};

export default ProfileDropdown;
