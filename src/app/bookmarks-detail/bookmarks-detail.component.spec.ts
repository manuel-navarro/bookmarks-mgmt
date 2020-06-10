import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarksDetailComponent } from './bookmarks-detail.component';

describe('BookmarksDetailComponent', () => {
  let component: BookmarksDetailComponent;
  let fixture: ComponentFixture<BookmarksDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookmarksDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarksDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
