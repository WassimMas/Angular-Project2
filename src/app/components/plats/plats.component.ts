import { Component, OnInit } from '@angular/core';
import { platsData } from 'src/app/data/data';

@Component({
  selector: 'app-plats',
  templateUrl: './plats.component.html',
  styleUrls: ['./plats.component.css'],
})
export class PlatsComponent implements OnInit {
  plats: any = [];
  p: any = {};
  constructor() {}

  ngOnInit(): void {
    this.plats = platsData;
  }
}
