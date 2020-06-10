import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
// import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import * as BookmarksActions from './bookmarks.actions';
import { BookmarksState } from './bookmarks.state';
import { of } from 'rxjs';

@Injectable()
export class BookmarksEffects {
    @Effect()
    addBookmark = this.actions$.pipe(
        ofType(BookmarksActions.AddBookmark),
        // switchMap(() => {
        // return this.http.post<Bookmark[]>(
        //     'http....'
        // );
        // }),
        map(() => {
            this.store.dispatch(BookmarksActions.StopEditBookmark());
            return BookmarksActions.AddBookmarkSuccess();
        }),
        catchError((errorResponse) => {
            return of(BookmarksActions.AddBookmarkFail(errorResponse));
        })
    );

    // @Effect()
    // fetchBookmarks = this.actions$.pipe(
    //     ofType(BookmarksActions.FETCH_BOOKMARKS),
    //     switchMap(() => {
    //         return this.http.get<Bookmark[]>(
    //             'http....'
    //         );
    //     }),
    //     map(bookmarks => {
    //         return BookmarksActions.SetBookmarks(bookmarks);
    //     })
    // );

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
        // private http: HttpClient,
        private store: Store<BookmarksState>
    ) { }
}
