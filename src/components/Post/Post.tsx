import React, { FC } from "react";
import { PostModel } from "../../models/Post.model";
import "./Post.css";

interface Props {
  post: PostModel;
}

const Post: FC<Props> = ({ post }) => {
  return (
    <div className="post">
      <div className="post-content">{post.content}</div>
      {post.attachedPhoto && <img src={post.attachedPhoto} alt="" />}
    </div>
  );
};

export default Post;
