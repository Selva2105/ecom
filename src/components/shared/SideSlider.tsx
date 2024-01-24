import { Button } from 'flowbite-react';
import React, { Dispatch, ReactNode, SetStateAction } from 'react';
import { RiCloseFill } from "react-icons/ri";
import { useAppSelector } from '../../app/hooks';
import { RootState } from '../../app/store';

interface SideSliderProps {
    showSlider: boolean;
    setShowSlider: Dispatch<SetStateAction<boolean>>;
    icon: ReactNode;
    title: ReactNode;
    content?: ReactNode;
}

const SideSlider: React.FC<SideSliderProps> = ({ setShowSlider, showSlider, icon, title, content = "Content goes here" }) => {

    const toggleSlider = () => {
        setShowSlider(!showSlider);
    };

    const cart = useAppSelector((state: RootState) => state.cart.cart);

    const cartLength = cart.length;
    console.log("cartLength", cartLength);


    return (
        <>
            <button title='Your cart' className='!bg-transparent !border-none relative px-2' onClick={toggleSlider}>
                {icon}
                {cartLength >= 0 && (
                    <span className="bg-red-500 text-white rounded-full w-4 h-4 absolute top-0 right-0 -mt-1 -mr-1 text-xs flex items-center justify-center">
                        {cartLength > 9 ? '9+' : cartLength === 0 ? 0 : cartLength}
                    </span>
                )}
            </button>

            <div
                className={`fixed top-0 right-0 bottom-0 left-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${showSlider ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            >
                <div className={`fixed top-0 right-0 bottom-0  w-2/5 p-4 bg-white shadow-lg rounded-l-md transition-transform transform ease-in-out ${showSlider ? 'translate-x-0' : 'translate-x-full'}`}>

                    <div className="flex justify-between flex-row items-center">
                        <h2 className='font-inter font-semibold text-base'>{title}</h2>
                        <Button onClick={toggleSlider} className='!border-none !bg-purple-500'>
                            <RiCloseFill className='h-4 w-4 text-white' />
                        </Button>

                    </div>

                    <div className="my-4">
                        {content}
                    </div>

                </div>
            </div>
        </>
    );
};

export default SideSlider;