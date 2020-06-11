# Bookmarks Management

This project is a simple web application to manage Bookmarks, it's created using Angular 8, NgRx and Angular Material.



## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Live version

For a live version of the project, navigate to [https://bookmarks-mgmt.web.app/](https://bookmarks-mgmt.web.app/).

## Structure

```bash
.
├── app
│   ├── +state
│   ├── bookmarks-detail
│   ├── bookmarks-list
│   ├── card
│   ├── expandable-table
│   ├── layout
│   └── shared
│       ├── interfaces
│       └── modules
└── assets
```
#### `+state`
Directory containing the NgRx store to manage the bookmarks

#### `bookmarks-detail`
Component to show the form to add a bookmark

#### `bookmarks-list`
Component to list a bookmark group

#### `card`
Component to show content as a card. It is used, for example, by bookmarks-detail component.

#### `expandable-table`
Component in charge of showing an accordion with a table for each available group of bookmarks.

#### `layout`
Component representing the main layout used by the app.

#### `shared`
Directory containing common interfaces and modules used across the application.


## Screenshots

1. The content is grouped in three categories: Personal, Work and Leisure. This content is initially collapsed but a count for each group is shown.

![Alt text](screenshots/1-collapsed.png?raw=true "Bookmarks Management - Collapsed")


2. Content can be expanded by clicking "Expand All" button or directly from the group header.

![Alt text](screenshots/2-expanded.png?raw=true "Bookmarks Management - Expanded")


3. Click "Add" or "+" buttons to create a new Bookmark.

![Alt text](screenshots/3-empty-form.png?raw=true "Bookmarks Management - Empty form")


4. While the form is not properly filled the save action is disabled.

![Alt text](screenshots/4-invalid-form.png?raw=true "Bookmarks Management - Invalid form")


5. Once the form is valid, click on "Save" to save the Bookmark. It can be removed by clicking the paper bin icon in the list.

![Alt text](screenshots/5-valid-form.png?raw=true "Bookmarks Management - Valid form")

