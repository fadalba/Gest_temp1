import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichageactiforUserComponent } from './affichageactifor-user.component';

describe('AffichageactiforUserComponent', () => {
  let component: AffichageactiforUserComponent;
  let fixture: ComponentFixture<AffichageactiforUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffichageactiforUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffichageactiforUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
