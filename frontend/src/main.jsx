import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { routes } from './routes/AllRoutes'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { Provider } from "react-redux";
// import { store } from "./store";

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <Provider store={store}>
    <React.StrictMode>
      {/* <App /> */}
      <RouterProvider router={router} />
    </React.StrictMode>
  // </Provider>
)
