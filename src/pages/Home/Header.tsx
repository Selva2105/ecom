import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="grid py-8 px-4 mx-auto max-w-screen-xl lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="place-self-center mr-auto lg:col-span-7">
                    <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none md:text-xl xl:text-5xl dark:text-white">Indian No.1 Ecommerce</h1>
                    <p className="mb-6 max-w-2xl font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">From ordering from an un acthorized users now start buying from an authorized indian seller.</p>
                    <Link to={'/products'} className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-purple-400 hover:bg-purple-400 focus:ring-4 focus:ring-purple-200 dark:text-white dark:border-purple-700 dark:hover:bg-purple-700 dark:focus:ring-purple-800 transition-all duration-300 hover:text-white">
                        Get started
                    </Link>
                </div>
                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup" />
                </div>
            </div>
        </section>
    )
}

export default Header