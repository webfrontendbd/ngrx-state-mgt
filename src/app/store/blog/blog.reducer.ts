import { createReducer, on } from '@ngrx/store';
import { blogState } from './blog.state';
import * as blogActoin from './blog.actions';

const _blogReducer = createReducer(
  blogState,
  on(blogActoin.loadBlog, (state) => {
    return {
      ...state,
    };
  }),
  on(blogActoin.addBlog, (state, action) => {
    const _blog = { ...action.blogInput };
    _blog.id = state.blogList.length + 1;
    return {
      ...state,
      blogList: [...state.blogList, _blog],
    };
  }),
  on(blogActoin.updateBlog, (state, action) => {
    const _blog = { ...action.blogInput };
    const updateBlog = state.blogList.map((blog) => {
      return _blog.id === blog.id ? _blog : blog;
    });
    return {
      ...state,
      blogList: updateBlog,
    };
  }),
  on(blogActoin.deleteBlog, (state, action) => {
    const updateBlog = state.blogList.filter((blog) => {
      return blog.id !== action.id;
    });
    return {
      ...state,
      blogList: updateBlog,
    };
  })
);

export function blogReducer(state: any, action: any) {
  return _blogReducer(state, action);
}
