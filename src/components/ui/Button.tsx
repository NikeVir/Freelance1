import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "rounded-[8px] px-[50px] py-[18px] text-white text-sm w-fit  ",
  {
    variants: {
      variant: {
        primary:
          "bg-[#05C067]",
        default:
          "bg-slate-900 text-slate-50 shadow hover:bg-slate-900/90 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90",
        destructive:
          "bg-red-500 text-slate-50 shadow-sm hover:bg-red-500/90 dark:bg-red-900 dark:text-slate-50 dark:hover:bg-red-900/90",
        outline:
          "p-[2px] bg-[#ffffff] shadow-outline",
        secondary:
          "px-8 py-2 h-fit text-sm  text-black bg-[#DEDEDE] font-light dark:bg-[#3A3A3A] dark:text-white border-b-2 border-black dark:border-white cursor-pointer",
        pinkg:"bg-[linear-gradient(286.17deg,#FF5A5F_0%,#FF8A9B_100%)] ",
        purple:"bg-[#AF52DE] ",
        yellowg:"bg-[linear-gradient(286.17deg,#FB9400_0%,#FFAB38_100%)]",
        blue:"bg-[linear-gradient(286.17deg,#246BFD_0%,#5089FD_100%)]",
        geenlg:"bg-[linear-gradient(133.32deg,#05C067_-18.1%,#50EA48_118.55%)]",
        white:"bg-[#ffffff] border-[#12111840] border-[1px] text-[#121118]",
        greendg:"bg-[linear-gradient(286.17deg,#019B83_0%,#18C6AB_100%)]",
        purpleg:"bg-[linear-gradient(286.17deg,#6949FF_0%,#876DFF_100%)]",
      }
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    
    return (
      <button
        className={cn(buttonVariants({ variant, className }))}
        ref={ref}
        {...props}
      >
        {variant==="outline"?
       ( <div className="bg-[linear-gradient(133.32deg,#05C067_-18.1%,#50EA48_118.55%)] px-[32px] py-[12px] rounded-[8px]" > {props.children}</div>):
        props.children
        }
    
    </button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
