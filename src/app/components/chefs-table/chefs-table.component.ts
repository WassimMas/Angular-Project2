import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { chefsData } from 'src/app/data/data';

@Component({
  selector: 'app-chefs-table',
  templateUrl: './chefs-table.component.html',
  styleUrls: ['./chefs-table.component.css'],
})
export class ChefsTableComponent implements OnInit {
  chefs: any = [];
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.chefs = chefsData;
  }

  display(id: number) {
    this.router.navigate([`chefInfo/${id}`]);
  }

  edit(id: any) {
    this.router.navigate([`editPlat/${id}`]);
  }
}
