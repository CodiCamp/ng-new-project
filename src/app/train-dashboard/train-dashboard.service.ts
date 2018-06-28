import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@env';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Train } from './models/train';

const Get_URL = `${environment.API_URL}/trains`;

@Injectable({
  providedIn: 'root',
})
export class TrainDashboardService {
  constructor(private http: HttpClient) {
    console.log('Service created');
  }

  getTrains(): Observable<Train[]> {
    /***
     * API GET Example with error capturing
     */
    return this.http.get<Train[]>(Get_URL).pipe(
      catchError((error, obs) => {
        console.log('Catch', error, obs);
        // Used to parse the error to something else like a custom message
        // Also you can call another service here to track the error
        // TO DO: interceptors
        return throwError('My custom error message');
      }),
    );
  }

  editTrain(train: Train) {
    const Put_URL = `${environment.API_URL}/trains/${train.id}`;

    return this.http.put<Train[]>(Put_URL, train);
  }
}
