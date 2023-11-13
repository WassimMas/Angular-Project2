import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chefs',
  templateUrl: './chefs.component.html',
  styleUrls: ['./chefs.component.css'],
})
export class ChefsComponent implements OnInit {
  chefs: any = [{}, {}, {}, {}];
  c: any = {};
  constructor() {}

  ngOnInit(): void {
    this.chefs = [
      { id: '1', name: 'Adam Taylor', experience: 'Chef Master' },
      { id: '2', name: 'Jhon White', experience: 'Chef Master' },
      { id: '3', name: 'David Stone', experience: 'Chef Master' },
      { id: '4', name: 'Philip Snow', experience: 'Chef Master' },
    ];
  }
}
