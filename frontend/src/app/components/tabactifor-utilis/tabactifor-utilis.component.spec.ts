import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabactiforUtilisComponent } from './tabactifor-utilis.component';

describe('TabactiforUtilisComponent', () => {
  let component: TabactiforUtilisComponent;
  let fixture: ComponentFixture<TabactiforUtilisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabactiforUtilisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabactiforUtilisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
