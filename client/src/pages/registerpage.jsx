import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button, FormInput } from '../components';
const validationSchema = yup
  .object({
    name: yup.string().required('Name is required'),
    email: yup
      .string()
      .required('Email Address is required')
      .email('Email Address is not valid'),
    password: yup.string().required('Password is required'),
    confirmpassword: yup
      .string()
      .required('Confirm Password is required')
      .oneOf(
        [yup.ref('password')],
        'Password and confirm passwords does not match'
      ),
  })
  .required();
const Registerpage = () => {
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
    const { name, email, password } = formData;
    const payload = { name, email, password };
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/user`,
        payload,
        config
      );
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
            label='Full name'
            type='text'
            id='name'
            name='name'
            placeholder='Enter Full name'
            register={register}
            error={errors.name?.message}
          />
          <FormInput
            label='Email address'
            type='email'
            id='email'
            name='email'
            placeholder='Enter Email address'
            register={register}
            error={errors.email?.message}
          />
          <FormInput
            label='Password'
            type='password'
            id='password'
            name='password'
            placeholder='Enter password'
            register={register}
            error={errors.password?.message}
          />
          <FormInput
            label='Confirm password'
            type='password'
            id='confirmpassword'
            name='confirmpassword'
            placeholder='Enter Confirm password'
            register={register}
            error={errors.confirmpassword?.message}
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
              'Register'
            )}
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
