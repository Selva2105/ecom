import React from 'react'
import Header from './Header'
import Sponser from './Sponser'
import Aboutus from './Aboutus'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <Header />
            <Sponser />
            <Aboutus />

            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                    <div className="mx-auto max-w-screen-sm text-center flex flex-col justify-center items-center">
                        <h2 className="mb-4 text-4xl font-extrabold leading-tight text-gray-900 dark:text-white">Start your free trial today</h2>
                        <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">Try our Platform for 30 days. No credit card required.</p>
                        <Link
                            to={''}
                            className=" w-2/4 rounded-md bg-purple-500 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-purple-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Get access
                        </Link>
                    </div>
                </div>
            </section>



        </>
    )
}

export default Home