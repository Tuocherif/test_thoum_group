import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { DetailComponent } from './pages/detail/detail.component';
import { CountryCardComponent } from './components/country-card/country-card.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { ContinentCardComponent } from './continent-card/continent-card.component';
import { PaysBycontinentComponent } from './pays-bycontinent/pays-bycontinent.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    DetailComponent,
    CountryCardComponent,
    DropdownComponent,
    ContinentCardComponent,
    PaysBycontinentComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule,],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
