import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { platsData } from 'src/app/data/data';
import { PlatService } from 'src/app/services/plat.service';

@Component({
  selector: 'app-plat-info',
  templateUrl: './plat-info.component.html',
  styleUrls: ['./plat-info.component.css'],
})
export class PlatInfoComponent implements OnInit {
  plats: any = [];
  p: any = {};
  id: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private platService: PlatService
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    // this.plats = platsData;
    // for (let i = 0; i < this.plats.length; i++) {
    //   if (this.plats[i].id == this.id) {
    //     this.p = this.plats[i];
    //     break;
    //   }
    // }

    this.platService.getPlatById(this.id).subscribe();
  }
}
