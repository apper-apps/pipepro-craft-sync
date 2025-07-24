import React from "react";
import { cn } from "@/utils/cn";

const Button = React.forwardRef(({ 
  className, 
  variant = "primary", 
  size = "default", 
  children, 
  ...props 
}, ref) => {
  const baseClasses = "inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-primary hover:bg-primary-700 text-white shadow-md hover:shadow-lg focus:ring-primary",
    accent: "bg-accent hover:bg-accent-600 text-white shadow-lg hover:shadow-xl focus:ring-accent animate-pulse",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary",
    ghost: "text-secondary-700 hover:bg-secondary-50 focus:ring-secondary"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    default: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg font-bold",
    xl: "px-10 py-5 text-xl font-bold"
  };

  const classes = cn(
    baseClasses,
    variants[variant],
    sizes[size],
    className
  );

  return (
    <button className={classes} ref={ref} {...props}>
      {children}
    </button>
  );
});

Button.displayName = "Button";

export default Button;