import React from 'react';
import { RiDeleteBin6Fill } from "react-icons/ri";
import formatDateTime from '../utils/DateConversion';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { RootState } from '../app/store';
import { cardProps } from '../global.types';
import { removeFromCart, updateQuantity } from '../features/user/cartSlice';
import {  Select } from 'flowbite-react';
import { Link } from 'react-router-dom';

const CartSlider = () => {
    const today = new Date();
    const formattedDate = formatDateTime(today);
    const dispatch = useAppDispatch();
    const cart = useAppSelector((state: RootState) => state.cart.cart);

    const handleDelete = (itemId: number) => {
        dispatch(removeFromCart(itemId));
    };

    const handleQuantityChange = (itemId: number, newQuantity: number) => {
        dispatch(updateQuantity({ id: itemId, quantity: newQuantity }));
    };

    const numbersArray = Array.from({ length: 10 }, (_, index) => index + 1);

    const total = cart.reduce((acc, item) => (item.totalPrice ? acc + item.totalPrice : acc), 0);

    return (
        <div className='flex flex-col justify-between h-full'>
            <div className='flex flex-col gap-4 overflow-y-auto max-h-[25rem]' style={{ maxHeight: '555px' }}>

                {cart.length === 0 ? (<> No product in cart</>) : (
                    <>
                        {cart.map((data: cardProps, index: number) => (
                            <div className='font-inter flex flex-row border-2 rounded-md border-gray-300 justify-between w-full bg-white ' key={index}>
                                <div className="w-2/5 h-44">
                                    <img src={data.image} alt="" className='w-full h-full rounded-l-md object-contain' />
                                </div>
                                <div className="w-full flex flex-col gap-2 p-4 justify-between">
                                    <h2 className='font-medium text-sm'>{data.title}</h2>
                                    <span className="mb-2 w-max rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
                                        {data.category}
                                    </span>
                                    <p className='text-[12px] text-green-600 mt-2'>{formattedDate}</p>

                                    <div className="w-full flex justify-between items-center gap-6">

                                        <div className="w-3/5">
                                            <p className='text-[12px] mt-2'>Price : ${data.totalPrice ? data.totalPrice : data.price} /piece</p>
                                        </div>

                                        <div className="w-1/3 flex items-center gap-2 justify-between">
                                            <Select
                                                id="quantity"
                                                className='w-full'
                                                value={data.quantity}
                                                onChange={(e) => handleQuantityChange(data.id, parseInt(e.target.value, 10))}
                                            >
                                                {numbersArray.map((number) => (
                                                    <option value={number} key={number}>{number}</option>
                                                ))}
                                            </Select>

                                            <RiDeleteBin6Fill className='text-red-500 cursor-pointer w-6 h-6' onClick={() => handleDelete(data.id)} />

                                        </div>

                                    </div>
                                </div>
                            </div>
                        ))}

                    </>
                )}

            </div>

            <div className="totalPrice fixed bottom-0 left-0 right-0 p-4 bg-white flex flex-row justify-between items-center">
                <p className='text-lg font-semibold'>Total : ${total}</p>
                <Link
                    to={''}
                    className=" w-max rounded-md px-4 text-base bg-purple-500 py-2 text-center font-semibold text-white shadow-sm hover:bg-purple-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Checkout
                </Link>
            </div>
        </div>
    );
}

export default CartSlider;
