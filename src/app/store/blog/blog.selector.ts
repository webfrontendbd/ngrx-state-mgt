import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Blogs } from "src/app/_models/blog";

const getBlogState = createFeatureSelector<Blogs>('blog');

export const getBlog = createSelector(getBlogState, (state)=>{
    return state.blogList;
});
