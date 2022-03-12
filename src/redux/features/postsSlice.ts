import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PostModel } from "../../models/Post.model";
import type { RootState } from "../app/store";
import { createPost } from "../thunks/posts-thunks";

interface PostsState {
  value: PostModel[];
  status: "idle" | "loading" | "failed";
  statusCode: number;
  errorMessage: string;
}

const initialState: PostsState = {
  value: [],
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
        state.value.push(action.payload);
        state.errorMessage = "";
      })
      .addCase(createPost.rejected, (state, action: PayloadAction<any>) => {
        state.status = "failed";
        state.value = [];
        state.statusCode = action.payload.status;
        state.errorMessage = action.payload.data;
      });
  },
});

// export const {  } = postsSlice.actions;

export const selectPosts = (state: RootState) => state.posts;

export default postsSlice.reducer;
