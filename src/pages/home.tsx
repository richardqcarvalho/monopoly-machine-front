import { Button } from '@component/button'
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
      <Button onClick={logout}>Logout</Button>
    </div>
  )
}
