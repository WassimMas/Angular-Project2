import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { chefsData } from 'src/app/data/data';
import { ChefService } from 'src/app/services/chef.service';

@Component({
  selector: 'app-chef-info',
  templateUrl: './chef-info.component.html',
  styleUrls: ['./chef-info.component.css'],
})
export class ChefInfoComponent implements OnInit {
  c: any = {};
  chefs: any = [];
  id: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private chefService: ChefService
  ) {}

  ngOnInit(): void {
    // this.chefs = chefsData;
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    // for (let i = 0; i < this.chefs.length; i++) {
    //   if (this.chefs[i].id == this.id) {
    //     this.c = this.chefs[i];
    //   }
    // }
    this.chefService.getChefById(this.id).subscribe((res) => {
      console.log('Here response from BE', res.findedChef);
      this.c = res.findedChef;
    });
  }
}
