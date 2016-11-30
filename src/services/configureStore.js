import throttle from 'lodash/throttle';
import { createStore } from 'redux';

import reducers from '../reducers/reducers';

function stateThatShouldBeSaved(state) {
  const {
    user,
  } = state.userReducer;

  return {
    user,
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
      console.log('state:', state);
      const stateToSave = stateThatShouldBeSaved(state);
      saveState(stateToSave);
    }, 1000));
  }

  return store;
}
