import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Blog, Blogs } from 'src/app/_models/blog';

const getBlogState = createFeatureSelector<Blogs>('blog');

export const getBlog = createSelector(getBlogState, (state) => {
  return state.blogList;
});

export const getBlogById = (blogid: number) =>
  createSelector(getBlogState, (state) => {
    return state.blogList.find((blog: Blog) => blog.id === blogid) as Blog;
  });
