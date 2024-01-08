import React, { HTMLAttributes } from 'react';

interface CustomTableCellProps extends HTMLAttributes<HTMLTableCellElement> {
  isHeader?: boolean;
  headerColor?:  "light" | "primary" | "secondary" | "success" | "danger" | "warning" | "dark" | "info";
}

const colorMap: Record<'primary' | 'warning' | 'danger' | 'light' | 'success' | 'secondary' | 'dark' | 'info' , string> = {
  'primary': 'bg-[#007bff]',
  'warning': 'bg-[#ffc107]',
  'danger': 'bg-[#dc3545]',
  'light': 'bg-[#f8f9fa]',
  'success': 'bg-[#28a745]',
  'secondary': 'bg-[#6c757d]',
  'dark': 'bg-[#343a40]',
  'info': 'bg-[#17a2b8]',
};

export const TableCell: React.FC<CustomTableCellProps> = ({
  children,
  isHeader = false,
  headerColor,
  className,
  ...props
}) => {
  const baseStyles = 'border border-slate-400 border-t-0 border-x-0';
  const cellStyles = isHeader ? 'font-bold text-xl py-3' : '';
  const headerColorStyles = isHeader && headerColor
    ? `${colorMap[headerColor]} text-white`
    : '';

  return React.createElement(
    isHeader ? 'th' : 'td',
    {
      className: `${baseStyles} ${cellStyles} ${headerColorStyles} ${className}`,
      ...props,
    },
    children
  );
};
interface CustomTableRowProps extends HTMLAttributes<HTMLTableRowElement> {

}

export const TableRow: React.FC<CustomTableRowProps> = ({ children, className, ...props }) => {

  return (
    <tr className={`last-row ${className}`} {...props}>
      {children}
    </tr>
  );
};