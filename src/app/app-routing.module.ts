import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { PlatsComponent } from './components/plats/plats.component';
import { ChefsComponent } from './components/chefs/chefs.component';
import { AddMenuComponent } from './components/add-menu/add-menu.component';
import { AddChefComponent } from './components/add-chef/add-chef.component';
import { PlatInfoComponent } from './components/plat-info/plat-info.component';
import { EditPlatComponent } from './components/edit-plat/edit-plat.component';
import { ChefInfoComponent } from './components/chef-info/chef-info.component';
import { EditChefComponent } from './components/edit-chef/edit-chef.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'dashboard', component: AdminComponent },
  { path: 'plats', component: PlatsComponent },
  { path: 'chefs', component: ChefsComponent },
  { path: 'add-menu', component: AddMenuComponent },
  { path: 'add-chef', component: AddChefComponent },
  { path: 'platInfo/:id', component: PlatInfoComponent },
  { path: 'editPlat/:id', component: EditPlatComponent },
  { path: 'chefInfo/:id', component: ChefInfoComponent },
  { path: 'editChef/:id', component: EditChefComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
