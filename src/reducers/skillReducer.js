import { requestStates } from "../constants";

export const actionTypes = {
  initial: 'INITIAL',
  fetch: 'FETCHING',
  success: 'FETCH_SUCCESS',
  error: 'FETCH_ERROR'
};

export const initialState = {
  languageList : [],
  requestState: requestStates.idle,
}

// 省略
export const skillReducer = (
  state, action
) => {
  switch(action.type) {
    case actionTypes.initial: {
    }
    case actionTypes.fetch: {
    }
    case actionTypes.success: {
    }
    case actionTypes.error: {
    }
    default: {
      throw new Error();
    }
  }
};
