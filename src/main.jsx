import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';

// importing the store and provider from react-redux
import { store } from './redux/store.js'
import { Provider } from "react-redux";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* providing the store to out application */}
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
)
