import { createAction, props } from '@ngrx/store';
import { Blog } from 'src/app/_models/blog';

export const loadBlog = createAction('loadBlog');
export const addBlog = createAction('addBlog', props<{ blogInput: Blog }>());
