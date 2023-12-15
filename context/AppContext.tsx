'use client';

import {
  createContext,
  useContext,
  ReactNode,
  Dispatch,
  useReducer
} from 'react';
import { State, Action } from '../types';
import { initialState, reducer } from '../shared/reducer';

type Props = { children: ReactNode };

type Context = {
  state: State;
  dispatch: Dispatch<Action>;
};

const context = createContext<Context>({
  state: initialState,
  dispatch: () => {}
});

export default function AppContext({ children }: Props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  // slides the page to the top

  return (
    <context.Provider
      value={{
        state,
        dispatch
      }}>
      {children}
    </context.Provider>
  );
}

export function useAppContext(): Context {
  return useContext(context);
}
