import { ThemeProvider } from '@/components/theme-provider'
import { Router } from '@/routes'
import '@/styles/index.css'
import { createRoot } from 'react-dom/client'

const root = document.getElementById('root') as HTMLElement

createRoot(root).render(
  <ThemeProvider>
    <Router />
  </ThemeProvider>,
)
