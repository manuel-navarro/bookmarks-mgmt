import { createSelector } from "@ngrx/store";
import { BookmarksState } from "./bookmarks.state";

export const selectApp = (state: any) => state.app;
export const selectAllBookmarks = createSelector(selectApp, (state: BookmarksState) => state.bookmarks);
export const selectShowForm = createSelector(selectApp, (state: BookmarksState) => state.showForm);

