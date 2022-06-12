import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss'],
})
export class RecipeComponent implements OnInit {
  form = this.fb.group({
    name: ['', [Validators.required]],
    description: ['', [Validators.required]],
    ingredients: this.fb.array([]),
  });

  get ingredients(): FormArray {
    return this.form.get('ingredients') as FormArray;
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  newIngredient(): FormGroup {
    return this.fb.group({
      name: ['', [Validators.required]],
      quantity: ['', [Validators.required]],
    });
  }

  addIngredient() {
    this.ingredients.push(this.newIngredient());
  }

  removeIngredient(index: number) {
    this.ingredients.removeAt(index);
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
