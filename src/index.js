import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import Films from './containers/Films';
import configureStore from './store';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

const app = (
	<Provider store={configureStore()}>
    <Router>
      <div>
  		  <Route exact path='/' component={App} />
        <Route path='/films' component={Films} />
      </div>
    </Router>
	</Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
