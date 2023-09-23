import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Style, Styles } from 'src/app/_models/style';
import { AppStateModel } from 'src/app/store/global/app.state.model';
import { getStyleInfo, getStyles } from 'src/app/store/style/style.selectors';
import { AddStyleComponent } from './add-style/add-style.component';
import { deleteStyle, loadStyle } from 'src/app/store/style/style.actions';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.css']
})
export class StyleComponent implements OnInit {
  styleList: Style[];
  styleInfo:Styles;
  constructor(private store: Store<AppStateModel>, private dialog: MatDialog) {}
  ngOnInit() {    
    this.store.dispatch(loadStyle());
    this.store.select(getStyleInfo).subscribe({
      next: (response) => {
        //this.styleList = response;
        this.styleInfo = response
      },
    });
  }
  addStyle() {
    this.openDialog(0, 'Add Style');
  }
  openDialog(id: any, title: any, isEdit = false) {
    this.dialog.open(AddStyleComponent, {
      width: '40%',
      data: {
        id: id,
        title: title,
        isEdit: isEdit,
      },
    });
  }

  editStyle(id: any) {
    this.openDialog(id, 'Edit Style', true);
  }
  deleteStyle(id: any) {
    if (confirm('Are you sure to delete this?')) {
      this.store.dispatch(deleteStyle({ id: id }));
    }
  }
}
