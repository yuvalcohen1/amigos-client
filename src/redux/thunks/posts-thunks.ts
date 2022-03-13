import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { PostModel } from "../../models/Post.model";

const api = axios.create({
  baseURL: "http://localhost:4000/posts",
});

export const fetchAllPosts = createAsyncThunk<PostModel[]>(
  "posts/fetch-all-posts",
  async (_, thunkApi) => {
    try {
      const { data: allPosts } = await api.get<PostModel[]>(
        "/fetch-all-posts",
        { withCredentials: true }
      );

      return allPosts;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.response);
    }
  }
);

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
