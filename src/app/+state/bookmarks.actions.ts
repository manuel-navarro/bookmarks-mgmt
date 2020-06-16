import { createAction } from '@ngrx/store';
import { Bookmark } from '../shared/interfaces/bookmark.interface';

export const FETCH_BOOKMARKS = '[Bookmark] Fetch Bookmarks';
export const SET_BOOKMARKS = '[Bookmark] Set Bookmarks';
export const TOGGLE_FORM_BOOKMARKS = '[Bookmarks] Toggle Form Bookmarks';
export const ADD_BOOKMARK = '[Bookmark] Add Bookmark';
export const ADD_BOOKMARK_SUCCESS = '[Bookmark] Add Bookmark Success';
export const ADD_BOOKMARK_FAIL = '[Bookmark] Add Bookmark Fail';
export const START_EDIT_BOOKMARK = '[Bookmark] Start Edit Bookmark';
export const STOP_EDIT_BOOKMARK = '[Bookmark] Stop Edit Bookmark';
export const DELETE_BOOKMARK = '[Bookmark] Delete Bookmark';

export const FetchBookmarks = createAction(
    FETCH_BOOKMARKS
);
export const SetBookmarks = createAction(
    SET_BOOKMARKS,
    (payload: Bookmark[]) => ({ payload })
);
export const ToggleFormBookmarks = createAction(
    TOGGLE_FORM_BOOKMARKS,
    (group?: string) => ({ group })
);
export const AddBookmark = createAction(
    ADD_BOOKMARK,
    (payload: Bookmark) => ({ payload })
);
export const AddBookmarkSuccess = createAction(
    ADD_BOOKMARK_SUCCESS
);
export const AddBookmarkFail = createAction(
    ADD_BOOKMARK_FAIL,
    (errorResponse: any) => ({ errorResponse })
);
export const DeleteBookmark = createAction(
    DELETE_BOOKMARK,
    (payload: number) => ({ payload })
);

export const StartEditBookmark = createAction(
    START_EDIT_BOOKMARK,
    (payload: number) => ({ payload })
);
export const StopEditBookmark = createAction(
    STOP_EDIT_BOOKMARK
);