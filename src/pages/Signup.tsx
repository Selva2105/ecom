import React, { useEffect, useState } from 'react';
import { Button, Label, Select, Spinner, TextInput } from 'flowbite-react';
import { useForm, Controller } from 'react-hook-form';
import { cityFetcher, stateFetcher } from '../utils/stateCityFetcher';
import { City, StateProps, UserData } from '../global.types';
import { RiGoogleFill } from "react-icons/ri";
import { Link } from 'react-router-dom';

const Signup: React.FC = () => {
    // Initialize react-hook-form
    const { handleSubmit, control, formState: { errors }, watch, setValue } = useForm<UserData>();

    // State for loading spinner
    const [loading, setLoading] = useState(false);

    // Form submission handler
    const onSubmit = async (data: UserData) => {
        try {
            setLoading(true);
            await new Promise(resolve => setTimeout(resolve, 4000));

            // Get existing user details from local storage
            const existingUsersString = localStorage.getItem('users');
            const existingUsers = existingUsersString ? JSON.parse(existingUsersString) : [];

            // Add the new user's details to the array
            existingUsers.push(data);

            // Store the updated array in local storage
            localStorage.setItem('users', JSON.stringify(existingUsers));

            // Reset form values
            setValue("userName", "");
            setValue("email", "");
            setValue("state", "");
            setValue("city", "");
            setValue("password", "");
        } catch (error) {
            console.error('An error occurred:', error);
        } finally {
            setLoading(false);
        }
    };

    // Fetch list of states for the country code 'IN'
    const stateList = stateFetcher('IN');
    const selectedState = watch("state");

    // State for holding the list of cities
    const [cityList, setCityList] = useState<City[]>([]);

    // Effect to fetch cities when the selected state changes
    useEffect(() => {
        if (selectedState) {
            const fetchedCities = cityFetcher('IN', selectedState);
            setCityList(fetchedCities);
        }
    }, [selectedState]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 font-inter">
            <div className="max-w-lg w-full p-6 space-y-6 bg-white rounded-lg border-2 border-gray-200">
                <h2 className="text-2xl font-bold text-center text-gray-900">SIGNUP</h2>

                <Button className='!border-purple-500 w-full !bg-transparent border text-black transition-colors duration-300 ease-out hover:!bg-purple-500 hover:text-white'>
                    <span className='flex justify-evenly items-center gap-4'>
                        <span><RiGoogleFill className='w-5 h-5' /></span>
                        <span className='text-sm'>continue with google</span>
                    </span>
                </Button>

                <div className="flex items-center mt-4">
                    <div className="flex-grow border-b border-gray-300"></div>
                    <span className="mx-4 text-gray-500">or</span>
                    <div className="flex-grow border-b border-gray-300"></div>
                </div>


                <form onSubmit={handleSubmit(onSubmit)} className="!m-0">
                    {/* Username Input */}
                    <Controller
                        name="userName"
                        control={control}
                        defaultValue=""
                        rules={{
                            required: 'Username is required',
                            pattern: {
                                value: /^[a-zA-Z][a-zA-Z0-9_@]*$/,
                                message: 'Invalid username format.',
                            },
                            minLength: {
                                value: 6,
                                message: 'Username should have 6 characters.',
                            },
                            maxLength: {
                                value: 12,
                                message: 'Username cannot exceed 12 characters.',
                            },
                        }}
                        render={({ field }) => (
                            <div className='flex flex-col !my-3'>

                                <div className="mb-2 flex flex-row justify-between">

                                    <Label htmlFor="userName" value="User name" />

                                    {errors.userName && (
                                        <span className="text-red-500 text-sm mb-2">{String(errors.userName.message)}</span>
                                    )}
                                </div>

                                <TextInput
                                    id='userName'
                                    color={errors.userName ? 'error' : field.value ? 'success' : 'default'}
                                    sizing="md"
                                    value={field.value}
                                    onChange={field.onChange}
                                    type="text"
                                    placeholder='Enter your user name'
                                    autoComplete="username"
                                />
                            </div>
                        )}
                    />

                    {/* Email Input */}
                    <Controller
                        name="email"
                        control={control}
                        defaultValue=""
                        rules={{
                            required: 'Email is required',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                message: 'Invalid email address',
                            },
                        }}
                        render={({ field }) => (
                            <div className="max-w-lg">
                                <div className="mb-2 flex flex-row justify-between">

                                    <Label htmlFor="email" value="Email" />

                                    {errors.email && (
                                        <span className="text-red-500 text-sm mb-2">{String(errors.email.message)}</span>
                                    )}
                                </div>


                                <TextInput
                                    id='email'
                                    color={errors.email ? 'error' : field.value ? 'success' : 'default'}
                                    sizing="md"
                                    value={field.value}
                                    onChange={field.onChange}
                                    type="email"
                                    placeholder='Enter your email'
                                    autoComplete="email"
                                />
                            </div>
                        )}
                    />

                    {/* State Select */}
                    <Controller
                        name="state"
                        control={control}
                        defaultValue=""
                        rules={{
                            required: 'State is required',
                        }}
                        render={({ field }) => (
                            <div className='flex flex-col !my-3'>

                                <div className="max-w-lg overflow-y-auto">
                                    <div className="mb-2 flex flex-row justify-between">

                                        <Label htmlFor='state' value="State" />

                                        {errors.state && (
                                            <span className="text-red-500 text-sm mb-2">{String(errors.state.message)}</span>
                                        )}
                                    </div>

                                    <Select id="state" className='w-full ' onChange={field.onChange} value={field.value}>
                                        <option value={''}>Select your state</option>
                                        {stateList.map((stateData: StateProps, index: number) => (
                                            <option key={index} value={stateData.stateCode}>{stateData.displayValue} - {stateData.stateCode}</option>
                                        ))}
                                    </Select>

                                </div>
                            </div>
                        )}
                    />
                    {/* City Select */}
                    <Controller
                        name="city"
                        control={control}
                        defaultValue=""
                        rules={{
                            required: 'city is required',
                        }}
                        render={({ field }) => (
                            <div className='flex flex-col !my-3'>

                                <div className="max-w-lg">
                                    <div className="mb-2 flex flex-row justify-between">

                                        <Label htmlFor='city' value="City" />

                                        {errors.city && (
                                            <span className="text-red-500 text-sm mb-2">{String(errors.city.message)}</span>
                                        )}
                                    </div>

                                    <Select id="city" className='w-full' onChange={field.onChange} value={field.value} >
                                        <option value={''}>Select your city</option>
                                        {cityList.map((cityData: { value: string, displayValue: string }, index: number) => (
                                            <option key={index} value={cityData.value}>{cityData.displayValue}</option>
                                        ))}

                                    </Select>
                                </div>
                            </div>
                        )}
                    />

                    {/* Password Input */}
                    <Controller
                        name="password"
                        control={control}
                        defaultValue=""
                        rules={{
                            required: 'Password is required',
                            minLength: {
                                value: 8,
                                message: 'Password should be at least 8 characters.',
                            },
                            maxLength: {
                                value: 16,
                                message: 'Password cannot exceed 16 characters.',
                            },
                        }}
                        render={({ field }) => (
                            <div className='flex flex-col !my-3'>

                                <div className="mb-2 flex flex-row justify-between">

                                    <Label htmlFor="password" value="Password" />

                                    {errors.password && (
                                        <span className="text-red-500 text-sm mb-2">{String(errors.password.message)}</span>
                                    )}
                                </div>

                                <TextInput
                                    id='password'
                                    color={errors.password ? 'error' : field.value ? 'success' : 'default'}
                                    sizing="md"
                                    value={field.value}
                                    onChange={field.onChange}
                                    type="password"
                                    placeholder='Enter your password'
                                />
                            </div>
                        )}
                    />

                    {/* Submit Button */}
                    <Button className='w-full !mt-6' gradientMonochrome="purple" type='submit' >
                        {loading ?
                            <>
                                <Spinner aria-label="Alternate spinner button example" size="sm" />
                                <span className="pl-3">Creating...</span>
                            </> :
                            'Sign up'}
                    </Button>
                    
                </form>

                <p className='text-sm'>Already having an account ?<Link to={'/login'} className='text-purple-500'> login</Link></p>
            </div>
        </div>
    );
};

export default Signup;
