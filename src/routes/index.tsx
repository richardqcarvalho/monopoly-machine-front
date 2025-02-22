import { CreateAccount } from '@/pages/create-account'
import { Home } from '@/pages/home'
import { Login } from '@/pages/login'
import { Room } from '@/pages/room'
import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router'

const PrivateRoute = () => {
  const playerId = localStorage.getItem('playerId')

  if (!playerId) return <Navigate to='/login' />

  return <Outlet />
}

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/login'
          element={<Login />}
        />
        <Route
          path='/create-account'
          element={<CreateAccount />}
        />
        <Route
          path='/'
          element={<PrivateRoute />}
        >
          <Route
            index
            element={<Home />}
          />
          <Route
            path='/room/:roomId'
            element={<Room />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
