import React from 'react';
import { RiShoppingCartFill } from 'react-icons/ri';
import { Button } from 'flowbite-react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { addToCart, removeFromCart } from '../features/user/cartSlice';
import { RootState } from '../app/store';
import { cardProps } from '../global.types';

const ProductCard: React.FC<cardProps> = ({ id, title, price, description, category, image, rating }) => {
  // Redux hooks for dispatch and selector
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state: RootState) => state.cart.cart);
  const activeUser = localStorage.getItem('loggedUser');

  // Check if the product is already in the cart
  const isProductInCart = cart.some(item => item.id === id);

  // Render stars based on the product's rating
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < Math.round(rating.rate); i++) {
      stars.push(
        <svg
          key={i}
          className="h-5 w-5 text-yellow-300"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }
    return stars;
  };

  // Truncate text to a specified length
  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
  };

  // Handle add to cart button click
  const handleAddToCart = () => {
    if (isProductInCart) {
      // Product is already in the cart, remove it
      dispatch(removeFromCart(id));
    } else {
      // Product is not in the cart, add it
      dispatch(addToCart({ id, title, price, description, category, image, rating }));
    }
  };

  return (
    <div className="">
      <div className="max-w-full md:max-w-[22rem] lg:max-w-[30rem] xl:max-w-[28rem] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

        <div className="h-64 w-full">
          {/* Product image */}
          <img className="rounded-t-lg h-full w-full object-contain" src={image} alt="" />
        </div>

        <div className="p-5 h-64">
          {/* Product category */}
          <span className="mb-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
            {category}
          </span>

          {/* Product title */}
          <h5 className="my-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{truncateText(title, 25)}</h5>

          {/* Product description */}
          <p className="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">{truncateText(description, 100)}</p>

          <div className="flex flex-row justify-between items-center">

            {/* Star rating */}
            <div className="mb-5 mt-2.5 flex items-center">
              {renderStars()}
              <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
                {rating.rate.toFixed(1)}
              </span>
            </div>

            {/* Product price */}
            <div className="items-center">
              <span className="text-xl font-bold text-gray-900 dark:text-white">${price}</span>

            </div>
          </div>

          {/* Add to cart button */}
          <Button
            onClick={handleAddToCart}
            className={`w-full bg-purple-700 rounded-lg hover:bg-purple-800 focus:ring-4 focus:outline-none dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800 py-2 ${isProductInCart ? 'focus:ring-red-300 ' : 'focus:ring-purple-300 '}`}
            gradientMonochrome={isProductInCart ? 'failure' : 'purple'}
            type="submit"
            disabled={activeUser === 'true' ? false : true}
          >
            <span className="flex flex-row items-center gap-4 ">
              {isProductInCart ? 'Remove from cart' : 'Add to cart'}
              <RiShoppingCartFill className="w-4 h-4" />
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
