import * as UploadApi from "../api/UploadRequest";

export const uploadImage = (data) => async (dispatch) => {
  try {
    console.log("Image upload successfull")
    await UploadApi.uploadImage(data);
  } catch (error) {
    console.log('Image Upload failed...',error);
  }
};
//video upload action
export const uploadVideo = (data) => async (dispatch) => {
  try {
    console.log("video upload successfull")
    await UploadApi.uploadVideo(data);
  } catch (error) {
    console.log('video Upload failed...',error);
  }
};

export const uploadPost = (data) => async (dispatch) => {
  dispatch({ type: "UPLOAD_START" });
  try {
    const newPost =await UploadApi.uploadPost(data);
    dispatch({ type: "UPLOAD_SUCCESS", data: newPost.data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "UPLOAD_FAIL" });
  }
};
