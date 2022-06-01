import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AnnualProjectService } from '../annual-project.service';
import { AnnualProject } from '../models/annual-project.model';

@Component({
  selector: 'app-annual-project-edit',
  templateUrl: './annual-project-edit.component.html',
  styleUrls: ['./annual-project-edit.component.scss'],
})
export class AnnualProjectEditComponent implements OnInit {
  annualProjectEditForm = new FormGroup({
    financeCode: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
  });

  annualProject: AnnualProject | null = null;
  isLoading = false;

  constructor(private annualProjectService: AnnualProjectService) {
    this.isLoading = true;
    this.annualProjectService.getAnnualProject().subscribe((annualProject) => {
      this.isLoading = false;
      this.annualProject = annualProject;
      this.annualProjectEditForm.patchValue(this.annualProject);
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.annualProjectEditForm.value);
    console.log(this.annualProject);
    this.annualProject = {
      ...this.annualProject,
      ...this.annualProjectEditForm.value,
    };
    console.log(this.annualProject);
    if (this.annualProject) {
      this.isLoading = true;
      this.annualProjectService
        .saveAnnualProject(this.annualProject)
        .subscribe((success) => {
          this.isLoading = false;
          console.log(success);
        });
    }
  }
}
