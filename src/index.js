import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ToastContainerNotification } from './utils/notifications';
import './style.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <>
        <App />
        <ToastContainerNotification />
    </>
);
