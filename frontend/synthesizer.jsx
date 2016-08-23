import React from 'react';
import {render} from 'react-dom';
import Note from './utils/note';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  let root = document.getElementById("root");
  render(<Root store={store}/>, root);
});
