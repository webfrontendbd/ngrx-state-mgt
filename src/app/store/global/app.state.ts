import { blogReducer } from '../blog/blog.reducer';
import { counterReducer } from '../counter.reducer';
import { employeeReducer } from '../employee/employee.reducer';
import { styleReducer } from '../style/style.reducer';

export const AppState = {
  counter: counterReducer,
  blog: blogReducer,
  employee: employeeReducer,
  style: styleReducer,
};
