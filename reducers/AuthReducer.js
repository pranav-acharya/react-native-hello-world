import { DUMMY_ACTION } from '../actions/types'

const INITIAL_STATE = null;

const AuthReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DUMMY_ACTION:
      return action.payload;
    default:
      return state;
  }
}

export default AuthReducer;