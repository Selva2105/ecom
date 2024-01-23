import React, { useState } from 'react';
import { Button, Checkbox, Label, Spinner, TextInput } from 'flowbite-react';
import { useForm, Controller } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { RiGoogleFill } from 'react-icons/ri';

const Login = () => {
    // React Hook Form setup
    const { handleSubmit, control, formState: { errors } } = useForm();

    // State variables
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setsuccessMessage] = useState("");

    // React Router navigation hook
    const navigate = useNavigate();

    // Form submission handler
    const onSubmit = async (data: any) => {
        try {
            setLoading(true);

            // User details are stored as an array of objects in local storage
            const usersString = localStorage.getItem('users');
            const users = usersString ? JSON.parse(usersString) : [];

            // Check if the user exists and the password matches
            const user = users.find((userVal: any) => (
                data.email === userVal.email && data.password === userVal.password
            ));

            if (user) {
                console.log('Login successful');
                setSuccessMessage("Hey chief, welcome back 🙋");
                localStorage.setItem("userLogged", "true")

                // Redirect to the home page after successful login with a delay
                setTimeout(() => {
                    navigate('/products');
                }, 2000);
            } else {
                setsuccessMessage("Hey chief, Invalid email or password ");
            }
        } catch (error) {
            console.error('An error occurred:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-gray-50 font-inter">
                <div className="max-w-lg w-full p-6 space-y-6 bg-white rounded-lg border-2 border-gray-200">
                    <h2 className="text-2xl font-bold text-center text-gray-900">LOGIN</h2>

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

                    {/* Display a welcome message if the user is logged in */}
                    {successMessage && <p className='text-sm text-center !my-2 text-green-500'>{successMessage}</p>}

                    {/* Display a failed message if the user gave wrong credentials */}
                    {errorMessage && <p className='text-sm text-center !my-2 text-red-500'>{errorMessage}</p>}

                    {/* Form for user login */}
                    <form onSubmit={handleSubmit(onSubmit)} className="">
                        {/* Email input field */}
                        <Controller
                            name="email"
                            control={control}
                            defaultValue=""
                            rules={{
                                required: 'Email is required',
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

                        {/* Password input field */}
                        <Controller
                            name="password"
                            control={control}
                            defaultValue=""
                            rules={{
                                required: 'Password is required',
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

                        {/* Remember me checkbox */}
                        <Controller
                            name="rememberMe"
                            control={control}
                            defaultValue={false}
                            render={({ field }) => (
                                <div className='flex flex-col !my-3'>
                                    <div className="flex items-center gap-2">
                                        <Checkbox id="rememberMe" {...field} />
                                        <Label htmlFor="rememberMe">Remember me</Label>
                                    </div>
                                </div>
                            )}
                        />

                        {/* Login button */}
                        <Button className='w-full mt-2' gradientMonochrome="purple" type='submit'>
                            {loading ? (
                                <>
                                    <Spinner aria-label="Alternate spinner button example" size="sm" />
                                    <span className="pl-3">Logging in...</span>
                                </>
                            ) : (
                                'Login'
                            )}
                        </Button>
                    </form>
                    <p className='text-sm'>Dont have an acount to continue ?<Link to={'/signup'} className='text-purple-500'> signup</Link></p>

                </div>
            </div>
        </>
    );
};

export default Login;
