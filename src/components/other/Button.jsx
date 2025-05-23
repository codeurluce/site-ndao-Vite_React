
const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  isLoading = false,
  disabled,
  ...props
}) => {
  const baseStyles = 'font-medium rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variantStyles = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'bg-amber-500 text-white hover:bg-amber-600 focus:ring-amber-400',
    outline: 'border border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500',
    ghost: 'text-gray-700 hover:bg-gray-100 focus:ring-gray-400',
    link: 'text-blue-600 underline hover:text-blue-800 focus:ring-blue-500 p-0'
  };

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };

  const loadingClass = isLoading ? 'opacity-70 cursor-not-allowed' : '';
  const disabledClass = disabled ? 'opacity-60 cursor-not-allowed pointer-events-none' : '';

  const buttonClasses = variant !== 'link'
    ? `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${loadingClass} ${disabledClass} ${className}`
    : `${baseStyles} ${variantStyles[variant]} ${loadingClass} ${disabledClass} ${className}`;

  return (
    <button
      className={buttonClasses}
      disabled={isLoading || disabled}
      {...props}
    >
      {isLoading ? (
        <span className="flex items-center justify-center">
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Chargement...
        </span>
      ) : children}
    </button>
  );
};

export default Button;
