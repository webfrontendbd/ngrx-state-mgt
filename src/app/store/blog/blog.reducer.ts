import { createReducer, on } from '@ngrx/store';
import { blogState } from './blog.state';
import * as blogActoin from './blog.actions';
import { state } from '@angular/animations';

const _blogReducer = createReducer(
  blogState,
  on(blogActoin.loadBlog, (state) => {
    return {
      ...state
    };
  }),
  on(blogActoin.addBlog, (state, action)=>{
    const _blog={...action.blogInput};
    _blog.id=state.blogList.length+1;
    return {
      ...state,
      blogList:[...state.blogList, _blog]

    }
  })
  
);

export function blogReducer(state: any, action: any) {
  return _blogReducer(state, action);
}
