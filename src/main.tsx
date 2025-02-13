import { StrictMode } from 'react'
import { hydrateRoot, createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

const rootElement = document.getElementById('root')

// If the root element has children, hydrate it (for pre-rendered content)
if (rootElement?.hasChildNodes()) {
  hydrateRoot(rootElement, 
    <StrictMode>
      <App />
    </StrictMode>
  );
} else {
  // Otherwise create a new root (for client-side rendering)
  createRoot(rootElement!).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}