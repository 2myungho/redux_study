import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import searchReducer from '../search/state';
import searchSage from '../search/state/saga';
import userSaga from '../user/state/saga';
import userReducer from '../user/state';

// const middleware_basic = store => next => action => {
//   console.log(action.type)
// }

const rootReducer = combineReducers({
  search: searchReducer,
  user: userReducer
});

const sagaMiddleware = createSagaMiddleware();
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

function* rootSaga() {
  yield all([searchSage(), userSaga()]);
}
sagaMiddleware.run(rootSaga);

export default store;
export type Store = ReturnType<typeof rootReducer>;
