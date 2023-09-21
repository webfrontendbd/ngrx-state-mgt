import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Blog } from 'src/app/_models/blog';
import { getBlog } from 'src/app/store/blog/blog.selector';
import { AppStateModel } from 'src/app/store/global/app.state.model';
import { AddBlogComponent } from './add-blog/add-blog.component';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  blogList: Blog[];
  constructor(public dialog: MatDialog, private store: Store<AppStateModel>) {}
  ngOnInit() {
    this.store.select(getBlog).subscribe({
      next: (response) => {
        this.blogList = response;
      },
    });
  }
  addBlog(){
    this.openDialog(0,'Add Blog');
  }
  openDialog(id: any, title: any, isEdit = false) {
    this.dialog.open(AddBlogComponent, {
      width: '40%',
      data: {
        id: id,
        title: title,
        isEdit: isEdit,
      },
    });
  }

  editBlog(id: any) {
    this.openDialog(id,'Edit Blog', true);
  }
}
