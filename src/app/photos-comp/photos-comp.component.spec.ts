import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosCompComponent } from './photos-comp.component';

describe('PhotosCompComponent', () => {
  let component: PhotosCompComponent;
  let fixture: ComponentFixture<PhotosCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotosCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotosCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
