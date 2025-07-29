import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AdminPanel } from './AdminPanel'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AdminPanel/>
  </StrictMode>,
)
