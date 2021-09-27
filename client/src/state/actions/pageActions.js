import {
  SET_PAGE,
  SET_PAGE_FILTER,
  SET_PAGE_SORT,
  SET_PAGE_SEARCH,
} from "./types";

export const setPage = (page, pageSize) => async (dispatch) => {
  dispatch({ type: SET_PAGE, payload: page, pageSize });
};

export const setPageFilter = (allPosts) => async (dispatch) => {
  dispatch({ type: SET_PAGE_FILTER, payload: allPosts });
};

export const setPageSort = (sortByDate) => async (dispatch) => {
  dispatch({ type: SET_PAGE_SORT, payload: sortByDate });
};

export const setPageSearch = (search) => async (dispatch) => {
  dispatch({ type: SET_PAGE_SEARCH, payload: search });
};
