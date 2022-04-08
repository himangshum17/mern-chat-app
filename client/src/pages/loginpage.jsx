import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, FormInput } from '../components';
const initialFormData = {
  email: '',
  password: '',
};
const Loginpage = () => {
  const [loginFormData, setLoginFormData] = useState(initialFormData);
  const handleInputChange = e => {
    const { name, value } = e.target;
    setLoginFormData({ ...loginFormData, [name]: value });
  };
  const handleFormSubmit = async e => {
    e.preventDefault();

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    console.log(loginFormData);

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/user/login`,
        loginFormData,
        config
      );
    } catch (error) {
      console.log(error.message);
    }
    setLoginFormData(initialFormData);
  };
  return (
    <section className='flex h-screen w-full items-center justify-center bg-gray-800 py-16'>
      <div className='w-full max-w-xl rounded-md bg-gray-100 px-6 py-8'>
        <h1 className='text-2xl'>Lets Connect</h1>
        <form className='mt-6 grid gap-4' onSubmit={handleFormSubmit}>
          <FormInput
            label='Email address'
            type='email'
            id='email'
            name='email'
            placeholder='Enter your Email address'
            value={loginFormData.email}
            onChange={handleInputChange}
          />
          <FormInput
            label='Password'
            type='password'
            id='password'
            name='password'
            placeholder='Enter your Password'
            value={loginFormData.password}
            onChange={handleInputChange}
          />
          <Button extraclassName='justify-self-start' type='submit'>
            Login
          </Button>
        </form>
        <p className='mt-6 text-base text-gray-600'>
          Don't have an account?{' '}
          <Link to='/register' className='font-bold text-blue-600 underline'>
            Create a new Account
          </Link>
        </p>
      </div>
    </section>
  );
};
export default Loginpage;
