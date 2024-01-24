import React from 'react';
import { Button } from 'flowbite-react';
import { RiCloseFill } from "react-icons/ri";
import { useAppSelector } from '../../app/hooks';
import { RootState } from '../../app/store';
import { SideSliderProps } from '../../global.types';

// SideSlider functional component
const SideSlider: React.FC<SideSliderProps> = ({ setShowSlider, showSlider, icon, title, content = "Content goes here" }) => {

    // Function to toggle the visibility of the slider
    const toggleSlider = () => {
        setShowSlider(!showSlider);
    };

    // Get the cart state from the Redux store
    const cart = useAppSelector((state: RootState) => state.cart.cart);

    // Calculate the length of the cart for displaying the notification badge
    const cartLength = cart.length;

    return (
        <>
            {/* Button to toggle the slider */}
            <button title='Your cart' className='!bg-transparent !border-none relative px-2' onClick={toggleSlider}>
                {icon}
                {/* Notification badge for the cart items */}
                {cartLength >= 0 && (
                    <span className="bg-red-500 text-white rounded-full w-4 h-4 absolute top-0 right-0 -mt-1 -mr-1 text-xs flex items-center justify-center">
                        {cartLength > 9 ? '9+' : cartLength}
                    </span>
                )}
            </button>

            {/* Slider container */}
            <div
                className={`fixed top-0 right-0 bottom-0 left-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${showSlider ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            >
                {/* Slider content */}
                <div className={`fixed top-0 right-0 bottom-0 w-full md:w-3/4 lg:w-3/5 xl:w-2/5 p-4 bg-white shadow-lg rounded-l-md transition-transform transform ease-in-out ${showSlider ? 'translate-x-0' : 'translate-x-full'}`}>

                    {/* Header of the slider */}
                    <div className="flex justify-between flex-row items-center">
                        <h2 className='font-inter font-semibold text-base'>{title}</h2>
                        {/* Close button */}
                        <Button onClick={toggleSlider} className='!border-none !bg-purple-500'>
                            <RiCloseFill className='h-4 w-4 text-white' />
                        </Button>
                    </div>

                    {/* Main content of the slider */}
                    <div className="my-4">
                        {content}
                    </div>

                </div>
            </div>
        </>
    );
};

export default SideSlider;
