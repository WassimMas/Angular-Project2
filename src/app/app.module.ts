import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroComponent } from './components/hero/hero.component';
import { ExclusiveItemsComponent } from './components/exclusive-items/exclusive-items.component';
import { HistoryComponent } from './components/history/history.component';
import { VideoComponent } from './components/video/video.component';
import { MenuComponent } from './components/menu/menu.component';
import { ChefsComponent } from './components/chefs/chefs.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { NewsComponent } from './components/news/news.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { AddMenuComponent } from './components/add-menu/add-menu.component';
import { AddChefComponent } from './components/add-chef/add-chef.component';
import { PlatsComponent } from './components/plats/plats.component';
import { ChefComponent } from './components/chef/chef.component';
import { PlatComponent } from './components/plat/plat.component';
import { PlatsTableComponent } from './components/plats-table/plats-table.component';
import { ChefsTableComponent } from './components/chefs-table/chefs-table.component';
import { PlatInfoComponent } from './components/plat-info/plat-info.component';
import { EditPlatComponent } from './components/edit-plat/edit-plat.component';
import { HttpClientModule } from '@angular/common/http';
import { ChefInfoComponent } from './components/chef-info/chef-info.component';
import { EditChefComponent } from './components/edit-chef/edit-chef.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    ExclusiveItemsComponent,
    HistoryComponent,
    VideoComponent,
    MenuComponent,
    ChefsComponent,
    ReservationComponent,
    TestimonialsComponent,
    NewsComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    AdminComponent,
    AddMenuComponent,
    AddChefComponent,
    PlatsComponent,
    ChefComponent,
    PlatComponent,
    PlatsTableComponent,
    ChefsTableComponent,
    PlatInfoComponent,
    EditPlatComponent,
    ChefInfoComponent,
    EditChefComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
