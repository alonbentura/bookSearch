import { Component, OnInit, Input, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
@Injectable()
export class SearchPageComponent implements OnInit {
  user = '';
  searchBook = '';
  wishList;
  @Input() books = [];

  constructor(private activatedRoute: ActivatedRoute, public dialog: MatDialog, private store: Store<any>) { }


  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.user = params.userName;
    });
    this.store.select<any>(state => state.wishList).subscribe(res => this.wishList = res);

  }

  getBooks = () => {
    fetch(`https://www.googleapis.com/books/v1/volumes?maxResults=20&q=${this.searchBook}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },

    }).then((res) => {
      res.json().then((r) => this.books = r.items);
    });

  }

  onClickResult = (book) => {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '400px',
      height: '500px',

      data: { book }

    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }




  onClickSearch = () => {
    if (this.searchBook.length > 0) {
      return this.getBooks();
    }
    return alert('Enter Your Search');
  }

  onSearch = (value) => {
    this.searchBook = value;
  }
}
