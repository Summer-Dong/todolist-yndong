import { store } from '../index';

export const getStateFromLocalStorage = () => JSON.parse(localStorage.getItem('state')) || []

export const setStateInLocalStorage = () => {
  localStorage.setItem('state', JSON.stringify(store.getState()));
}
