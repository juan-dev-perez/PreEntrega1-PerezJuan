import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Router from './components/Router/Router';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAnu8J7ByByZRO61qCzCZ4NKT1Y4w813uM",
  authDomain: "e-commerce-cd49b.firebaseapp.com",
  projectId: "e-commerce-cd49b",
  storageBucket: "e-commerce-cd49b.appspot.com",
  messagingSenderId: "830079986064",
  appId: "1:830079986064:web:65f0c7c726fd4b85906b15"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Router/>
  // </React.StrictMode>
);