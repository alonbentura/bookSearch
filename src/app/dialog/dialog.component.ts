import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AddToWithList } from '../reducers/actions';
import { Action } from 'rxjs/internal/scheduler/Action';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  constructor(

    public dialogRef: MatDialogRef<DialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
    private store: Store<any>
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {

  }

  onClickClose = () => {

  }

  addToWishList = () => {
    this.store.dispatch({ type: 'add' , this.book })
  }
}
