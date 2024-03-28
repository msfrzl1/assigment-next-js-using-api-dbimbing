const Label = ({ value, children, ...props }) => {
   return (
      <label
         className='block text-sm font-medium text-gray-700'
         {...props}
      >
         {value || children}
      </label>
   );
};

export default Label;
