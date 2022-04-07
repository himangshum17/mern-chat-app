import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, FormInput } from '../components';
const initialFormData = {
  name: '',
  email: '',
  password: '',
  confirmpassword: '',
};
const Registerpage = () => {
  const [registerFormData, setRegisterFormData] = useState(initialFormData);
  const handleInputChange = e => {
    const { name, value } = e.target;
    setRegisterFormData({ ...registerFormData, [name]: value });
  };
  const handleFormSubmit = async e => {
    e.preventDefault();

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const { name, email, password } = registerFormData;
    const payload = { name, email, password };

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/user`,
        payload,
        config
      );
    } catch (error) {
      console.log(error.message);
    }
    setRegisterFormData(initialFormData);
  };
  return (
    <section className='flex h-screen w-full items-center justify-center bg-gray-800 py-16'>
      <div className='w-full max-w-xl rounded-md bg-gray-100 px-6 py-8'>
        <h1 className='text-2xl'>Lets Connect</h1>
        <form className='mt-6 grid gap-4' onSubmit={handleFormSubmit}>
          <FormInput
            label='Full name'
            type='text'
            id='name'
            name='name'
            value={registerFormData.name}
            placeholder='Enter Full name'
            onChange={handleInputChange}
          />
          <FormInput
            label='Email address'
            type='email'
            id='email'
            name='email'
            value={registerFormData.email}
            placeholder='Enter Email address'
            onChange={handleInputChange}
          />
          <FormInput
            label='Password'
            type='password'
            id='password'
            name='password'
            value={registerFormData.password}
            placeholder='Enter password'
            onChange={handleInputChange}
          />
          <FormInput
            label='Confirm password'
            type='password'
            id='confirmpassword'
            name='confirmpassword'
            value={registerFormData.confirmpassword}
            placeholder='Enter Confirm password'
            onChange={handleInputChange}
          />
          <Button extraclassName='justify-self-start' type='submit'>
            Register
          </Button>
        </form>
        <p className='mt-6 text-base text-gray-600'>
          Already have an account?{' '}
          <Link className='font-bold text-blue-600 underline' to='/'>
            Login to your Account
          </Link>
        </p>
      </div>
    </section>
  );
};
export default Registerpage;
