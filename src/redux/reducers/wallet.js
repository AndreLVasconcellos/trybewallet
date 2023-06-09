import {
  SEARCH_SUCCESS,
  ADD_REGISTER,
  DELETE_REGISTER,
  EDIT_REGISTER,
  NEWEDITED_REGISTER,
  ADD_CURRENCIES,
  ACTION_TESTE,
} from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
  cotationCurrence: [],
  teste: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SEARCH_SUCCESS:
    return {
      ...state,
      currencies: Object.keys(action.data).filter((e) => e !== 'USDT') };
  case ADD_CURRENCIES:
    return {
      ...state,
      cotationCurrence: action.currencies };
  case ADD_REGISTER:
    return {
      ...state,
      expenses: [...state.expenses, action.expensive],
    };
  case DELETE_REGISTER:
    return {
      ...state,
      expenses: state.expenses.filter(({ id }) => id !== action.value),
    };
  case EDIT_REGISTER:
    return {
      ...state,
      editor: true,
      idToEdit: action.id,
    };
  case NEWEDITED_REGISTER:
    return {
      ...state,
      editor: false,
      idToEdit: 0,
      expenses: action.teste,
    };
  case ACTION_TESTE:
    return {
      ...state,
      teste: action.teste123,
    };
  default:
    return state;
  }
}

export default wallet;
