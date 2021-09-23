import { FORM_SWITCH, SET_BODY, SET_CATEGORY } from "../actions/types";

const initialState = {
  openForm: false,
  body: "",
  category: "Note",
};

const formSwitchReducer = (state = initialState, action) => {
  switch (action.type) {
    case FORM_SWITCH:
      return {
        ...state,
        openForm: !action.payload,
      };
    case SET_BODY:
      return {
        ...state,
        body: initialState.body.replace(initialState.body, action.payload),
      };
    case SET_CATEGORY:
      return {
        ...state,
        category: initialState.category.replace(
          initialState.category,
          action.payload
        ),
      };
    default:
      return state;
  }
};

export default formSwitchReducer;
