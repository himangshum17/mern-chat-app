const FormInput = ({ register, error, ...otherFormInputProps }) => {
  // console.log(otherFormInputProps);
  return (
    <div>
      {otherFormInputProps.label && (
        <label
          className='text-sm leading-7 text-gray-600'
          htmlFor={otherFormInputProps.id}
        >
          {otherFormInputProps.label}
        </label>
      )}
      <input
        {...otherFormInputProps}
        {...register(`${otherFormInputProps.name}`)}
        className='w-full rounded border border-gray-300 bg-white py-1 px-3 text-sm leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out  focus:ring-2 focus:ring-indigo-500'
      />
      {error && (
        <span className='mt-1 block text-sm text-red-500' role='alert'>
          {error}
        </span>
      )}
    </div>
  );
};
export default FormInput;
