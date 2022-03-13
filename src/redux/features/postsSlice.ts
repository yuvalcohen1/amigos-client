import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PostModel } from "../../models/Post.model";
import type { RootState } from "../app/store";
import { createPost, fetchAllPosts } from "../thunks/posts-thunks";

interface PostsState {
  allPosts: PostModel[];
  personalPosts: PostModel[];
  status: "idle" | "loading" | "failed";
  statusCode: number;
  errorMessage: string;
}

const initialState: PostsState = {
  allPosts: [],
  personalPosts: [],
  status: "idle",
  statusCode: 200,
  errorMessage: "",
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createPost.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.status = "idle";
        state.statusCode = 200;
        state.allPosts.push(action.payload);
        state.personalPosts.push(action.payload);
        state.errorMessage = "";
      })
      .addCase(createPost.rejected, (state, action: PayloadAction<any>) => {
        state.status = "failed";
        state.allPosts = [];
        state.personalPosts = [];
        state.statusCode = action.payload.status;
        state.errorMessage = action.payload.data;
      })
      .addCase(fetchAllPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllPosts.fulfilled, (state, action) => {
        state.status = "idle";
        state.statusCode = 200;
        state.allPosts = action.payload;
        state.errorMessage = "";
      })
      .addCase(fetchAllPosts.rejected, (state, action: PayloadAction<any>) => {
        state.status = "failed";
        state.allPosts = [];
        state.personalPosts = [];
        state.statusCode = action.payload.status;
        state.errorMessage = action.payload.data;
      });
  },
});

// export const {  } = postsSlice.actions;

export const selectPosts = (state: RootState) => state.posts;

export default postsSlice.reducer;
