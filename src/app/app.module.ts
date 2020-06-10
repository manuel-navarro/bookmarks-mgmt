import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BookmarksListComponent } from './bookmarks-list/bookmarks-list.component';
import { BookmarksDetailComponent } from './bookmarks-detail/bookmarks-detail.component';
import { LayoutComponent } from './layout/layout.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CardComponent } from './card/card.component';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { BookmarksEffects } from './+state/bookmarks.effects';
import { ExpandableTableComponent } from './expandable-table/expandable-table.component';
import { MaterialModule } from './shared/modules/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { bookmarkReducer } from './+state/bookmarks.reducer';

@NgModule({
  declarations: [
    AppComponent,
    BookmarksListComponent,
    BookmarksDetailComponent,
    LayoutComponent,
    CardComponent,
    ExpandableTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MaterialModule,
    StoreModule.forRoot({ app: bookmarkReducer }),
    EffectsModule.forRoot([BookmarksEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
