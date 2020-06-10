import { Group } from './group.interface';

export interface Bookmark {
    name: string;
    url?: string;
    group: Group;
}