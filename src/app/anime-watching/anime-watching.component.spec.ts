import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeWatchingComponent } from './anime-watching.component';

describe('AnimeWatchingComponent', () => {
  let component: AnimeWatchingComponent;
  let fixture: ComponentFixture<AnimeWatchingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnimeWatchingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnimeWatchingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
