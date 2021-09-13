import {
  GET_USER_CARDS,
  ADD_USER_CARD,
  DELETE_USER_CARD,
  USER_CARDS_LOADING,
} from "../actions/types";

const initialState = {
  notes: [],
  loading: false,
  error: [],
};

const userCardReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_CARDS:
      return {
        ...state,
        notes: action.payload,
        loading: false,
      };
    case DELETE_USER_CARD:
      return {
        ...state,
        notes: state.notes.filter((note) => note._id !== action.payload),
      };
    case ADD_USER_CARD:
      return {
        ...state,
        notes: [...state.notes, action.payload],
      };
    case USER_CARDS_LOADING:
      return {
        ...state,
        loading: true,
      };
    case DELETE_USER_CARD:
      return {
        ...state,
        notes: [],
      };
    default:
      return state;
  }
};

export default userCardReducer;
