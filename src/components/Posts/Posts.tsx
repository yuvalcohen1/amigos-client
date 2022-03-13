import React from "react";
import { useAppSelector } from "../../redux/app/hooks";
import { selectPosts } from "../../redux/features/postsSlice";
import Post from "../Post/Post";
import "./Posts.css";

type Props = {};

const Posts = (props: Props) => {
  const { allPosts } = useAppSelector(selectPosts);

  return (
    <div className="posts">
      {allPosts.map((post) => (
        <Post post={post} />
      ))}
    </div>
  );
};

export default Posts;
