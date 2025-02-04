export const Button = (
  props: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
) => {
  return (
    <button
      className='cursor-pointer rounded-md border border-white bg-blue-900 px-4 py-3 text-sm text-white transition outline-none hover:bg-white hover:text-blue-900'
      {...props}
    />
  )
}
