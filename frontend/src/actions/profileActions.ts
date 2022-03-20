import axios from 'axios';
import {
  PROFILE_LIST_REQUEST,
  PROFILE_LIST_SUCCESS,
  PROFILE_LIST_FAIL,
  PROFILE_REQUEST,
  PROFILE_SUCCESS,
  PROFILE_FAIL,
} from '../constants/profileConstants';

export const listProfiles =
  () => async (dispatch: (arg0: { type: string; payload?: any }) => void) => {
    try {
      dispatch({ type: PROFILE_LIST_REQUEST });
      const { data } = await axios.get('/api/profiles');

      dispatch({
        type: PROFILE_LIST_SUCCESS,
        payload: data,
      });
    } catch (error: any) {
      dispatch({
        type: PROFILE_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const listProfile =
  (id: string) =>
  async (dispatch: (arg0: { type: string; payload?: any }) => void) => {
    try {
      dispatch({ type: PROFILE_REQUEST });
      const { data } = await axios.get(`/api/profiles/${id}`);

      dispatch({
        type: PROFILE_SUCCESS,
        payload: data,
      });
    } catch (error: any) {
      dispatch({
        type: PROFILE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
