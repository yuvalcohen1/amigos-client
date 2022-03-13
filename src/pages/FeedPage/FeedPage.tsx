import React, { useEffect } from "react";
import CreatePostModal from "../../components/CreatePostModal/CreatePostModal";
import Navbar from "../../components/Navbar/Navbar";
import Posts from "../../components/Posts/Posts";
import { useAppDispatch, useAppSelector } from "../../redux/app/hooks";
import { selectConnectedUser } from "../../redux/features/connectedUserSlice";
import { fetchAllPosts } from "../../redux/thunks/posts-thunks";
import "./FeedPage.css";

type Props = {};

const FeedPage = (props: Props) => {
  const dispatch = useAppDispatch();
  const { value: connectedUser } = useAppSelector(selectConnectedUser);

  useEffect(() => {
    dispatch(fetchAllPosts());
  }, []);

  return (
    <div className="feed-page">
      <Navbar />
      <main>
        <div className="create-post-box">
          <img
            src={connectedUser?.profileImg}
            alt=""
            className="create-post-profile-img"
          />
          <CreatePostModal />
        </div>
        <Posts />
      </main>
    </div>
  );
};

export default FeedPage;
