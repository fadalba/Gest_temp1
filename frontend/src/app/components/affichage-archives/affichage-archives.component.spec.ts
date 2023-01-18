import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichageArchivesComponent } from './affichage-archives.component';

describe('AffichageArchivesComponent', () => {
  let component: AffichageArchivesComponent;
  let fixture: ComponentFixture<AffichageArchivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffichageArchivesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffichageArchivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
