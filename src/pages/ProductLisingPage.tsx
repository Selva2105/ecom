import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { RootState } from '../app/store';
import { fetchProduct } from '../features/products/productSlice';
import { Spinner, Tabs } from 'flowbite-react';
import ServerErrorPage from './ServerErrorPage';
import ProductCard from '../components/ProductCard';
import { cardProps } from '../global.types';

const ProductLisingPage = () => {

    const dispatch = useAppDispatch();
    const product = useAppSelector((state: RootState) => state.products.product);
    const status = useAppSelector((state: RootState) => state.products.status);
    const error = useAppSelector((state: RootState) => state.products.error);

    const url = "https://fakestoreapi.com";
    const endpoint = "/products";
    const query = "?limit=18";

    console.log((product));


    useEffect(() => {

        const fetchData = async () => {
            try {
                await dispatch(fetchProduct({ url, endpoint, query }));
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();

    }, [dispatch, url])

    const uniqueCategories: string[] = Array.from(new Set(product.map(product => product.category)));
    const categoryList = ['All', ...uniqueCategories]

    console.log(uniqueCategories);

    return (
        <div>
            {
                status === 'loading' ?
                    (
                        <div className="text-center min-h-screen flex justify-center items-center">
                            <Spinner aria-label="Extra large spinner example" size="xl" color='purple' />
                        </div>
                    ) :
                    (product.length > 0 &&
                        <>
                            <Tabs aria-label="Default tabs">
                                {
                                    categoryList.map((tabName: string, index: number) => (
                                        <Tabs.Item key={index} active={index === 0} title={tabName} className='active:border-none active::outline-none focus:!ring-transparent'>
                                            This is <span className="font-medium text-gray-800 dark:text-white">Profile tab's associated content</span>.
                                            Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
                                            control the content visibility and styling.
                                        </Tabs.Item>
                                    ))
                                }
                            </Tabs>
                            <div className="flex flex-row flex-wrap justify-between gap-6 px-4 py-4">
                                {product.map((data: cardProps, index: number) => (
                                    <ProductCard key={index} category={data.category} description={data.description} id={data.id} image={data.image} price={data.price} rating={data.rating} title={data.title} />
                                ))}
                            </div>
                        </>
                    )
            }

            {
                error && <ServerErrorPage />
            }
        </div>
    )
}

export default ProductLisingPage