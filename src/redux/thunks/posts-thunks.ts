import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { PostModel } from "../../models/Post.model";

const api = axios.create({
  baseURL: "http://localhost:4000/posts",
});

export const createPost = createAsyncThunk<PostModel, Partial<PostModel>>(
  "posts/create-post",
  async (createPostBody: Partial<PostModel>, thunkApi) => {
    try {
      const { data: newPost } = await api.post<PostModel>(
        "/create-post",
        createPostBody,
        { withCredentials: true }
      );

      return newPost;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.response);
    }
  }
);
