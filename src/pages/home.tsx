import { Button } from '@/components/ui/button'
import { LogOut } from 'lucide-react'
import { useNavigate } from 'react-router'

export const Home = () => {
  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem('userId')

    navigate('/login')
  }

  return (
    <div className='flex h-screen w-screen flex-col items-center'>
      <div className='flex w-full justify-end p-4'>
        <Button
          onClick={logout}
          className='rounded-full p-3'
        >
          <LogOut className='text-md' />
        </Button>
      </div>
    </div>
  )
}
