import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Projects from './components/Projects.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Projects />
  </StrictMode>,
)
