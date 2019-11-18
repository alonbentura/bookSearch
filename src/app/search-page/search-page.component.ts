import { Component, OnInit, OnDestroy, OnChanges, SimpleChanges, Input, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
@Injectable()
export class SearchPageComponent implements OnInit {
  user = '';
  searchBook = '';
  bookToSearch = '';
  @Input() books = [];

  constructor(private activatedRoute: ActivatedRoute, public dialog: MatDialog) { }


  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.user = params.userName;
    });

  }

  getBooks = () => {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.searchBook}`, {
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
      width: '250px',
      data: {book}

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }




  onClickSearch = () => {
    this.getBooks();
  }

  onSearch = (value) => {
    this.searchBook = value;
  }
}
