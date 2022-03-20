import {
  PROFILE_LIST_REQUEST,
  PROFILE_LIST_SUCCESS,
  PROFILE_LIST_FAIL,
  PROFILE_REQUEST,
  PROFILE_SUCCESS,
  PROFILE_FAIL,
} from '../constants/profileConstants';

export const profileListReducer = (
  state = { profiles: [] },
  action: { type: any; payload: any }
) => {
  switch (action.type) {
    case PROFILE_LIST_REQUEST:
      return { loading: true, profiles: [] };
    case PROFILE_LIST_SUCCESS:
      return { loading: false, profiles: action.payload };
    case PROFILE_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const profileReducer = (
  state = { profile: [] },
  action: { type: any; payload: any }
) => {
  switch (action.type) {
    case PROFILE_REQUEST:
      return { loading: true, profile: {} };
    case PROFILE_SUCCESS:
      return { loading: false, profile: action.payload };
    case PROFILE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
