import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {ConfigProvider} from 'antd';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <ConfigProvider
        theme={{
            token: {
                colorPrimary: "#7e4e90",
                colorBgContainer: "#7e4e90",
                colorBgLayout:"#1F2937"
            },
        }}
    >
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </ConfigProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
