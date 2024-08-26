import { cva, type VariantProps } from 'class-variance-authority';

const ButtonVariants = cva(
  'h-fit text-white uppercase transition-colors duration-150 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary:
          'bg-green-600 hover:bg-green-700',
        danger:
          'bg-red-600 hover:bg-red-700',
        default:
          'bg-gray-600 hover:bg-gray-700',
      },
      size: {
        small: ['text-sm', 'py-1', 'px-2'],
        medium: ['text-base', 'py-2', 'px-4'],
        large: ['text-lg', 'py-4', 'px-8'],
      },
      roundness: {
        square: 'rounded-none',
        round: 'rounded-md',
        pill: 'rounded-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'medium',
      roundness: 'round'
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof ButtonVariants> {
  asChild?: boolean
}

export default function Button({ type, variant, size, roundness, children, ...props }: ButtonProps) {
  return (
    <button {...props} type={type} className={ButtonVariants({ variant, size, roundness })}>{children}</button>
  )
}
