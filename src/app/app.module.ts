import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnnualProjectEditComponent } from './annual-project-edit/annual-project-edit.component';
import { RecipeComponent } from './recipe/recipe.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [AppComponent, AnnualProjectEditComponent, RecipeComponent, NavComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
