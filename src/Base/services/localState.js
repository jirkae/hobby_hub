import { setAuthToken } from './restApi';

export function loadState() {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) { return undefined; }

    let state = JSON.parse(serializedState);
      setAuthToken(state.userReducer.user.id);

    return state
  } catch (error) {
    return undefined;
  }
}

export function saveState(state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (error) {
    // ignore errors
  }
}