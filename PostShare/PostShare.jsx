import React, { useState, useRef } from "react";
// import "./PostShare.css";
import { SentimentSatisfiedOutlined } from "@mui/icons-material";
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";
import { useDispatch, useSelector } from "react-redux";
import {
  uploadImage,
  uploadPost,
  uploadVideo,
} from "../../redux/actions/UploadAction";
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
  SvgContainer,
} from "./styledComponent/StyledPostShare";

const PostShare = () => {
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
        <PostOptions className="postOptions">
          <PostOption
            className="option"
            style={{ color: "var(--photo)" }}
            onClick={() => imageRef.current.click()}
          >
            <UilScenery />
            Photo
          </PostOption>

          <PostOption
            className="option"
            style={{ color: "var(--video)" }}
            onClick={() => videoRef.current.click()}
          >
            <UilPlayCircle />
            Video
          </PostOption>
          <PostOption className="option" style={{ color: "var(--location)" }}>
            <UilLocationPoint />
            Location
          </PostOption>
          <PostOption className="option" style={{ color: "var(--shedule)" }}>
            <SentimentSatisfiedOutlined />
            Feeling
          </PostOption>
          <ShareBtn
            disableRipple
            className="button ps-button"
            onClick={handleUpload}
            disabled={loading}
          >
            {loading ? "uploading" : "Share"}
          </ShareBtn>

          <FileInputContainer>
            {/* <div style={{ display: "none" }}> */}
            <input type="file" ref={imageRef} onChange={onImageChange} />
          </FileInputContainer>
          <FileInputContainer>
            {/* <div style={{ display: "none" }}> */}
            <input type="file" ref={videoRef} onChange={onVideoChange} />
          </FileInputContainer>
        </PostOptions>

        {image && (
          <PreviewImgContainer className="previewImage">
            {/* <SvgContainer> */}
            <UilTimes onClick={() => setImage(null)} />
            {/* </SvgContainer> */}
            <PreviewImg src={URL.createObjectURL(image)} alt="preview" />
          </PreviewImgContainer>
        )}
        {video && (
          <PreviewImgContainer className="previewVideo">
            {/* <SvgContainer> */}
            <UilTimes onClick={() => setVideo(null)} />
            {/* </SvgContainer> */}
            <video src={URL.createObjectURL(video)} alt="preview" />
          </PreviewImgContainer>
        )}
      </ShareInputContainer>
    </PostShareContainer>
  );
};

export default PostShare;
