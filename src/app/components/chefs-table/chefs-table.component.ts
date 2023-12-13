import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChefService } from 'src/app/services/chef.service';

@Component({
  selector: 'app-chefs-table',
  templateUrl: './chefs-table.component.html',
  styleUrls: ['./chefs-table.component.css'],
})
export class ChefsTableComponent implements OnInit {
  chefs: any = [];
  constructor(private router: Router, private chefService: ChefService) {}

  ngOnInit(): void {
    this.getAllChefs();
  }

  display(id: number) {
    this.router.navigate([`chefInfo/${id}`]);
  }

  edit(id: any) {
    this.router.navigate([`editChef/${id}`]);
  }
  delete(id: any) {
    this.chefService.deleteChef(id).subscribe((res) => {
      console.log('Here response from BE', res.msg);
      if (res.msg) {
        this.getAllChefs();
      }
    });
  }

  getAllChefs() {
    this.chefService.getAllChefs().subscribe((res) => {
      console.log('Here response from BE', res.findedChefs);
      this.chefs = res.findedChefs;
    });
  }
}
