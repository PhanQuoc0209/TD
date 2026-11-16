import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer select-none",
  {
    variants: {
      variant: {
        default: "bg-[#2563EB] text-white hover:bg-blue-700 active:scale-[0.98] shadow-sm hover:shadow-md",
        navy: "bg-[#172554] text-white hover:bg-[#1e3a8a] active:scale-[0.98] shadow-sm hover:shadow-md",
        accent: "bg-[#D97706] text-white hover:bg-amber-600 active:scale-[0.98] shadow-sm hover:shadow-md",
        outline: "border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 hover:border-slate-400 active:scale-[0.98]",
        outlineBlue: "border-2 border-[#2563EB] bg-transparent text-[#2563EB] hover:bg-blue-50 active:scale-[0.98]",
        secondary: "bg-blue-50 text-[#2563EB] hover:bg-blue-100 active:scale-[0.98]",
        ghost: "text-slate-700 hover:bg-slate-100 active:scale-[0.98]",
        white: "bg-white text-[#172554] hover:bg-blue-50 active:scale-[0.98] shadow-md",
        link: "text-[#2563EB] underline-offset-4 hover:underline p-0 h-auto",
      },
      size: {
        default: "h-11 px-5 py-2.5",
        sm: "h-9 rounded-md px-3 text-xs",
        lg: "h-12 rounded-lg px-7 text-base font-bold",
        xl: "h-14 rounded-xl px-8 text-lg font-bold shadow-lg",
        icon: "h-10 w-10 p-0 rounded-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
