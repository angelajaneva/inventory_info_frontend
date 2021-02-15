import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';

import { ConfigProvider } from 'antd';
import ptBR from 'antd/lib/locale-provider/pt_BR';

import App from './App';
import Messages from './components/Custom/theme/messages';

import { Provider } from 'react-redux';
import store from './redux/store/store';

import './i18next';

ReactDOM.render(
    <ConfigProvider locale={ptBR}>
        <Provider store={store}>
            <Suspense fallback="loading">
                <App />
            </Suspense>
            <Messages/>
        </Provider>
    </ConfigProvider>,
    document.getElementById('root'));
