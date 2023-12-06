import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBWlptHYmnw4T8jLfDgjthKI43PkYJS_38",
  authDomain: "ecommerce-capybara.firebaseapp.com",
  projectId: "ecommerce-capybara",
  storageBucket: "ecommerce-capybara.appspot.com",
  messagingSenderId: "603436226943",
  appId: "1:603436226943:web:9c6bb0805604d90fa9e24a"
};
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
