import * as types from './types';

const initialState = {
  name: 'Biba',
  visible: true,
  isAuth: false
}

const profileReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.CHANGE_NAME:
      return {
        ...state,
        name: payload
      };

    case types.TOGGLE_PROFILE:
      return {
        ...state,
        visible: !state.visible
      };

    case types.IS_AUTH:
      return {
        ...state,
        isAuth: payload
      };

    default:
      return state
  }
}

export default profileReducer;