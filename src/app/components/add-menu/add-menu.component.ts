import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.css'],
})
export class AddMenuComponent implements OnInit {
  menu: any = {};
  AddMenuForm!: FormGroup;
  constructor() {}

  ngOnInit(): void {}

  addMenu() {
    console.log('this is menu', this.menu);
  }
}
