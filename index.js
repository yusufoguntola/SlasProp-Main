import React from 'react'
import  { createRoot }  from 'react-dom/client';
import App from './src/App.js'
import { BrowserRouter } from 'react-router-dom';

// import store from './src/store/store.js';
// import { Provider } from 'react-redux';


const root = createRoot(document.getElementById('root'))

root.render(
//   <Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
// </Provider>, //

);