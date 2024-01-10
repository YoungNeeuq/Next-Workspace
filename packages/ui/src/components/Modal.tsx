import React from "react";

interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
  children: React.ReactNode;
  height?: string;
  width?: string;
  backgroundColor?: string;
  borderRadius?: string;
  closeIcon?: React.ReactNode;
  textColor?: string; // Thêm textColor
}

export const Modal: React.FC<ModalProps> = ({
  isVisible,
  onClose,
  children,
  height,
  width,
  backgroundColor,
  borderRadius,
  closeIcon,
  textColor,
}) => {
  if (!isVisible) return null;

  const handleClose = (e: any) => {
    if (e.target.id === "wrapper") onClose();
  };

  const modalStyles: React.CSSProperties = {
    height: height || "auto",
    width: width || "600px",
    backgroundColor: backgroundColor || "white",
    borderRadius: borderRadius || "4px",
    color: textColor || "black",
  };

  return (
    <div
      id="wrapper"
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
      onClick={handleClose}
    >
      <div style={modalStyles} className="flex flex-col">
        <div className="p-2 rounded">
          {closeIcon && (
            <button
              className="text-xl place-self-end cursor-pointer float-end mr-2"
              onClick={onClose}
            >
              {closeIcon}
            </button>
          )}
          {children}
        </div>
      </div>
    </div>
  );
};
