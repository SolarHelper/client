import React, { forwardRef} from 'react';

type InputType = 'text' | 'email';

type InputProps = {
  name: string;
  type?: InputType;
  className: string;
  placeholder: string;
};

const CustomInput = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { name, type = 'text', className = '', placeholder, ...rest } = props;
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      className={className}
      ref={ref}
      {...rest}
    />
  );
});



export default CustomInput;
