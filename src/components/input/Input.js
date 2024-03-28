const Input = ({ type = 'text', ...props }) => {
   return (
      <input
         {...props}
         type={type}
         className='mt-1 w-full py-2 border pl-3 text-gray-500'
      />
   );
};

export default Input;
