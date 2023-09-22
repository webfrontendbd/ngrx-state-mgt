import { Blogs } from 'src/app/_models/blog';
import { Counter } from 'src/app/_models/counter';
import { Employees } from 'src/app/_models/employee';
import { Styles } from 'src/app/_models/style';

export interface AppStateModel {
  counter: Counter;
  blog: Blogs;
  employee: Employees;
  style: Styles;
}
