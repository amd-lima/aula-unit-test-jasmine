import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a list of investments', () => {
    let investments = component.investments;
    expect(investments.length).toBeGreaterThan(0);
    expect(investments.length).toBe(4);
    expect(investments[0].name).toContain('Itau');
  });

  it('(I) should render a list of investments', () => {
    let investments = fixture.debugElement.nativeElement.querySelectorAll('.list-item');
    expect(investments.length).toBeGreaterThan(0);
    expect(investments.length).toBe(4);
    expect(investments[1].textContent.trim()).toEqual('Bradesco | 2000'); // trim remove the space in the beginning and end of the string

  });
});
