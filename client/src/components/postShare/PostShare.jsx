import React, { useState, useRef } from "react";
import {
  FileInputContainer,
  PostOption,
  PostOptions,
  PostShareContainer,
  PreviewImg,
  PreviewImgContainer,
  ProfileAvatar,
  ShareBtn,
  ShareInput,
  ShareInputContainer,
} from "./styledComponents/StyledPostShare";
import {
  Close,
  CollectionsOutlined,
  PlaceOutlined,
  SentimentSatisfiedOutlined,
  VideoLibraryOutlined,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import {
  uploadImage,
  uploadPost,
  uploadVideo,
} from "../../redux/actions/UploadAction";

function PostShare() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer.authData);
  const loading = useSelector((state) => state.postReducer.uploading);
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);
  const desc = useRef();

  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;

  // handle Image Change
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage(img);
    }
  };

  const onVideoChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let vdeo = event.target.files[0];
      setVideo(vdeo);
    }
  };

  const imageRef = useRef();
  const videoRef = useRef();

  // handle post upload
  const handleUpload = async (e) => {
    e.preventDefault();

    //post data
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };

    // if there is an image with post
    if (image) {
      const data = new FormData();
      const fileName = Date.now() + image.name;
      data.append("name", fileName);
      data.append("file", image);
      newPost.image = fileName;
      console.log(newPost);
      try {
        dispatch(uploadImage(data));
      } catch (err) {
        console.log(err);
      }
    }
    // if there is an video with post
    if (video) {
      const data = new FormData();
      const fileName = Date.now() + video.name;
      data.append("name", fileName);
      data.append("file", video);
      newPost.video = fileName;
      console.log(newPost);
      try {
        dispatch(uploadVideo(data));
      } catch (err) {
        console.log(err);
      }
    }
    dispatch(uploadPost(newPost));
    resetShare();
  };

  // Reset Post Share
  const resetShare = () => {
    setImage(null);
    setVideo(null);
    desc.current.value = "";
  };
  return (
    <PostShareContainer>
      <ProfileAvatar
        src={
          user.profilePicture
            ? serverPublic + user.profilePicture
            : serverPublic + "defaultProfile.png"
        }
        alt="Profile"
      />
      <ShareInputContainer>
        <ShareInput
          type="text"
          placeholder="What's happening?"
          required
          ref={desc}
        />
        <PostOptions>
          <PostOption
            style={{ color: "#4cb256" }}
            onClick={() => imageRef.current.click()}
          >
            <CollectionsOutlined />
            Photo
          </PostOption>
          <PostOption
            style={{ color: "#4a4eb7" }}
            onClick={() => videoRef.current.click()}
          >
            <VideoLibraryOutlined />
            Video
          </PostOption>
          <PostOption style={{ color: "#ef5757" }}>
            <PlaceOutlined />
            Location
          </PostOption>
          <PostOption style={{ color: "#e1ae4a" }}>
            <SentimentSatisfiedOutlined />
            Feeling
          </PostOption>
          <ShareBtn
            sx={{ display: { sm: "flex", xs: "none" } }}
            disableRipple
            onClick={handleUpload}
            disabled={loading}
          >
            {loading ? "uploading" : "Share"}
          </ShareBtn>
          <FileInputContainer>
            <input type="file" ref={imageRef} onChange={onImageChange} />
          </FileInputContainer>
          <FileInputContainer>
            <input type="file" ref={videoRef} onChange={onVideoChange} />
          </FileInputContainer>
        </PostOptions>
        <ShareBtn
          sx={{ display: { xs: "flex", sm: "none" } }}
          disableRipple
          onClick={handleUpload}
          disabled={loading}
        >
          {loading ? "uploading" : "Share"}
        </ShareBtn>
        {image && (
          <PreviewImgContainer className="previewImage">
            {/* <SvgContainer> */}
            <Close onClick={() => setImage(null)} />
            {/* </SvgContainer> */}
            <PreviewImg src={URL.createObjectURL(image)} alt="preview" />
          </PreviewImgContainer>
        )}
        {video && (
          <PreviewImgContainer className="previewVideo">
            {/* <SvgContainer> */}
            <Close onClick={() => setVideo(null)} />
            {/* </SvgContainer> */}
            <video src={URL.createObjectURL(video)} alt="preview" />
          </PreviewImgContainer>
        )}
      </ShareInputContainer>
    </PostShareContainer>
  );
}

export default PostShare;
