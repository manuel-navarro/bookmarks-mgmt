import { Component, OnInit, Input } from '@angular/core';
import { Bookmark } from '../shared/interfaces/bookmark.interface';
import { Store } from '@ngrx/store';
import { BookmarksState } from '../+state/bookmarks.state';
import * as BookmarksActions from '../+state/bookmarks.actions';
import { Group } from '../shared/interfaces/group.interface';

@Component({
  selector: 'app-bookmarks-list',
  templateUrl: './bookmarks-list.component.html',
  styleUrls: ['./bookmarks-list.component.scss']
})
export class BookmarksListComponent implements OnInit {
  @Input() group: string;
  @Input() dataSource: Bookmark[];

  public displayedColumns: string[] = ['name', 'url', 'group', 'actions'];

  constructor(private store: Store<BookmarksState>) {
  }

  ngOnInit() {
  }

  onEditItem(index: number) {
    this.store.dispatch(BookmarksActions.StartEditBookmark(index));
  }

  onDeleteItem(index: number) {
    this.store.dispatch(BookmarksActions.DeleteBookmark(index));
  }

  onAdd(group?: string) {
    this.store.dispatch(BookmarksActions.ToggleFormBookmarks(group));
  }
}
