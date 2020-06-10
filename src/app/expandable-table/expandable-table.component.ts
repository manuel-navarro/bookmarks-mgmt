import { Component, OnInit, Input, Output, EventEmitter, ViewChild, OnDestroy } from '@angular/core';
import { MatAccordion } from '@angular/material';
import { Group } from '../shared/interfaces/group.interface';
import { Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { BookmarksState } from '../+state/bookmarks.state';
import { Bookmark } from '../shared/interfaces/bookmark.interface';
import { selectAllBookmarks } from '../+state/bookmarks.selectors';
import * as BookmarksActions from '../+state/bookmarks.actions';

@Component({
  selector: 'app-expandable-table',
  templateUrl: './expandable-table.component.html',
  styleUrls: ['./expandable-table.component.scss']
})
export class ExpandableTableComponent implements OnInit, OnDestroy {
  @ViewChild(MatAccordion, { static: false }) accordion: MatAccordion;
  @Input() groups: Group[] = [];

  private data: Bookmark[] = [];
  private subscription: Subscription;

  constructor(private store: Store<BookmarksState>) {
  }

  ngOnInit() {
    this.subscription = this.store
      .pipe(
        select(selectAllBookmarks)
      )
      .subscribe((bookmarks: Bookmark[]) => {
        this.data = bookmarks;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onAdd() {
    this.store.dispatch(BookmarksActions.ToggleFormBookmarks());
  }

  filterBookmarksByGroup(group: string) {
    return this.data.filter(bookmark => bookmark.group.value === group);
  }
}
