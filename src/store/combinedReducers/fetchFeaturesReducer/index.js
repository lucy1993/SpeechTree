import  {
  FETCH_FEATURE_BEGIN,
  FETCH_FEATURE_SUCCESS,
  FETCH_FEATURE_FAILURE
} from '../../actions/fetchFeatures';

const globalState = {
  loading: true,
  error: false
};


export default function createSegment(state = globalState, action) {
switch(action.type) {
  case FETCH_FEATURE_BEGIN:
    return {
      ...state,
      loading: true,
      error: false
    };

  case FETCH_FEATURE_SUCCESS:
    return {
      loading: false,
      error: false,
      data: action.payload
    };

  case FETCH_FEATURE_FAILURE:
    return {
      ...state,
      loading: false,
      error: action.payload
    };

  default:
    return state;
  }
}