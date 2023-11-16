import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { platsData } from 'src/app/data/data';
import { PlatService } from 'src/app/services/plat.service';

@Component({
  selector: 'app-edit-plat',
  templateUrl: './edit-plat.component.html',
  styleUrls: ['./edit-plat.component.css'],
})
export class EditPlatComponent implements OnInit {
  EditPlatForm!: FormGroup;
  menu: any = {};
  id: any;
  plats: any = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private platService: PlatService
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    // this.plats = platsData;
    // for (let i = 0; i < this.plats.length; i++) {
    //   if (this.plats[i].id == this.id) {
    //     this.menu = this.plats[i];
    //   }
    // }

    this.platService.getPlatById(this.id).subscribe();
  }
  editPlat() {
    console.log('here new plat', this.menu);
    this.platService.editPlat(this.menu).subscribe();
  }
}
