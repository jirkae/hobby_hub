import throttle from 'lodash/throttle';
import { createStore } from 'redux';

import reducers from '../reducers/allReducers';

function stateThatShouldBeSaved(state) {
  const {
    userReducer: { user },
  } = state;

  return {
    userReducer: { user },
  };
}

export function configureStore(preloadedState, saveState, middleware) {
  const store = createStore(
    reducers,
    preloadedState,
    middleware
  );

  if (saveState) {
    store.subscribe(throttle(() => {
      const state = store.getState();
      const stateToSave = stateThatShouldBeSaved(state);
      saveState(stateToSave);
    }, 1000));
  }

  return store;
}
