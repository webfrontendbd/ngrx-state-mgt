import { createReducer, on } from '@ngrx/store';
import { blogState } from './blog.state';
import * as blogActoin from './blog.actions';

const _blogReducer = createReducer(
  blogState,
  on(blogActoin.loadBlog, (state) => {
    return {
      ...state
    };
  }),
  
);

export function blogReducer(state: any, action: any) {
  return _blogReducer(state, action);
}
