import {
  all, fork, takeLatest, delay, put,
} from 'redux-saga/effects';
import axios from 'axios';
import {
  ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE,
} from '../reducers/post';

function addPostAPI() {
  return axios.post('/posts');
}

function* addPost() {
  try {
    // yield call(addPostAPI);
    yield delay(2000);
    yield put({
      type: ADD_POST_SUCCESS,
    });
  } catch (e) {
    yield put({
      type: ADD_POST_FAILURE,
      error: e,
    });
  }
}

function* watchAddPost() {
  yield takeLatest(ADD_POST_REQUEST, addPost);
}

function addCommentAPI() {

}

function* addComment(action) {
  try {
    // yield call(addCommentAPI);
    yield delay(2000);
    yield put({
      type: ADD_COMMENT_SUCCESS,
      data: {
        postId: action.data.postId,
      },
    });
  } catch (e) {
    console.log('error', e);
    yield put({
      type: ADD_COMMENT_FAILURE,
      error: e,
    });
  }
}

function* watchAddComment() {
  yield takeLatest(ADD_COMMENT_REQUEST, addComment);
}

export default function* postSaga() {
  yield all([
    fork(watchAddPost),
    fork(watchAddComment),
  ]);
}
