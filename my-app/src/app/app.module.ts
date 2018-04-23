import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Opted in to FormsModule

import { AppComponent } from './app.component'; // Declared
import { HeroesComponent } from './heroes/heroes.component'; // Declared component


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // Essential step in importing process 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
