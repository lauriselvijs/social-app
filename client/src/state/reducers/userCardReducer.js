import {
  GET_USER_CARDS,
  ADD_USER_CARD,
  EDIT_USER_CARD,
  DELETE_USER_CARD,
  USER_CARDS_LOADING,
  CLEAR_STATE,
} from "../actions/types";

const initialState = {
  cards: [],
  meta: [],
  loading: false,
  error: [],
};

const userCardReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_CARDS:
      //console.log(action.payload.data[0].uuid);
      console.log(
        state.cards.filter((card) => card.uuid !== action.payload.data[0].uuid)
          .length > 0
      );
      return {
        ...state,
        cards:
          state.cards.filter(
            (card) => card.uuid === action.payload.data[0].uuid
          ).length > 0 && state.meta !== null
            ? state.cards
            : [...state.cards, ...action.payload.data],
        //meta: initialState.meta.replace(initialState.meta, action.payload.meta),
        meta: action.payload.meta,
        loading: false,
      };
    case DELETE_USER_CARD:
      return {
        ...state,
        cards: state.cards.filter((card) => card.uuid !== action.payload),
      };
    case ADD_USER_CARD:
      return {
        ...state,
        cards: [...state.cards, action.payload],
      };
    case USER_CARDS_LOADING:
      return {
        ...state,
        loading: true,
      };
    case EDIT_USER_CARD:
      return {
        ...state,
        loading: false,
      };
    case CLEAR_STATE:
      return {
        ...state,
        cards: [],
      };
    default:
      return state;
  }
};

export default userCardReducer;
