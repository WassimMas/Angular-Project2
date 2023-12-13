import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ChefService } from 'src/app/services/chef.service';

@Component({
  selector: 'app-edit-chef',
  templateUrl: './edit-chef.component.html',
  styleUrls: ['./edit-chef.component.css'],
})
export class EditChefComponent implements OnInit {
  EditChefForm!: FormGroup;
  chef: any = {};
  chefs: any = [];
  id: any;
  error: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private chefService: ChefService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    // for (let i = 0; i < this.chefs.length; i++) {
    //   if (this.chefs[i].id == this.id) {
    //     this.chef = this.chefs[i];
    //   }
    // }
    this.chefService.getChefById(this.id).subscribe((res) => {
      console.log('Here response from BE', res.findedChef);
      this.chef = res.findedChef;
    });
  }

  editChef() {
    this.chefService.editChef(this.chef).subscribe((res) => {
      console.log('Here response from BE', res.msg);
      if (res.msg) {
        this.router.navigate(['dashboard']);
      } else {
        this.error = 'error in editing';
      }
    });
  }
}
