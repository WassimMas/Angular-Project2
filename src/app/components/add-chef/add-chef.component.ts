import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-chef',
  templateUrl: './add-chef.component.html',
  styleUrls: ['./add-chef.component.css'],
})
export class AddChefComponent implements OnInit {
  AddChefForm!: FormGroup;
  chef: any = {};
  constructor() {}

  ngOnInit(): void {}
  addChef() {
    console.log('this is chef', this.chef);
  }
}
