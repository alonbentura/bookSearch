import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store, select } from '@ngrx/store';
import { Action } from 'rxjs/internal/scheduler/Action';
import { Observable } from 'rxjs';
import { AddToWithList } from '../reducers/actions';
import _ from 'lodash';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  WishListBooks;
  constructor(

    public dialogRef: MatDialogRef<DialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
    private store: Store<any>,

  ) {

  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
    this.store.select<any>(state => state.wishList).subscribe(res => this.WishListBooks = res);



  }

  onClickClose = () => {
    this.dialogRef.close();
  }

  addToWishList = () => {
    const book = this.data.book;
    if (!_.includes(this.WishListBooks, book)) {
      return this.store.dispatch(new AddToWithList({ book }));
    }
    return alert('this book already in your wishList');
  }
}
