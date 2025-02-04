import { useNavigate } from 'react-router'

export const Home = () => {
  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem('userId')

    navigate('/login')
  }

  return (
    <div className='flex h-screen w-screen flex-col items-center bg-blue-900'>
      <span className='text-white'>Home</span>
      <button
        onClick={logout}
        className='cursor-pointer rounded-md border border-white bg-blue-900 px-4 py-3 text-sm text-white outline-none'
      >
        Logout
      </button>
    </div>
  )
}
