import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, catchError, tap } from 'rxjs/operators';
import * as BookmarksActions from './bookmarks.actions';
import { BookmarksState } from './bookmarks.state';
import { of } from 'rxjs';
import { NotificationService } from '../shared/services/notification.service';
import { BookmarksStorageService } from '../shared/services/bookmarksStorage.service';

@Injectable()
export class BookmarksEffects {

    @Effect()
    fetchBookmarks = this.actions$.pipe(
        ofType(BookmarksActions.FetchBookmarks),
        map(() => {
            return this.storage.getBookmarks();
        }),
        map(bookmarks => {
            return BookmarksActions.SetBookmarks(bookmarks);
        })
    );

    @Effect()
    addBookmark = this.actions$.pipe(
        ofType(BookmarksActions.AddBookmark),
        map((action) => {
            return this.storage.addBookmark(action.payload);
        }),
        map(() => {
            this.store.dispatch(BookmarksActions.StopEditBookmark());
            return BookmarksActions.AddBookmarkSuccess();
        }),
        catchError((errorResponse) => {
            return of(BookmarksActions.AddBookmarkFail(errorResponse));
        })
    );

    @Effect({ dispatch: false })
    addBookmarkSuccess = this.actions$.pipe(
        ofType(BookmarksActions.AddBookmarkSuccess),
        tap(() => {
            this.notify.openSnackBar("Bookmark added successfully!");
        })
    );

    @Effect({ dispatch: false })
    addBookmarkFail = this.actions$.pipe(
        ofType(BookmarksActions.AddBookmarkFail),
        tap(() => {
            this.notify.openSnackBar("Oops! Something went wrong!");
        })
    );

    // @Effect({ dispatch: false })
    // storeBookmarks = this.actions$.pipe(
    //     ofType(BookmarksActions.STORE_BOOKMARKS),
    //     withLatestFrom(this.store.select('bookmarks')),
    //     switchMap(([actionData, bookmarks]) => {
    //         return this.http.put(
    //             'http....',
    //             bookmarks
    //         );
    //     })
    // );

    constructor(
        private actions$: Actions,
        private notify: NotificationService,
        private storage: BookmarksStorageService,
        private store: Store<BookmarksState>
    ) { }
}
