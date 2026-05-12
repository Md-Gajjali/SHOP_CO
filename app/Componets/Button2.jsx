"useclient"
import { cva } from 'class-variance-authority'
import { cn } from '../lib/utils'
import React from 'react'

const buttonVariants = cva(
    "flex justify-center items-center  ",
    // {
    //     variants:{
    //         variant:{
    //             default:""
    //         }
    //     }
    // }
    {
        variants: {
            variant: {
                default: "bg-blue-500 text-pink-300 hover:bg-black ",
                destructive: "bg-black text-white rounded-[62px] font-medium ",
                ShopBtn: "text-[#606060] bg-[#F0F0F0] hover:bg-black hover:text-white  rounded-[69px] ",
                ghost: " bg-black text-white rounded-[62px]"
            },
            size: {
                default: "h-10 px-4 py-2",
                sm: "h-8 px-3 text-xs",
                xm: "py-2.5 px-5 text-[14px] ",
                lg: "px-[67px] py-[15px]",
                xl: "px-[141px] py-[15px]"
            },

        }, defaultVariants: { // ৪. ডিফল্ট মান
            variant: "default",
            size: "default",
        },

    }
)

const Button2 = React.forwardRef(({ className, variant, size, children, ...props }, ref) => {
    return (
        <button
            ref={ref}
            className={cn(buttonVariants({ className, variant, size }))}
            {...props}
        >
            {children}
        </button>
    )
})

Button2.displayName = "Button2"

export { Button2, buttonVariants };
