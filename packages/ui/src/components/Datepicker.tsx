import React from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface CustomDatePickerProps {
  selectedDate: Date | null;
  onChange: (date: Date | null) => void;
  className?: string;
}

export const Datepicker: React.FC<CustomDatePickerProps> = ({
                                                              selectedDate,
                                                              onChange,
                                                              className
                                                                  }) => {
  return (
    <ReactDatePicker
      selected={selectedDate}
      onChange={onChange}
      dateFormat="dd/MM/yyyy"
      className={`px-4 py-3 rounded border-[1px] border-[#c4c4c4] ${className || ''}`}
    />
  );
};