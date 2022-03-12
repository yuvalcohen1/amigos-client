import React, { FormEvent, useCallback, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../redux/app/hooks";
import { selectConnectedUser } from "../../redux/features/connectedUserSlice";
import { createPost } from "../../redux/thunks/posts-thunks";
import "./CreatePostModal.css";

type Props = {};

const CreatePostModal = (props: Props) => {
  const [show, setShow] = useState(false);
  const [postContent, setPostContent] = useState<string>("");

  const { value: connectedUser } = useAppSelector(selectConnectedUser);

  const dispatch = useAppDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onPublish = useCallback(
    (e: FormEvent) => {
      e.preventDefault();

      dispatch(
        createPost({ userId: connectedUser?._id, content: postContent })
      );

      handleClose();
    },
    [dispatch, connectedUser, postContent]
  );

  return (
    <>
      <Button id="lunch-create-post-btn" onClick={handleShow}>
        What do you want to share?
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create A Post</Modal.Title>
        </Modal.Header>
        <Form onSubmit={onPublish}>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Post Body</Form.Label>
              <Form.Control
                as="textarea"
                rows={7}
                onChange={(e) => setPostContent(e.target.value)}
              />
            </Form.Group>
            <Button id="add-photo-to-post-btn">Add A Photo</Button>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button id="publish-post-btn" type="submit">
              Publish
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default CreatePostModal;
