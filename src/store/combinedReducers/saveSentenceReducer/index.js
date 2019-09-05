import  {
  SAVE_SENTENCE_BEGIN,
  SAVE_SENTENCE_SUCCESS,
  SAVE_SENTENCE_FAILURE
} from '../../actions/fetchFeatures';

const globalState = {
  loading: true,
  error: false
};


export default function saveSentenceReducer(state = globalState, action) {
switch(action.type) {
  case SAVE_SENTENCE_BEGIN:
    return {
      ...state,
      loading: true,
      error: false
    };

  case SAVE_SENTENCE_SUCCESS:
    return {
      loading: false,
      error: false,
      data: action.payload
    };

  case SAVE_SENTENCE_FAILURE:
    return {
      ...state,
      loading: false,
      error: action.payload
    };

  default:
    return state;
  }
}