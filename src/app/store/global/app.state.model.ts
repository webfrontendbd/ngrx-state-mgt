import { Blogs } from "src/app/_models/blog";
import { Counter } from "src/app/_models/counter";

export interface AppStateModel {
    counter:Counter,
    blog:Blogs
}