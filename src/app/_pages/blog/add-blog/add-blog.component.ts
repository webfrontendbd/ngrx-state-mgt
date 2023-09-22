import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TitleStrategy } from '@angular/router';
import { Store } from '@ngrx/store';
import { Blog } from 'src/app/_models/blog';
import { addBlog, updateBlog } from 'src/app/store/blog/blog.actions';
import { getBlogById } from 'src/app/store/blog/blog.selector';
import { AppStateModel } from 'src/app/store/global/app.state.model';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css'],
})
export class AddBlogComponent implements OnInit {
  pageTitle: string;
  blogid: any;
  editedBlog: Blog;
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddBlogComponent>,
    private store: Store<AppStateModel>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    this.pageTitle = this.data.title;
    if (this.data.isEdit) {
      this.blogid = this.data.id;
      this.store.select(getBlogById(this.blogid)).subscribe({
        next: (response) => {
          this.editedBlog = response;
          this.blogform.patchValue({
            id: this.editedBlog.id,
            title: this.editedBlog.title,
            description: this.editedBlog.description,
          });
        },
      });
    }
  }

  blogform = this.fb.group({
    id: [0],
    title: ['', [Validators.required]],
    description: ['', [Validators.required]],
  });

  closeDialog() {
    this.dialogRef.close();
  }

  saveBlog() {
    if (this.blogform.valid) {
      const _blogInput: Blog = {
        id: 0,
        title: this.blogform.value.title as string,
        description: this.blogform.value.description as string,
      };
      if(this.data.isEdit){
        _blogInput.id = this.blogform.value.id as number;
        this.store.dispatch(updateBlog({blogInput:_blogInput}));
      }else{
        this.store.dispatch(addBlog({ blogInput: _blogInput }));
      }
      this.closeDialog();
    }
  }
}
