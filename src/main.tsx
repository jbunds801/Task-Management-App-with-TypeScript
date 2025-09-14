import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Auth0ProviderWithNavigate from './auth/Auth0Provider.tsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Auth0ProviderWithNavigate>
      <App />
    </Auth0ProviderWithNavigate>
  </BrowserRouter>
)
