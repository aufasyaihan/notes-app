import { ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

const Button = ({ children, className, ...props } : ButtonProps) => {
  return <button className={`px-4 py-2 m-2 rounded-md shadow-md font-semibold ${className}`} {...props}>{children}</button>;
}

export default Button;