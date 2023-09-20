import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Blog } from "src/app/_models/blog";

const getBlogState = createFeatureSelector<Blog[]>('blog');

export const getBlog = createSelector(getBlogState, (state)=>{
    return state;
});
