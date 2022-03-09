import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../hooks/useAuth';

const AddAdmin = () => {
    const {handleSubmit, register, reset} = useForm();
    const {handlereg, loading, error} = useAuth()
    const submit = data => {
       console.log(data)
       handlereg(data.email, data.password, data.displayName);
       reset()
    }
    return (
        <div className='md:ml-44 md:pl-5'>
            <div className='w-4/12 p-5 shadow-md border rounded-md mt-20 mx-auto bg bg-white'>
            <div>
            <h1 className='text-2xl'>Add admin</h1>
            <hr className='h-1 mt-5 rounded-full bg-green-500' />
            </div>
              <form onSubmit={handleSubmit(submit)}>
                <label><br />
                <span className='mb-3'>Name</span><br />
                <input 
                {...register("displayName")}
                type="text" 
                placeholder='john wirde' 
                className='mb-5 mt-3 w-full px-2 py-2 rounded-sm border focus:ring-2 ring-yellow-500 outline-none' 
                required
                />
                </label>
                <label><br />
                <span>Email</span><br />
                <input 
                {...register("email")}
                type="email" 
                placeholder='email@gmail.com' 
                className='mb-5 mt-3 w-full px-2 py-2 rounded-sm border focus:ring-2 ring-yellow-500 outline-none' 
                required
                />
                </label>
                <label><br />
                <span>Password</span><br />
                <input 
                {...register("password")}
                type="text" 
                placeholder='john wirde' 
                className='mb-5 mt-3 w-full px-2 py-2 rounded-sm border focus:ring-2 ring-yellow-500 outline-none' 
                required
                />
                </label>
                {
                    loading && <p className='text-green-500'>loading....</p>
                }
                {
                      error && <p className='text-red-500'>{error}</p>                    
                }
                <button className='py-1 bg-green-500 text-white w-full mt-5 rounded-sm focus:bg-green-700'>Add Admin</button>
              </form>
            </div>
        </div>
    );
};

export default AddAdmin;