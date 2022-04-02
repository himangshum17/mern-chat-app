import { Link } from 'react-router-dom';
import { Button, FormInput } from '../components';
const Registerpage = () => {
  return (
    <section className='flex h-screen w-full items-center justify-center bg-gray-800 py-16'>
      <div className='w-full max-w-xl rounded-md bg-gray-100 px-6 py-8'>
        <h1 className='text-2xl'>Lets Connect</h1>
        <form className='mt-6 grid gap-4'>
          <FormInput
            label='Email address'
            type='email'
            id='email'
            name='email'
            placeholder='Enter your Email address'
          />
          <FormInput
            label='Password'
            type='password'
            id='password'
            name='password'
            placeholder='Enter your Password'
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
