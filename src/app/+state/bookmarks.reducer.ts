import * as BookmarksActions from './bookmarks.actions';
import { BookmarksState } from './bookmarks.state';
import { createReducer, on, Action } from '@ngrx/store';

const initialState: BookmarksState = {
    showForm: false,
    bookmarks: [{
        name: "Google",
        url: "http://google.com",
        group: {
            value: "work",
            viewValue: "Work"
        }
    }, {
        name: "Wired",
        url: "http://wired.com",
        group: {
            value: "leisure",
            viewValue: "Leisure"
        }
    }],
    editedBookmarkIndex: -1,
    editedBookmark: null
};

const bookmarkReducer = createReducer(
    initialState,
    on(BookmarksActions.ToggleFormBookmarks, state => ({
        ...state,
        showForm: !state.showForm
    })),
    on(BookmarksActions.SetBookmarks, (state, { payload }) => ({
        ...state,
        bookmarks: [...payload]
    })),
    on(BookmarksActions.AddBookmark, (state, { payload }) => ({
        ...state,
        bookmarks: [...state.bookmarks, payload]
    })),
    on(BookmarksActions.StartEditBookmark, (state, { payload }) => ({
        ...state,
        showForm: true,
        editedBookmarkIndex: payload,
        editedBookmark: { ...state.bookmarks[payload] }
    })),
    on(BookmarksActions.StopEditBookmark, state => ({
        ...state,
        showForm: false,
        editedBookmarkIndex: -1,
        editedBookmark: null
    })),
    on(BookmarksActions.DeleteBookmark, (state, { payload }) => ({
        ...state,
        bookmarks: state.bookmarks.filter((bookmark, index) => {
            return index !== payload;
        })
    }))
);

export function reducer(state: BookmarksState | undefined, action: Action) {
    return bookmarkReducer(state, action);
}