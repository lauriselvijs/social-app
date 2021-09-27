import {
  SET_PAGE,
  SET_PAGE_FILTER,
  SET_PAGE_SORT,
  SET_PAGE_SEARCH,
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
        category: initialState.search.replace(
          initialState.search,
          action.payload
        ),
      };
    default:
      return state;
  }
};

export default formSwitchReducer;
