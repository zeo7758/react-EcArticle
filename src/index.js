import React from 'react';
import ReactDOM from 'react-dom';
// import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux'
import RouterMap from './router/index'
import store from './store/store'
import './common/style/reset.css'
import './common/style/common.less'
import './common/style/markdown.less'
import './common/util';


ReactDOM.render(
    <Provider store={store}>
        <RouterMap/>
    </Provider>,
    document.getElementById('root')
);
// registerServiceWorker();
