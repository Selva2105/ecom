import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Avatar, Button } from 'flowbite-react';

interface Option {
  label: string;
  action: string;
  icon?: any;
}

interface ProfileDropdownProps {
  profile: string;
  options: Option[];
}

const ProfileDropdown: React.FC<ProfileDropdownProps> = ({ profile, options }) => {

  const [dropdownVisible, setDropdownVisible] = useState(false);
  const navigate = useNavigate()
  const dropdownRef = useRef<HTMLDivElement>(null);

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

  const handleProfileClick = () => {
    setDropdownVisible(!dropdownVisible);
  };
  const handleSignOut = async () => {
    try {
      localStorage.removeItemItem('userLogged');

      setTimeout(() => {
        navigate('/')
      }, 2500);

    } catch (error) {
      console.log(error);
    }
  };

  console.log();


  return (
    <div className="relative font-inter" ref={dropdownRef}>

      <Avatar img='https://www.elevenforum.com/data/attachments/82/82529-ade63e4209709292183f654907b168f5.jpg' status="online" statusPosition="top-right" className='bg-purple-500 cursor-pointer ring-purple-500 ring-offset-2 rounded-full' onClick={handleProfileClick} />

      {dropdownVisible && (
        <div className="absolute top-12 sm:left-0 md:left-auto md:right-0 bg-white border border-gray-200 p-2 rounded w-max">
          <ul className="list-none p-0 m-0">
            {options.map((option, index) => (
              <li key={index} className="cursor-pointer hover:bg-gray-100 p-2 rounded-lg flex flex-row justify-between items-center gap-6">
                <Link to={option.action} onClick={handleProfileClick} >
                  {option.label}
                </Link>
                {option.icon}
              </li>
            ))}
            <Button className='cursor-pointer rounded-lg bg-red-500 w-full hover:!bg-transparent hover:!text-red-500 text-white hover:!border-red-500 border-2' title='Sign out' onClick={handleSignOut} >
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