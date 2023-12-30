import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Routers/Routes';
import AuthProvider from './providers/AuthProvider';
import { Provider } from 'react-redux';
import store from './redux/store';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
    
    </AuthProvider>
  </React.StrictMode>,
)
