import React, { useEffect, useState } from "react";
import { format } from "timeago.js";
import { likePost } from "../../redux/api/PostsRequests";
import { commentPost } from "../../redux/actions/PostsAction";
import { useDispatch, useSelector } from "react-redux";
import {
  BoldText,
  CommentBox,
  LikeText,
  PostContainer,
  PostDesc,
  PostDtlContainer,
  PostImg,
  PostName,
  PostReactContainer,
  SendButton,
  Username,
} from "./styledComponent/StyledPost";
import {
  Avatar,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
} from "@mui/material";
import {
  DeleteOutlineOutlined,
  FavoriteBorderRounded,
  FavoriteRounded,
  InsertCommentOutlined,
  Send as SendIcon,
} from "@mui/icons-material";
import axios from "axios";

const Post = ({ data }) => {
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer.authData);
  const [liked, setLiked] = useState(data.likes.includes(user._id));
  const [likes, setLikes] = useState(data.likes.length);

  //comment function
  const [comments, setComments] = useState([data?.comments]);
  const [comment, setComment] = useState("");

  // console.log("comments", comments);

  const handleCommentClick = async () => {
    const finalComment = `${user.firstname} : ${comment}`;
    const newComments = await dispatch(
      commentPost(finalComment, data._id)
    );
    setComments(newComments);
    setComment("");
    console.log("newCommentssss", comments);
    console.log(user._id);
  };

  const [users, setUsers] = useState({});
  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/user/${data.userId}`);
      // console.log("userrrrrapiiii", res.data);
      setUsers(res.data);
    };
    fetchUser();
  }, [data.userId]);

  const handleLike = () => {
    likePost(data._id, user._id);
    setLiked((prev) => !prev);
    liked ? setLikes((prev) => prev - 1) : setLikes((prev) => prev + 1);
  };
  // console.log("useridddd", user._id);
  const [open, setOpen] = useState();
  const handleDelete = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  //Comment dialogue box
  const [openCommentBox, setOpenCommentBox] = useState();
  const handleComment = () => {
    setOpenCommentBox(true);
  };

  const handleCommentBoxClose = () => {
    setOpenCommentBox(false);
  };
  const deletePost = async () => {
    if (data.userId === user._id) {
      await axios.delete(`/posts/${data._id}`);
      console.log("deletePosttttt", data._id);
      handleClose();
    }
    window.location.reload();
  };
  // console.log('data.userIduserid',data.userId,user._id);
  return (
    <>
      <PostContainer className="Post">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Avatar
              src={
                users.profilePicture
                  ? serverPublic + users.profilePicture
                  : serverPublic + "defaultProfile.png"
              }
            />
            <Username>
              <BoldText>{users.firstname} </BoldText>
              {/* <BoldText>{user.firstname} </BoldText> */}
              <LikeText style={{ marginLeft: "5px" }}>
                {format(data.createdAt)}
              </LikeText>
            </Username>
          </Box>
          {data.userId === user._id && (
            <>
              <Box
                sx={{ cursor: "pointer", color: "#808080" }}
                onClick={handleDelete}
              >
                <DeleteOutlineOutlined />
              </Box>
            </>
          )}
        </Box>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Do you want to delete this post ?</DialogTitle>
          <DialogActions>
            <DialogContent>
              <DialogContentText>
                This action cannot be reversed. Are You Sure You Want To Delete
                It?
              </DialogContentText>
            </DialogContent>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={deletePost}>Ok</Button>
          </DialogActions>
        </Dialog>
        <PostImg
          src={
            data.image ? process.env.REACT_APP_PUBLIC_FOLDER + data.image : ""
          }
          alt=""
        />
        {data.video && (
          <video
            controls
            src={
              data.video ? process.env.REACT_APP_PUBLIC_FOLDER + data.video : ""
            }
          ></video>
        )}

        <PostDtlContainer className="detail">
          <PostName>
            <BoldText>{data.name} </BoldText>
          </PostName>
          <PostDesc>{data.desc}</PostDesc>
        </PostDtlContainer>

        <PostReactContainer className="postReact">
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton onClick={handleLike}>
              {" "}
              {liked ? (
                <FavoriteRounded sx={{ color: "#8224e3" }} />
              ) : (
                <FavoriteBorderRounded />
              )}{" "}
            </IconButton>
            <LikeText>{likes} likes</LikeText>
            <IconButton onClick={handleComment}>
              <InsertCommentOutlined />{" "}
            </IconButton>

            {/* *****************Comment Dialogue box******************* */}
            <Dialog open={openCommentBox} onClose={handleCommentBoxClose}>
              <DialogTitle>Comments</DialogTitle>
              <DialogActions>
                <DialogContent>
                  {comments.map((comment, i) => (
                    <Box>
                      <p key={i}>{comment.comment}</p>
                    </Box>
                  ))}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-end",
                      // width:'70%'
                    }}
                  >
                    <CommentBox
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      type="text"
                      placeholder="Comment.."
                    />
                    <SendButton
                      onClick={handleCommentClick}
                      variant="contained"
                      size="small"
                      endIcon={<SendIcon />}
                    ></SendButton>
                  </Box>
                </DialogContent>
              </DialogActions>
            </Dialog>
            {/* *****************Comment Dialogue box end******************* */}

            <LikeText>
              {data.comments ? data.comments.length : "0"} Comments
            </LikeText>
          </Box>
        </PostReactContainer>
      </PostContainer>
      {/* )} */}
    </>
  );
};

export default Post;
