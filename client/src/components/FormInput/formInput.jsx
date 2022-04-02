const FormInput = ({ label, ...otherFormInputProps }) => {
  return (
    <div>
      {label && (
        <label
          className='text-sm leading-7 text-gray-600'
          htmlFor={otherFormInputProps.id}
        >
          {label}
        </label>
      )}
      <input
        {...otherFormInputProps}
        className='w-full rounded border border-gray-300 bg-white py-1 px-3 text-sm leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out  focus:ring-2 focus:ring-indigo-500'
      />
    </div>
  );
};
export default FormInput;
