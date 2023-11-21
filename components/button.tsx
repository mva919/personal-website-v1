import { cn } from "@/utils/cn";
import { VariantProps, cva } from "class-variance-authority";

const buttonVariants = cva(
  "rounded p-2 active:ring-2 transition-all focus:outline-none focus-visible:ring-2 active:ring-2 dark:ring-slate-50 ring-black",
  {
    variants: {
      variant: {
        outline:
          "border border-indigo-600 text-indigo-600 hover:bg-indigo-600/20",
        outlineSecondary: "border border-white text-white hover:bg-white/20",
      },
    },
    defaultVariants: {
      variant: "outline",
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = ({ children, variant, className, ...props }: ButtonProps) => (
  <button className={cn(buttonVariants({ variant }), className)} {...props}>
    {children}
  </button>
);

export default Button;
