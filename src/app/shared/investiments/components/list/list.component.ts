import { Component, OnInit } from '@angular/core';
import { Investments } from '../../model/investments';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public investments: Array<Investments> = [
    {
      name: 'Itau',
      value: 1000
    },
    {
      name: 'Bradesco',
      value: 2000
    },
    {
      name: 'Santander',
      value: 3000
    },
    {
      name: 'Nubank',
      value: 4000
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
