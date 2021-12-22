import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query'
import Index from './pages';

import './App.css';
const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <header>
          
        </header>
        <main>
          <Index />
        </main>
      </div>
    </QueryClientProvider>
  );
}

export default App;
