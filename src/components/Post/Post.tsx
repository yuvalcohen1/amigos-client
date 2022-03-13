import React, { FC } from "react";
import { Card } from "react-bootstrap";
import { PostModel } from "../../models/Post.model";
import "./Post.css";

interface Props {
  post: PostModel;
}

const Post: FC<Props> = ({ post }) => {
  return (
    <Card style={{ width: "18rem" }} className="post">
      <Card.Body>
        <Card.Text>{post.content}</Card.Text>
      </Card.Body>
      {post.attachedPhoto && (
        <Card.Img variant="top" src={post.attachedPhoto} />
      )}
    </Card>
  );
};

export default Post;
