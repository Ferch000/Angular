import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginaPage } from './login.page';

describe('PaginaPage', () => {
  let component: PaginaPage;
  let fixture: ComponentFixture<PaginaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
