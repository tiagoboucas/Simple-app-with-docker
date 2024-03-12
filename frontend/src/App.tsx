import './App.css';
import MainScreen from './Routes/MainScreen';
import SetColor from './Routes/SetColor';
import { observer } from 'mobx-react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Layout from './components/Layout';

const App: React.FC = observer(() => {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <MainScreen />,
        },
        {
          path: "/color-1",
          element: <SetColor key="/color-1" number={0} />,
        },
        {
          path: "/color-2",
          element: <SetColor key="/color-2" number={1} />,
        },
      ],
    },
  ])

  return (
      <RouterProvider router={router} />
  )
});

export default App;
