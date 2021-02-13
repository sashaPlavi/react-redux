import { FETCH_POSTS, NEW_POSTS } from './types';

export const fectPost = () => {
  return function (dispatch) {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((posts) =>
        dispatch({
          type: FETCH_POSTS,
          payload: posts,
        })
      );
  };
};
