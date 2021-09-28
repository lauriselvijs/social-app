import {
  SET_PAGE,
  SET_PAGE_FILTER,
  SET_PAGE_SORT,
  SET_PAGE_SEARCH,
  SET_PAGE_FORWARD,
  SET_PAGE_BACKWARD,
} from "./types";

export const setPage =
  (page, pageSize = 9) =>
  async (dispatch) => {
    dispatch({ type: SET_PAGE, payload: { page, pageSize } });
  };

export const setPageForward = () => async (dispatch, getState) => {
  const { total_pages } = getState().card.meta;

  dispatch({ type: SET_PAGE_FORWARD, payload: total_pages });
};

export const setPageBackward = () => async (dispatch) => {
  dispatch({ type: SET_PAGE_BACKWARD });
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
