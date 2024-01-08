import React, { TableHTMLAttributes } from "react";

interface CustomTableProps extends TableHTMLAttributes<HTMLTableElement> {
  tableBackground?: string;
}

export const Table: React.FC<CustomTableProps> = ({
  children,
  className,
  tableBackground,
  ...props
}) => {
  const baseStyles =
    "border-separate border-slate-400 w-[80%] max-w-full border-[1px] border-spacing-0 mx-auto";

  const tableStyles = {
    background: tableBackground,
  };

  return (
    <table
      className={`${className} ${baseStyles}`}
      style={tableStyles}
      {...props}
    >
      {children}
    </table>
  );
};
