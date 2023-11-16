import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ChefService } from 'src/app/services/chef.service';

@Component({
  selector: 'app-add-chef',
  templateUrl: './add-chef.component.html',
  styleUrls: ['./add-chef.component.css'],
})
export class AddChefComponent implements OnInit {
  AddChefForm!: FormGroup;
  chef: any = {};
  constructor(private chefService: ChefService) {}

  ngOnInit(): void {}
  addChef() {
    console.log('this is chef', this.chef);
    this.chefService.addChef(this.chef).subscribe();
  }
}
