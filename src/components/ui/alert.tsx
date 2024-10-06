import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { TriangleAlertIcon, InfoIcon, XCircleIcon, MessageCircleMoreIcon } from 'lucide-react' // Import icons
import { cn } from '@/lib/utils'

const alertVariants = cva(
  'relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4',
  {
    variants: {
      variant: {
        default: 'bg-gray-50 text-foreground text-gray-600',
        destructive: 'border-destructive/50 text-destructive',
        warning: 'border-amber-400 bg-amber-50 text-amber-500 ',
        info: 'border-blue-500 bg-blue-50 text-blue-500 ',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

// Function to render icon with color based on variant
const renderIcon = (variant: string) => {
  switch (variant) {
    case 'default':
      return <MessageCircleMoreIcon />
    case 'warning':
      return <TriangleAlertIcon className='text-amber-500' />
    case 'info':
      return <InfoIcon className='text-blue-500' />
    case 'destructive':
      return <XCircleIcon className='text-red-500' />
    default:
      return null
  }
}

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div ref={ref} role='alert' className={cn(alertVariants({ variant }), className)} {...props}>
    {renderIcon(variant || 'default')}
    <div className='ml-2'>{props.children}</div>
  </div>
))
Alert.displayName = 'Alert'

const AlertTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('my-1 font-medium leading-none tracking-tight', className)}
      {...props}
    />
  )
)
AlertTitle.displayName = 'AlertTitle'

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('text-sm [&_p]:leading-relaxed', className)} {...props} />
))
AlertDescription.displayName = 'AlertDescription'

export { Alert, AlertTitle, AlertDescription }
