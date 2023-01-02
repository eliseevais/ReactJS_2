import * as types from '../profile/types';

const changeName = (data) => {
  return {
    type: types.CHANGE_NAME, 
    payload: data
  }
}

// const changeName = (data) => ({
//   type: types.CHANGE_NAME, 
//   payload: data
// })

export default changeName;