import React from 'react';

const Card = ({
  children,
  className = '',
  hoverable = false,
  borderTop = false,
  borderColor = 'border-red-500'
}) => {
  const hoverClass = hoverable ? 'hover:shadow-lg transition-shadow duration-300' : '';
  const borderTopClass = borderTop ? `border-t-4 ${borderColor}` : '';

  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden ${hoverClass} ${borderTopClass} ${className}`}>
      {children}
    </div>
  );
};

export const CardHeader = ({ children, className = '' }) => {
  return <div className={`p-4 border-b ${className}`}>{children}</div>;
};

export const CardContent = ({ children, className = '' }) => {
  return <div className={`p-4 ${className}`}>{children}</div>;
};

export const CardFooter = ({ children, className = '' }) => {
  return <div className={`p-4 bg-gray-50 ${className}`}>{children}</div>;
};

export default Card;
