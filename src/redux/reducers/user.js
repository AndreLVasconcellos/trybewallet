import { SAVE_EMAIL } from '../actions';

const INITIAL_STATE = {
  email: '',
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SAVE_EMAIL:
    return ({ ...state, email: action.value });
  default:
    return state;
  }
}

export default user;
