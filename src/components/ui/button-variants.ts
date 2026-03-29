import { cva, type VariantProps } from 'class-variance-authority'

/**
 * Default filled button matches your reference stack:
 * `shadow-btn-default` / `hover:shadow-btn-hover` / `active:shadow-btn-active`,
 * `bg-primary-700` → `hover/active:bg-primary-800`, `focus-visible:ring-primary-100`,
 * disabled: `bg-primary-200` + `shadow-xs`.
 *
 * All variants share `rounded-md` (= theme `calc(var(--radius) - 2px)`). Override with e.g. `rounded-none` where needed.
 */
export const buttonVariants = cva(
  'inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-[color,background-color,box-shadow,transform] duration-150 focus-visible:outline-none disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default:
          'border border-transparent bg-primary-700 text-primary-foreground shadow-btn-default hover:bg-primary-800 hover:shadow-btn-hover active:translate-y-[0.5px] active:bg-primary-800 active:shadow-btn-active focus-visible:ring-4 focus-visible:ring-primary-100 disabled:cursor-not-allowed disabled:bg-primary-200 disabled:text-muted-foreground disabled:opacity-100 disabled:shadow-xs disabled:hover:shadow-xs disabled:active:translate-y-0',
        destructive:
          'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 focus-visible:ring-2 focus-visible:ring-destructive/30 disabled:opacity-50 disabled:shadow-none',
        outline:
          'border border-border bg-background text-foreground shadow-btn-default hover:bg-accent hover:text-accent-foreground hover:shadow-btn-hover active:translate-y-[0.5px] active:shadow-btn-active focus-visible:ring-4 focus-visible:ring-primary/20 disabled:opacity-50 disabled:shadow-xs disabled:active:translate-y-0',
        secondary:
          'border border-transparent bg-secondary text-secondary-foreground shadow-btn-default hover:shadow-btn-hover hover:bg-secondary/80 active:translate-y-[0.5px] active:shadow-btn-active focus-visible:ring-4 focus-visible:ring-ring/25 disabled:opacity-50',
        /** Primary CTA on the black header (e.g. Dashboard) - same green as hero CTAs. */
        header:
          'shrink-0 border border-[rgba(31,35,40,0.25)] bg-[#1f883d] text-[13px] font-semibold text-white shadow-btn-default hover:border-[rgba(31,35,40,0.35)] hover:bg-[#1a7f37] hover:shadow-btn-hover active:translate-y-[0.5px] active:bg-[#1a7f37] active:shadow-btn-active focus-visible:ring-4 focus-visible:ring-[#1f883d]/40 disabled:cursor-not-allowed disabled:bg-primary-200 disabled:text-muted-foreground disabled:opacity-100 disabled:shadow-xs disabled:hover:shadow-xs disabled:active:translate-y-0',
        inverse:
          'bg-foreground text-background shadow-sm hover:bg-foreground/90 focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50',
        ghost:
          'hover:bg-accent hover:text-accent-foreground focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50',
        link: 'text-primary no-underline shadow-none active:translate-y-0 hover:underline focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50',
        success:
          'border border-[rgba(31,35,40,0.2)] bg-[#1f883d] text-white shadow-btn-default hover:bg-[#1a7f37] hover:shadow-btn-hover active:translate-y-[0.5px] active:shadow-btn-active focus-visible:ring-4 focus-visible:ring-[#1f883d]/35 disabled:cursor-not-allowed disabled:bg-primary-200 disabled:text-muted-foreground disabled:shadow-xs disabled:hover:shadow-xs disabled:active:translate-y-0',
      },
      size: {
        default: 'h-9 px-4 py-2 text-sm',
        sm: 'h-8 px-3 text-xs',
        lg: 'h-max px-5 py-3 text-base',
        icon: 'h-9 w-9',
        'icon-sm': 'h-8 w-8',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export type ButtonVariantProps = VariantProps<typeof buttonVariants>
