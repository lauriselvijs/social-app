import {
  GET_USER_CARDS,
  ADD_USER_CARD,
  EDIT_USER_CARD,
  DELETE_USER_CARD,
  USER_CARDS_LOADING,
} from "../actions/types";

const initialState = {
  cards: [],
  loading: false,
  error: [],
};

const userCardReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_CARDS:
      return {
        ...state,
        cards: action.payload,
        loading: false,
      };
    case DELETE_USER_CARD:
      return {
        ...state,
        cards: state.cards.filter((card) => card.uuid !== action.payload),
      };
    case ADD_USER_CARD:
    case EDIT_USER_CARD:
      return {
        ...state,
        cards: [...state.cards, action.payload],
      };
    case USER_CARDS_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default userCardReducer;
