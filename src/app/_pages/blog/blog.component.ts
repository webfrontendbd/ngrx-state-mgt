import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Blog } from 'src/app/_models/blog';
import { getBlog } from 'src/app/store/blog/blog.selector';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  blogList: Blog[];
  constructor(private store: Store<{ blog: Blog[] }>) {}
  ngOnInit() {
    this.store.select(getBlog).subscribe({
      next: (response) => {
        this.blogList = response;
      },
    });
  }
}
