import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banking',
  templateUrl: './banking.component.html',
  styleUrls: ['./banking.component.scss']
})
export class BankingComponent implements OnInit {
  private saving: number = 1000;
  private wallet: number = 100;

  constructor() { }

  ngOnInit(): void {
  }

  getMoney(): number {
    return this.saving;
  }

  getMoneyWallet(): number {
    return this.wallet;
  }

  setMoney(value: string): number | undefined {
    const sacar = Number(value);

    if(isNaN(sacar) || this.saving < sacar) {
      return;
    }

    this.saving -= sacar;
    return this.wallet += sacar;
  }

  setMoneyWallet(value: string): number | undefined {
    const depositar = Number(value);

    if(isNaN(depositar) || this.wallet < depositar) {
      return;
    }

    this.wallet -= depositar;
    return this.saving += depositar;
  }

}
