import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { chefsData } from 'src/app/data/data';

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
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.chefs = chefsData;
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    for (let i = 0; i < this.chefs.length; i++) {
      if (this.chefs[i].id == this.id) {
        this.chef = this.chefs[i];
      }
    }
  }

  editChef() {}
}
