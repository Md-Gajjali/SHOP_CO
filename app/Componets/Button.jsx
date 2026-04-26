"useClient"
import { cva } from 'class-variance-authority'
import { cn } from '../lib/utils'
import React from 'react'

const buttonVariants = cva(
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 active:scale-95",
    {
        variants: {
            variant: {
                default: "bg-blue-600 text-white hover:bg-blue-700 px-5 py-4 shadow",
                destructive: "bg-red-500 text-white hover:bg-red-600 shadow-sm",
                outline: "border border-gray-300 bg-transparent hover:bg-gray-100 text-gray-700",
                ghost: "hover:bg-gray-100 text-gray-700",
                link: "text-blue-600 underline-offset-4 hover:underline",
            },
            size: {
                default: "h-10 px-4 py-2",
                sm: "h-8 px-3 text-xs",
                lg: "h-12 px-8 text-lg",
                icon: "h-10 w-10",
            }, defaultVariants: {
                variant: "default",
                size: "default",
            },
        }
    }
)

const Button = React.forwardRef(({ className, variant, size, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
});

Button.displayName = "Button";

export { Button, buttonVariants };