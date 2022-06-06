//import 'bootstrap/dist/css/bootstrap.min.css';
console.log(`the current env is ${process.env.NODE_ENV}`);
console.log(`the current ENV is ${ENV}`); // prod,dev,local

//-------------------------
import './App.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './redux/configureStore';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

//import routes from './routers';
//import { gentouActions } from './redux/reducers';

const store = configureStore();

//处理history  createBrowserHistory   createHashHistory
import { createBrowserHistory, createHashHistory } from 'history'
import { Fragment } from 'react';
const hashHistory = createHashHistory()
//const history = syncHistoryWithStore(hashHistory, store);

import { Header, Footer } from './components/layout';
import Main from './pages/main'

ReactDOM.render((
	<Provider store={store}>
		<Header></Header>
		<Main className="container-fluid h-100"></Main>
		<Footer></Footer>
	</Provider>
), document.getElementById('App'));