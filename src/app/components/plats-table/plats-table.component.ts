import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { platsData } from 'src/app/data/data';
import { PlatService } from 'src/app/services/plat.service';

@Component({
  selector: 'app-plats-table',
  templateUrl: './plats-table.component.html',
  styleUrls: ['./plats-table.component.css'],
})
export class PlatsTableComponent implements OnInit {
  plats: any = [];
  constructor(private router: Router, private platService: PlatService) {}

  ngOnInit(): void {
    this.plats = platsData;
  }

  display(id: number) {
    this.router.navigate([`platInfo/${id}`]);
  }

  edit(id: any) {
    this.router.navigate([`editPlat/${id}`]);
  }

  delete(id: number) {
    this.platService.deleteplat(id).subscribe();
  }
}
