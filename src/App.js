import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routes } from './router/Routes/Routes';

function App() {
  return (
    <div data-theme="cupcake" >
      <RouterProvider router={routes}>
      </RouterProvider>
    </div>
  );
}

export default App;
