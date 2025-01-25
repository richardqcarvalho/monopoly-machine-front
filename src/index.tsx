import { Router } from '@/router'
import { createRoot } from 'react-dom/client'
import './index.css'

const root = document.getElementById('root') as HTMLElement

createRoot(root).render(<Router />)
