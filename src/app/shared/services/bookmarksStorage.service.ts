import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { Bookmark } from '../interfaces/bookmark.interface';
const STORAGE_KEY = 'local_bookmarks_mgmt';

@Injectable({ providedIn: 'root' })
export class BookmarksStorageService {

    mockedData = [{
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
    }];

    constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }

    public addBookmark(bookmark: Bookmark): void {
        const currentTodoList = this.storage.get(STORAGE_KEY) || [];
        currentTodoList.push(bookmark);
        this.storage.set(STORAGE_KEY, currentTodoList);
    }

    public getBookmarks(): Bookmark[] {
        return this.storage.get(STORAGE_KEY) ? this.storage.get(STORAGE_KEY) : [...this.mockedData];
    }
}