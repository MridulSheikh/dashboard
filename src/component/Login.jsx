import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../hooks/useAuth';

const Login = () => {
    const [open, setOpen] = useState(false);
    const {handleSubmit, register} = useForm();
    const {handleLogin, error, loading} = useAuth();
    const login = data => {
        handleLogin(data.email, data.password)
    }
    return (
     <div className='w-screen'>
        <form onSubmit={handleSubmit(login)} className='w-3/12 mx-auto mt-36 bg-white p-5 rounded-md border'>
        <div className='mb-5'>
        <h1 className='text-xl '>Dashboard</h1>
        <hr className='mt-5 h-1 bg-green-500 rounded-full' />
        </div>
        <label>
        <span>Email</span><br />
        <input {...register('email')} type="email" placeholder='john@gmail.com' className='mt-3 mb-5 px-2 py-2 w-full outline-none border rounded-md' />
        </label>
        <label>
        <span>Password</span><br />
        <div className='mt-3 mb-5 px-2 py-2 w-full border rounded-md flex'>
        <input {...register('password')} type={open ? "text" : 'password'} placeholder='password' className='w-full outline-none' />
        <span onClick={()=>setOpen(!open)}>
        {
            open ?   <i class="fas fa-eye"></i> :  <i class="fas fa-eye-slash"></i>
        }
        </span>
        </div>
        </label>
        {
            error && <p className='text-red-500 my-5'>{error}</p>
        }
        {
            loading && <p className='text-green-500 my-5'>loading....</p>
        }
        <button className='mt-5 rounded-md bg-green-500 py-1 hover:bg-green-700 text-white w-full'>Login</button>
        </form>
     </div>
    );
};

export default Login;