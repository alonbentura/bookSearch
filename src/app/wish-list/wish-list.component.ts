import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { RemoveFromWithList } from '../reducers/actions';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent implements OnInit {
  WishListBooks;
  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.store.select<any>(state => state.wishList).subscribe(res => this.WishListBooks = res);
  }

  clickRemove = (book) => {
    this.store.dispatch(new RemoveFromWithList({ book }));
  }

}
