import * as React from 'react'
import { cn } from '@/lib/utils'
import { EyeIcon, EyeOffIcon } from 'lucide-react'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const PasswordInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = 'password', disabled, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false)

    const handleTogglePassword = () => {
      if (!disabled) {
        setShowPassword(!showPassword)
      }
    }

    return (
      <div className='relative'>
        <input
          type={showPassword ? 'text' : 'password'}
          className={cn(
            'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-300 focus-visible:ring-offset-0 placeholder:text-gray-300 disabled:cursor-not-allowed disabled:opacity-50 pr-10',
            disabled && 'cursor-not-allowed opacity-50',
            className
          )}
          ref={ref}
          disabled={disabled}
          {...props}
        />
        <button
          type='button'
          onClick={handleTogglePassword}
          className={cn(
            'absolute inset-y-0 right-0 flex items-center px-3',
            disabled && 'opacity-50 cursor-not-allowed'
          )}
          disabled={disabled}
        >
          {showPassword ? (
            <EyeOffIcon className={cn('h-5 w-5 text-zinc-500', disabled && 'text-zinc-400')} />
          ) : (
            <EyeIcon className={cn('h-5 w-5 text-zinc-500', disabled && 'text-zinc-400')} />
          )}
        </button>
      </div>
    )
  }
)
PasswordInput.displayName = 'PasswordInput'

export { PasswordInput }
