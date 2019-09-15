import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import App from './components/App/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import reducer from './components/store/reducer';
import { BrowserRouter } from 'react-router-dom';

const store = createStore(reducer);

ReactDOM.render(<Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();