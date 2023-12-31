import React from 'react';
import ReactDOM from 'react-dom/client';
import "./style/index.css";
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

//* Routes
import Main from './routes/Main';
import Home from './routes/main/Home';
import Settings from './routes/main/Settings';
import SendPost from './routes/utility/SendPost';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/settings",
        element: <Settings/>
      },
      {
        path: "/utility/sendPost",
        element: <SendPost/>
      }
    ]
  },

]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
