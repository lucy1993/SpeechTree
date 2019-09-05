
// fake data

import { data } from 'data'

export const FETCH_FEATURE_BEGIN   = 'FETCH_FEATURE_BEGIN';
export const FETCH_FEATURE_SUCCESS = 'FETCH_FEATURE_SUCCESS';
export const FETCH_FEATURE_FAILURE = 'FETCH_FEATURE_FAILURE';


export function fetchFeatures() {
  return dispatch => {
    dispatch(fetchFeaturesBegin());
    if(data) {
      dispatch(fetchFeaturesSuccess(data))
    } else {
      dispatch(fetchFeaturesFailure('error'))
    }
   };
}

export const fetchFeaturesBegin = () => ({
  type: FETCH_FEATURE_BEGIN
});

export const fetchFeaturesSuccess = (data) => ({
  type: FETCH_FEATURE_SUCCESS,
  payload: data
});

export const fetchFeaturesFailure = (err) => ({
  type: FETCH_FEATURE_FAILURE,
  payload:  err
});