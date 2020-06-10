import { Bookmark } from '../shared/interfaces/bookmark.interface';

export interface BookmarksState {
    showForm: boolean;
    bookmarks: Bookmark[];
    editedBookmarkIndex: number,
    editedBookmark: Bookmark
}