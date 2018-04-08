import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import PostsIndex from './components/posts_index';
import reducers from './reducers';

import { BrowserRouter, Route } from 'react-router-dom';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Route path='/' component={PostsIndex} />

      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
