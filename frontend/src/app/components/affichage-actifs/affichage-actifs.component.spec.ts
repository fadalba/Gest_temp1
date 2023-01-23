import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichageActifsComponent } from './affichage-actifs.component';

describe('AffichageActifsComponent', () => {
  let component: AffichageActifsComponent;
  let fixture: ComponentFixture<AffichageActifsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffichageActifsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffichageActifsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
