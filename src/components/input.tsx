import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

export const Input = (
  props: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > & { label?: string; error?: boolean },
) => {
  const { label, error, id, className, placeholder, onChange, value, ...rest } =
    props

  return (
    <div className='relative'>
      {label && (
        <label
          htmlFor={id}
          className={twMerge(
            clsx(
              'absolute -top-2.5 left-3 bg-blue-900 px-1 py-0.5 text-xs text-white',
              {
                'text-rose-400': error,
              },
            ),
          )}
        >
          {label}
        </label>
      )}
      <input
        id={id}
        className={twMerge(
          clsx(
            'w-64 rounded-md border border-white bg-blue-900 px-4 py-3 text-sm text-white outline-none placeholder:text-white/50',
            { 'border-rose-400 text-rose-400': error },
            className,
          ),
        )}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        {...rest}
      />
    </div>
  )
}
