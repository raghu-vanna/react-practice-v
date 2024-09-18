import './App.css';
import { RouterProvider } from 'react-router-dom';
import { useState } from 'react';
import Routes from './routes';

function App() {


  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <RouterProvider router={Routes()} />
  );
}

export default App;
