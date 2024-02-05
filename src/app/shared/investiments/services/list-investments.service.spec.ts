import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { ListInvestmentsService } from './list-investments.service';
import { HttpClient } from '@angular/common/http';
import { Investments } from '../model/investments';
import { MOCK_LIST } from './list-investments.mock';

describe('ListInvestmentsService', () => {
  let service: ListInvestmentsService;
  let httpTestingController: HttpTestingController;
  let httpClient: HttpClient;

  const URL =
    'http://raw.githubusercontent.com/troquatte/fake-server/main/investiments-all.json';

  const mockInvestments: Array<Investments> = MOCK_LIST

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ListInvestmentsService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a list of investments', (done) => {
    service.list().subscribe((res: Array<Investments>) => {
      expect(res[0].name).toEqual('Bank 1');
      expect(res[0].value).toEqual(1000);
      done();
    })

    const req = httpTestingController.expectOne(URL);
    req.flush(mockInvestments);
    expect(req.request.method).toEqual('GET');
  });
});
