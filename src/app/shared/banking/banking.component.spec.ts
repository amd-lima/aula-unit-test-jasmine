import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankingComponent } from './banking.component';

describe('BankingComponent', () => {
  let component: BankingComponent;
  let fixture: ComponentFixture<BankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('getMoney should return 1000', () => {
    expect(component.getMoney()).toBe(1000);
  });

  it('getMoneyWallet should return 100', () => {
    expect(component.getMoneyWallet()).toBe(100);
  });

  it('setMoney should take 100 from saving and add 100 in wallet', () => {
    component.setMoney('100');
    expect(component.getMoney()).toBe(900);
    expect(component.getMoneyWallet()).toBe(200);
  });

  it('setMoneyWallet should take 100 from wallet and add 100 in saving', () => {
    component.setMoneyWallet('100');
    expect(component.getMoney()).toBe(1100);
    expect(component.getMoneyWallet()).toBe(0);
  });

  it('setMoney should not have string or savings < value', () => {
    expect(component.setMoney('string')).not.toBeTruthy();
    expect(component.setMoney('2000')).not.toBeTruthy();

  });

  it('setMoney should not have string or deposit < value', () => {
    expect(component.setMoneyWallet('string')).not.toBeTruthy();
    expect(component.setMoneyWallet('2000')).not.toBeTruthy();

  });

  it('(I) setMoney should take 10 from wallet and add 100 in savings', () => {
    let el = fixture.debugElement.nativeElement;
    el.querySelector('#input-depositar').value = '10';
    el.querySelector('#depositar').click();

    fixture.detectChanges();
    expect(el.querySelector('#get-saving').textContent).toBe('1010');
    expect(component.getMoney()).toBe(1010);
    expect(component.getMoneyWallet()).toBe(90);
  });

});
