import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { platsData } from 'src/app/data/data';

@Component({
  selector: 'app-plats-table',
  templateUrl: './plats-table.component.html',
  styleUrls: ['./plats-table.component.css'],
})
export class PlatsTableComponent implements OnInit {
  plats: any = [];
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.plats = platsData;
  }

  display(id: number) {
    this.router.navigate([`platInfo/${id}`]);
  }

  edit(id: any) {
    this.router.navigate([`editPlat/${id}`]);
  }
}
