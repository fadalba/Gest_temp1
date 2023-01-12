import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaceutilisateurComponent } from './espaceutilisateur.component';

describe('EspaceutilisateurComponent', () => {
  let component: EspaceutilisateurComponent;
  let fixture: ComponentFixture<EspaceutilisateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspaceutilisateurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EspaceutilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
