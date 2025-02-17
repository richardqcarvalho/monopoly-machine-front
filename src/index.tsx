import { ThemeProvider } from '@/components/theme-provider'
import { Router } from '@/routes'
import '@/styles/index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createRoot } from 'react-dom/client'

const root = document.getElementById('root') as HTMLElement
const queryClient = new QueryClient()

createRoot(root).render(
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <div className='flex h-svh w-screen flex-col items-center justify-center'>
        <Router />
      </div>
    </ThemeProvider>
  </QueryClientProvider>,
)
