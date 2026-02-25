import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import WindowContext from './context/WindowContext.jsx'

createRoot(document.getElementById('root')).render(
    <WindowContext>
        <App />
    </WindowContext>
)
