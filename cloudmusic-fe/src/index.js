import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/index.less'
import 'normalize.css'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from '@/App';
import store from './store';
//用自定义的theme包裹
import { ThemeProvider } from 'styled-components';
import theme from './assets/theme/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ThemeProvider>

    </Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

