import { Component, OnInit, OnDestroy } from '@angular/core';
// import * as BookmarksActions from './store/bookmarks.actions';
import { BookmarksState } from './+state/bookmarks.state';
import { Store, select } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { selectShowForm } from './+state/bookmarks.selectors';
import { Group } from './shared/interfaces/group.interface';
import * as BookmarksActions from './+state/bookmarks.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  public showForm: boolean = false;
  public groups: Group[] = [
    { value: 'personal', viewValue: 'Personal', icon: 'person' },
    { value: 'work', viewValue: 'Work', icon: 'work' },
    { value: 'leisure', viewValue: 'Leisure', icon: 'sports_esports' }
  ];

  constructor(private store: Store<BookmarksState>) {
  }

  ngOnInit(): void {
    this.subscription = this.store
      .pipe(select(selectShowForm))
      .subscribe((showForm: boolean) => {
        this.showForm = showForm;
      });

    this.store.dispatch(BookmarksActions.FetchBookmarks());
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
