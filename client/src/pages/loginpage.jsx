import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button, FormInput } from '../components';
const validationSchema = yup
  .object({
    email: yup
      .string()
      .required('Email Address is required')
      .email('Email Address is not valid'),
    password: yup.string().required('Password is required'),
  })
  .required();

const Loginpage = () => {
  const navigate = useNavigate();
  const formOptions = { resolver: yupResolver(validationSchema) };
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm(formOptions);
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);
  const onSubmit = async formData => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/user/login`,
        formData,
        config
      );
      navigate('/chat');
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <section className='flex h-screen w-full items-center justify-center bg-gray-800 py-16'>
      <div className='w-full max-w-xl rounded-md bg-gray-100 px-6 py-8'>
        <h1 className='text-2xl'>Lets Connect</h1>
        <form className='mt-6 grid gap-4' onSubmit={handleSubmit(onSubmit)}>
          <FormInput
            label='Email address'
            type='email'
            id='email'
            name='email'
            placeholder='Enter your Email address'
            register={register}
            error={errors.email?.message}
          />
          <FormInput
            label='Password'
            type='password'
            id='password'
            name='password'
            placeholder='Enter your Password'
            register={register}
            error={errors.password?.message}
          />
          <Button
            disabled={isSubmitting}
            extraClasses={`justify-self-start ${
              isSubmitting ? 'cursor-not-allowed' : ''
            }`}
            type='submit'
          >
            {isSubmitting ? (
              <>
                <svg
                  className='-ml-1 mr-3 h-5 w-5 animate-spin text-gray-700'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                >
                  <circle
                    className='opacity-25'
                    cx='12'
                    cy='12'
                    r='10'
                    stroke='currentColor'
                    strokeWidth='4'
                  ></circle>
                  <path
                    className='opacity-75'
                    fill='currentColor'
                    d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                  ></path>
                </svg>{' '}
                Processing...
              </>
            ) : (
              'Login'
            )}
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
