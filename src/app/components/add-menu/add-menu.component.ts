import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PlatService } from 'src/app/services/plat.service';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.css'],
})
export class AddMenuComponent implements OnInit {
  menu: any = {};
  AddMenuForm!: FormGroup;
  constructor(private platService: PlatService) {}

  ngOnInit(): void {}

  addMenu() {
    console.log('this is menu', this.menu);
    this.platService.addPlat(this.menu).subscribe();
  }
}
