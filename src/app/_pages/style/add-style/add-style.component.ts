import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Style } from 'src/app/_models/style';
import { AppStateModel } from 'src/app/store/global/app.state.model';
import { addStyle, updateStyle } from 'src/app/store/style/style.actions';
import { getStyleById } from 'src/app/store/style/style.selectors';

@Component({
  selector: 'app-add-style',
  templateUrl: './add-style.component.html',
  styleUrls: ['./add-style.component.css'],
})
export class AddStyleComponent implements OnInit {
  pageTitle: string;
  styleId: number;
  style: Style;
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddStyleComponent>,
    private store: Store<AppStateModel>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  ngOnInit() {
    this.pageTitle = this.data.title;
    if (this.data.isEdit) {
      this.styleId = this.data.id;
      this.store.select(getStyleById(this.styleId)).subscribe({
        next: (response) => {
          this.style = response;
          this.styleForm.patchValue({
            id: this.style.id,
            styleName: this.style.styleName,
            buyerName: this.style.buyerName,
            gender: this.style.gender,
            department: this.style.department,
            brand: this.style.brand,
          });
        },
      });
    }
  }

  styleForm = this.fb.group({
    id: [0],
    styleName: ['', [Validators.required]],
    buyerName: ['', [Validators.required]],
    gender: ['', [Validators.required]],
    department: [''],
    brand: [''],
    userId: 1,
    merchantTeamId: 2,
    teamName: 'Test',
    createdBy: 'Rahim',
    created: '20-Sep-2023',
    seasons: [],
  });

  closeDialog() {
    this.dialogRef.close();
  }
  saveStyle() {
    if (this.styleForm.valid) {
      const _style: Style = {
        id: 0,
        styleName: this.styleForm.value.styleName as string,
        buyerName: this.styleForm.value.buyerName as string,
        gender: this.styleForm.value.gender as string,
        department: this.styleForm.value.department as string,
        brand: this.styleForm.value.brand as string,
        userId: this.styleForm.value.userId as number,
        merchantTeamId: this.styleForm.value.merchantTeamId as number,
        teamName: this.styleForm.value.teamName as string,
        createdBy: this.styleForm.value.createdBy as string,
        created: this.styleForm.value.created as string,
        seasons: [],
      };
      if (this.data.isEdit) {
        _style.id = this.styleForm.value.id as number;
        this.store.dispatch(updateStyle({ style: _style }));
      } else {
        this.store.dispatch(addStyle({ style: _style }));
      }
      this.closeDialog();
    }
  }
}
