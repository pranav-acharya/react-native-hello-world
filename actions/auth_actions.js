import { DUMMY_ACTION } from './types';

export const dummyAction = () => async dispatch => {
  dispatch({
    type: DUMMY_ACTION,
    payload: 'Something',
  });
};
