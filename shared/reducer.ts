import actions from './actions';
import { Action, State } from '../types';

export const initialState: State = {
  isLanguagesModal: false
};

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case actions.LANGUAGES_MODAL:
      return { ...state, isLanguagesModal: action.payload.isLanguagesModal };

    default:
      return { ...state };
  }
}
