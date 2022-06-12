import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnnualProjectEditComponent } from './annual-project-edit/annual-project-edit.component';
import { RecipeComponent } from './recipe/recipe.component';

const routes: Routes = [
  { path: '', redirectTo: 'recipe-form', pathMatch: 'full' },
  { path: 'recipe-form', component: RecipeComponent },
  { path: 'annual-project-form', component: AnnualProjectEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
