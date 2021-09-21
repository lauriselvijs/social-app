import { FORM_SWITCH } from "../actions/types";

const initialState = {
  openForm: false,
};

const formSwitchReducer = (state = initialState, action) => {
  switch (action.type) {
    case FORM_SWITCH:
      return {
        ...state,
        openForm: !action.payload,
      };
    default:
      return state;
  }
};

export default formSwitchReducer;
