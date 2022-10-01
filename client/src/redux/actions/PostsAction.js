import * as PostsApi from "../api/PostsRequests";

export const getTimelinePosts = (id) => async (dispatch) => {
  dispatch({ type: "RETREIVING_START" });
  try {
    const { data } = await PostsApi.getTimelinePosts(id);
    dispatch({ type: "RETREIVING_SUCCESS", data: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "RETREIVING_FAIL" });
  }
};

export const commentPost = (value, id) => async (dispatch) => {
  try {
    const { data } = await PostsApi.comment(value, id);
    dispatch({ type: "COMMENT", payload: data });
    // console.log('data,commentsss',data.comments);
    return data.comments
  } catch (error) {
    console.log("error from post actionss comment", error);
  }
};
