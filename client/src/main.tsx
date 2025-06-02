import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { BrowserRouter } from 'react-router';
import { BooksProvider } from './components/contexts/BooksContext.tsx';

createRoot(document.getElementById('root') as HTMLDivElement).render(
  <BooksProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </BooksProvider>
)
