import React, { ButtonHTMLAttributes } from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "light" | "primary" | "secondary" | "success" | "danger" | "warning" | "disabled" | "dark" | "info";
  width?: string | number;
  height?: string | number;
  color?: string;
  hover?: string;
  icon?: IconDefinition;
  iconSize?: string;
  iconPosition?: 'before' | 'after';
  shape?: 'circle' | 'square' | 'rectangle' | 'parallelogram';
}

export const Button: React.FC<CustomButtonProps> = ({
  children,
  variant = 'primary',
  width,
  height,
  color,
  hover,
  icon,
  iconSize,
  iconPosition = 'before',
  shape,
  className,
  ...props
}) => {
  const baseStyles = 'px-4 py-2 rounded focus:outline-none';
  let variantStyles: string;
  let disabled: boolean = false;
  let shapeStyles: string;
  switch (shape) {
    case 'circle':
      shapeStyles = 'rounded-full';
      break;
    case 'square':
      shapeStyles = 'rounded-none';
      break;
    case 'rectangle':
      shapeStyles = 'rounded';
      break;
    case 'parallelogram':
      shapeStyles = 'transform skewX(-20deg)';
      break;
    default:
      shapeStyles = '';
  }


  switch (variant) {
    case 'primary':
      variantStyles = 'bg-[#007bff] text-white px-4 py-2';
      break;
    case 'secondary':
      variantStyles = 'bg-[#6c757d] text-white px-4 py-2';
      break;
    case 'success':
      variantStyles = 'bg-[#28a745] text-white px-4 py-2';
      break;
    case 'danger':
      variantStyles = 'bg-[#dc3545] text-white px-4 py-2';
      break;
    case 'warning':
      variantStyles = 'bg-[#ffc107] text-white px-4 py-2';
      break;
    case 'info':
      variantStyles = 'bg-[#17a2b8] text-white px-4 py-2';
      break;
    case 'dark':
      variantStyles = 'bg-[#343a40] text-white px-4 py-2';
      break;
    case 'light':
      variantStyles = 'bg-[#f8f9fa] text-white px-4 py-2';
      break;
    case 'disabled':
      variantStyles = 'bg-[#343a40] text-black cursor-not-allowed px-4 py-2';
      disabled = true;
      break;
    default:
      variantStyles = 'bg-[#007bff] text-white px-4 py-2';
      break;
  }

  return (
    <button
    className={`${baseStyles} ${variantStyles} ${hover} ${className} ${shapeStyles}`}
    style={{ width, height, color }}
    disabled={disabled}
    {...props}
  >
    {iconPosition === 'before' && icon && <FontAwesomeIcon icon={icon} className={`mr-2 ${iconSize}`} />}
      {children}
      {iconPosition === 'after' && icon && <FontAwesomeIcon icon={icon} className={`ml-2 ${iconSize}`} />}
  </button>
  );
};