import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { RootState } from '../app/store';
import { fetchProduct } from '../features/products/productSlice';
import { Spinner } from 'flowbite-react';
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