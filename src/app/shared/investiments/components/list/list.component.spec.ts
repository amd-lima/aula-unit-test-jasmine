import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MOCK_LIST } from '../../services/list-investments.mock';
import { Investments } from '../../model/investments';
import { ListInvestmentsService } from '../../services/list-investments.service';
import { of } from 'rxjs';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let service: ListInvestmentsService;

  const mockInvestments: Array<Investments> = MOCK_LIST

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListComponent ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListComponent);
    service = TestBed.inject(ListInvestmentsService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a list of investments', () => {
    spyOn(service, 'list').and.returnValue(of (mockInvestments));
    component.ngOnInit();
    fixture.detectChanges();

    expect(service.list).toHaveBeenCalledWith();
    expect(component.investments.length).toBe(4);
    expect(component.investments.length).toBeGreaterThan(0);
    expect(component.investments[0].name).toContain('Bank 1');
  });

  it('(I) should render a list of investments', () => {
    spyOn(service, 'list').and.returnValue(of (mockInvestments));
    component.ngOnInit();
    fixture.detectChanges();
    let investments = fixture.debugElement.nativeElement.querySelectorAll('.list-item');
     
    expect(investments.length).toBeGreaterThan(0);
    expect(investments.length).toBe(4);
    expect(investments[1].textContent.trim()).toEqual('Bank 2 | 2000'); // trim remove the space in the beginning and end of the string

  });
});
