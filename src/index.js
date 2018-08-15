/*eslint-disable import/default */
import 'babel-polyfill';//Consider using specifc polyfills, uses 50KB
import React from 'react'; 
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import  routes  from './routes';
import configureStore from './store/configureStore';
import {loadCourses} from './actions/courseActions';
import {loadAuthors} from './actions/authorActions';
import './styles/styles.css';       
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './components/App';

const store=configureStore();
store.dispatch(loadCourses());
store.dispatch(loadAuthors());

render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('app')
   
);


