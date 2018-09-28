import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import registerServiceWorker from './registerServiceWorker';
import { createLogger } from 'redux-logger'
import ReduxThunk from 'redux-thunk'
import reducers from './reducers';

const logger = createLogger({
  diff: true,
  logErrors: true,  
})

const store = createStore(reducers,    
  {},
  compose(
    applyMiddleware(ReduxThunk, logger),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ) 
);

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
 document.getElementById('root'));
registerServiceWorker();
