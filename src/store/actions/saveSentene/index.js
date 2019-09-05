export const SAVE_SENTENCE_BEGIN   = 'SAVE_SENTENCE_BEGIN';
export const SAVE_SENTENCE_SUCCESS = 'SAVE_SENTENCE_SUCCESS';
export const SAVE_SENTENCE_FAILURE = 'SAVE_SENTENCE_FAILURE';


export function saveSentence(sentence) {
  return dispatch => {
    dispatch(saveSentenceBegin());
    if(sentence) {
      dispatch(saveSentenceSuccess(sentence))
    } else {
      dispatch(saveSentenceFailure('error'))
    }
   };
}

export const saveSentenceBegin = () => ({
  type: SAVE_SENTENCE_BEGIN
});

export const saveSentenceSuccess = (data) => ({
  type: SAVE_SENTENCE_SUCCESS,
  payload: data
});

export const saveSentenceFailure = (err) => ({
  type: SAVE_SENTENCE_FAILURE,
  payload:  err
});