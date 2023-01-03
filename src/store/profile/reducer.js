import * as types from './types';

const initialState = {
  name: 'Biba',
  visible: true
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

    default:
      return state
  }
}

export default profileReducer;