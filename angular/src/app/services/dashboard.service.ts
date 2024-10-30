import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { API } from './constant';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(public http: HttpClient) { 
   
  }
  getChartData(): Observable<any> {
    const res = {
      data: {
        piechart: [["name", "namee", "asda", "adasda", "adsads", "asdgg", "dfgdf"], ["1", "2","3","4","5","6","7"]],
        lineChart: [["name", "namee", "asda", "adasda", "adsads", "asdgg", "dfgdf"], [1, 2,3,4,5,6,7]],
        barChart: [["name", "namee", "asda", "adasda", "adsads", "asdgg", "dfgdf"], [1, 2,3,4,5,6,7]],
        doughnutChart: [["name", "namee", "asda", "adasda", "adsads", "asdgg", "dfgdf"], [1, 2,3,4,5,6,7]],
      }
    };
    // return of(res);
    return this.http.get(API.GET_DATA)
  }
}
