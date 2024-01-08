import React, { InputHTMLAttributes } from 'react';

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: "light" | "primary" | "secondary" | "success" | "danger" | "warning" | "dark" | "info";
  width?: string | number;
  height?: string | number;
  color?: string;
  fontSize?: string;      
  borderRadius?: string;  
  outline?: string;     
}

export const Input: React.FC<CustomInputProps> = ({
  children,
  width,
  variant,
  height,
  color,
  fontSize,
  borderRadius,
  outline,
  className,
  ...props
}) => {
  const baseStyles = 'border px-4 py-2 rounded focus:outline-none';

  let variantStyles: string;

  switch (variant) {
    case 'primary':
      variantStyles = 'bg-[#007bff] text-black px-4 py-2 text-green-500';
      break;
    case 'secondary':
      variantStyles = 'bg-[#6c757d] text-black px-4 py-2 text-green-500';
      break;
    case 'success':
      variantStyles = 'bg-[#28a745] text-black px-4 py-2 text-green-500';
      break;
    case 'danger':
      variantStyles = 'bg-[#dc3545] text-black px-4 py-2 text-green-500';
      break;
    case 'warning':
      variantStyles = 'bg-[#ffc107] text-black px-4 py-2 text-green-500';
      break;
    case 'info':
      variantStyles = 'bg-[#17a2b8] text-black px-4 py-2 text-green-500';
      break;
    case 'dark':
      variantStyles = 'bg-[#343a40] text-white px-4 py-2 text-green-500';
      break;
    case 'light':
      variantStyles = 'bg-[#f8f9fa] text-black px-4 py-2 text-green-500';
      break;
    default:
      variantStyles = 'border-slate-400 text-black px-4 py-2';
      break;
  }

  return (
    <input
      className={`${className} ${variantStyles} ${baseStyles}`}
      style={{ width, height, color, fontSize, borderRadius, outline }}
      {...props}
    />
  );
};
