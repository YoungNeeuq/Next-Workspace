import React, { SelectHTMLAttributes, ChangeEvent, useState, useEffect } from 'react';

interface Option {
  label: string;
  value: string;
}

interface CustomSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: Option[];
  onOptionChange?: (value: string) => void;
  fontSize?: string;
  color?: string;
  outline?: string;
  backgroundColor?: string;
  height?: string;
  width?: string;
}

export const Select: React.FC<CustomSelectProps> = ({
  options,
  onOptionChange,
  className,
  fontSize,
  color,
  outline,
  backgroundColor,
  height,
  width,
  ...props
}) => {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(undefined);

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setSelectedValue(selectedValue);
    if (onOptionChange) {
      onOptionChange(selectedValue);
    }
  };

  useEffect(() => {
    // Reset selectedValue when options change
    setSelectedValue(undefined);
  }, [options]);

  const baseStyles = 'p-4 rounded border cursor-pointer';

  const style: React.CSSProperties = {
    fontSize: fontSize || 'inherit',
    color: color || 'inherit',
    outline: outline || 'none',
    backgroundColor: backgroundColor || '',
    height: height || 'auto',
    width: width || '100%',
  };

  return (
    <select
      className={`${baseStyles} ${selectedValue ? 'active' : ''} ${className || ''}`}
      onChange={handleSelectChange}
      style={style}
      value={selectedValue}
      {...props}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};