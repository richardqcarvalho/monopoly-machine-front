import { CreateAccount } from '@/pages/create-account'
import { Home } from '@/pages/home'
import { Login } from '@/pages/login'
import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router'

const PrivateRoute = () => {
  const userId = localStorage.getItem('userId') as { userId?: string }

  if (!userId) return <Navigate to='/login' />

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
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
