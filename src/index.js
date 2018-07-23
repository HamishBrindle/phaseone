import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './index.css';
import App from './scenes/App';
import registerServiceWorker from './registerServiceWorker';

// Router
import { BrowserRouter } from 'react-router-dom';

// Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './redux/sagas';
import reducers from './redux/reducers'; 

const sagaMiddleware = createSagaMiddleware();

// Our redux store object
const store = createStore(
    reducers,
    compose(
      applyMiddleware(sagaMiddleware), 
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);

sagaMiddleware.run(
    rootSaga
);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
