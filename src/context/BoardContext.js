import React from 'react';
import { initialState } from '../reducer/Board';

const BoardContext = React.createContext({
  state: initialState,
  dispatch: () => {},
});

export default BoardContext;
