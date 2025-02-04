import { Button } from '@component/button'
import { SignOut } from '@phosphor-icons/react'
import { useNavigate } from 'react-router'

export const Home = () => {
  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem('userId')

    navigate('/login')
  }

  return (
    <div className='flex h-screen w-screen flex-col items-center bg-blue-900'>
      <div className='flex w-full justify-end p-4'>
        <Button
          onClick={logout}
          className='rounded-full p-3'
        >
          <SignOut className='text-md' />
        </Button>
      </div>
    </div>
  )
}
