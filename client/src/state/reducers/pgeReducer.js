import {
  SET_PAGE,
  SET_PAGE_FILTER,
  SET_PAGE_SORT,
  SET_PAGE_SEARCH,
  SET_PAGE_FORWARD,
  SET_PAGE_BACKWARD,
} from "../actions/types";

const initialState = {
  page: 1,
  pageSize: 9,
  allPosts: true,
  sortByDate: "DESC",
  search: "",
};

const formSwitchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PAGE:
      return {
        ...state,
        page: action.payload.page,
        pageSize: action.payload.pageSize,
      };
    case SET_PAGE_FILTER:
      return {
        ...state,
        allPosts: action.payload,
      };
    case SET_PAGE_SORT:
      return {
        ...state,
        sortByDate: initialState.sortByDate.replace(
          initialState.sortByDate,
          action.payload
        ),
      };
    case SET_PAGE_SEARCH:
      return {
        ...state,
        search: initialState.search.replace(
          initialState.search,
          action.payload
        ),
      };
    case SET_PAGE_FORWARD:
      return {
        ...state,
        page:
          initialState.page < action.payload
            ? ++initialState.page
            : action.payload,
      };
    case SET_PAGE_BACKWARD:
      return {
        ...state,
        page: initialState.page > 1 ? --initialState.page : 1,
      };

    default:
      return state;
  }
};

export default formSwitchReducer;
