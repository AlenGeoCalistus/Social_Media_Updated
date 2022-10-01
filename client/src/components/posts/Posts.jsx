import React, { useEffect } from "react";
import { getTimelinePosts } from "../../redux/actions/PostsAction";
import Post from "../Post/Post";
import { useSelector, useDispatch } from "react-redux";
// import "./Posts.css";
import { useParams } from "react-router-dom";
import { PostsContainer } from "./StyledComponents/StyledPosts";

const Posts = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer.authData);
  let { posts, loading } = useSelector((state) => state.postReducer);
  useEffect(() => {
    dispatch(getTimelinePosts(user._id)); 
  }, [dispatch, user._id]);
  // }, []);
  if (!posts) return "No Posts";
  if (params.id) posts = posts.filter((post) => post.userId === params.id);
  
  return (
    <PostsContainer className="Posts">
      {loading
        ? "Fetching posts...."
        : posts.map((post, id) => {
            return <Post data={post} key={id} />;
          })}
    </PostsContainer>
  );
};

export default Posts;
