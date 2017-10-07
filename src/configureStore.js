import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';
import { createLogger } from 'redux-logger';
import { persistStore, autoRehydrate } from 'redux-persist';
import { AsyncStorage } from 'react-native';

import rootReducer from './index-reducer';

const middlewares = [];

const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);

if (process.env.NODE_ENV === 'development') {
  const logger = createLogger();
  middlewares.push(logger);
}

export default (initialState) => {
  const composeEnhancers = compose;
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(...middlewares),
      autoRehydrate(),
    ),
  );
  // install saga run
  store.runSaga = sagaMiddleware.run;
  store.close = () => store.dispatch(END);

  AsyncStorage.clear();

  // initial redux-persist
  const opt = {
    storage: AsyncStorage,
    transform: [],
  };
  persistStore(store, opt);
  return store;
};
