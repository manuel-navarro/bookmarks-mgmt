import { Component, Input } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { BookmarksState } from '../+state/bookmarks.state';
import * as BookmarksActions from '../+state/bookmarks.actions';
import { Group } from '../shared/interfaces/group.interface';

@Component({
  selector: 'app-bookmarks-detail',
  templateUrl: './bookmarks-detail.component.html',
  styleUrls: ['./bookmarks-detail.component.scss']
})
export class BookmarksDetailComponent {

  @Input() group: string;

  groups: Group[] = [
    { value: 'leisure', viewValue: 'Leisure' },
    { value: 'work', viewValue: 'Work' },
    { value: 'personal', viewValue: 'Personal' }
  ];

  bookmarkForm = this.fb.group({
    name: ['', [Validators.required, Validators.maxLength(10)]],
    url: [''],
    group: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private store: Store<BookmarksState>) { }

  onSubmit() {
    const formValue = this.bookmarkForm.value;
    this.store.dispatch(BookmarksActions.AddBookmark(formValue));
  }

  onCancelItem() {
    this.store.dispatch(BookmarksActions.ToggleFormBookmarks());
  }

}
