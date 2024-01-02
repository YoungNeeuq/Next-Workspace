import React, { ButtonHTMLAttributes } from 'react';

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'disabled';
  width?: string | number;
  height?: string | number;
  color?: string;
}

export const Button: React.FC<CustomButtonProps> = ({
                                                      children,
                                                      variant = 'secondary',
                                                      width,
                                                      height,
                                                      color,
                                                      ...props
                                                    }) => {
  const baseStyles = 'px-4 py-2 rounded focus:outline-none';

  let variantStyles: string;
  let disabled: boolean = false;

  switch (variant) {
    case 'primary':
      variantStyles = 'bg-blue-500 text-white';
      break;
    case 'secondary':
      variantStyles = 'bg-black text-white';
      break;
    case 'success':
      variantStyles = 'bg-green-500 text-white';
      break;
    case 'danger':
      variantStyles = 'bg-red-500 text-white';
      break;
    case 'warning':
      variantStyles = 'bg-yellow-500 text-white';
      break;
    case 'disabled':
      variantStyles = 'bg-[#e5e5e5] text-black cursor-not-allowed';
      disabled = true;
      break;
    default:
      variantStyles = 'bg-blue-500 text-white';
      break;
  }

  return (
    <button
      className={`${baseStyles} ${variantStyles}`}
      style={{ width, height, color }}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};