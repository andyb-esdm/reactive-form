import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { AnnualProject } from './models/annual-project.model';

@Injectable({
  providedIn: 'root',
})
export class AnnualProjectService {
  constructor() {}

  getAnnualProject(): Observable<AnnualProject> {
    const annualProject: AnnualProject = {
      id: '1',
      financeCode: '3',
      description: 'Annual Project Description 1',
      startDate: '2021-10-09',
      endDate: '2022-10-09',
    };
    return of(annualProject).pipe(delay(1000));
  }

  saveAnnualProject(annualProject: AnnualProject): Observable<boolean> {
    return of(true).pipe(delay(1000));
  }
}
