const Button = ({ children, type = 'button', extraclassName }) => {
  return (
    <button
      type={type}
      className={`rounded border-0 bg-blue-600 py-2 px-6 text-lg text-white hover:bg-blue-700 focus:outline-none ${
        extraclassName ? extraclassName : ''
      }`}
    >
      {children}
    </button>
  );
};
export default Button;
