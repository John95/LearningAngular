import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Opted in to FormsModule

import { AppComponent } from './app.component'; // Declared
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component'; // Declared component
import { HeroService } from './hero.service';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // Essential step in importing process 
  ],
  providers: [
    HeroService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
