import {
  GET_USER_CARDS,
  ADD_USER_CARD,
  DELETE_USER_CARD,
  USER_CARDS_LOADING,
} from "../actions/types";

const initialState = {
  cards: [
    {
      id: 1,
      title: "Title 1",
      text: "test",
      dateAdded: "12-24-2021",
      category: "Note",
    },
    {
      id: 2,
      title: "Title 2",
      text: "test 2",
      dateAdded: "15-24-2021",
      category: "Idea",
    },
    {
      id: 3,
      title: "Title 3",
      text: "test 3",
      dateAdded: "15-24-2021",
      category: "Idea",
    },
    {
      id: 4,
      title: "Title 4",
      text: "test 4",
      dateAdded: "15-24-2021",
      category: "Idea",
    },
  ],
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
        cards: state.cards.filter((note) => note._id !== action.payload),
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
    case DELETE_USER_CARD:
      return {
        ...state,
        cards: [],
      };
    default:
      return state;
  }
};

export default userCardReducer;
