'use client';

import { createContext, useContext, type ReactNode, Dispatch, useReducer } from 'react';
import type { State, Action } from '@/types';
import { initialState, reducer } from '@/shared/reducer';

type Props = { children: ReactNode };

type Context = { state: State; dispatch: Dispatch<Action> };

const context = createContext<Context>({
  state: initialState,
  dispatch: () => {}
});

export const AppContext = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <context.Provider value={{ state, dispatch }}>{children}</context.Provider>;
};

export const useAppContext = () => useContext(context);
