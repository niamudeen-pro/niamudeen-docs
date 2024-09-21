import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ToastContainerNotification } from './utils/notifications';
import './style.css';
import { Provider } from 'react-redux';
import { store } from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <>
    <Provider store={store}>
        <App />
        <ToastContainerNotification />
    </Provider>
    </>
);
