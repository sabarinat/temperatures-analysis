import { Component, ElementRef } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { DashboardService } from '../../services/dashboard.service';
import { HttpClientModule } from '@angular/common/http';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

Chart.register(...registerables);


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [HttpClientModule, MatDatepickerModule, MatNativeDateModule, MatButtonModule, MatFormFieldModule,ReactiveFormsModule,MatInputModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  chartForm : FormGroup
  constructor(private el: ElementRef, public dbService : DashboardService) {

    this.chartForm = new FormGroup({
      startDate: new FormControl(''),
      endDate: new FormControl('')
    });
  }
 
ngOnInit() {
  this.getDataCharts()
  

}

getDataCharts() {
   this.dbService.getChartData().subscribe((res: any) => {
    const barCtx = this.el.nativeElement.querySelector('#barChart');
  new Chart(barCtx, {
    type: 'bar',
    data: {
      labels: res.data.barChart[0],
      datasets: [{
        label: 'Temperature',
        data: res.data.barChart[1],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  // Line Chart
  const lineCtx = this.el.nativeElement.querySelector('#lineChart');
  new Chart(lineCtx, {
    type: 'line',
    data: {
      labels: res.data.lineChart[0],
      datasets: [{
        label: 'Temperature',
        data: res.data.lineChart[1],
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  // Doughnut Chart
  const doughnutCtx = this.el.nativeElement.querySelector('#doughnutChart');
  new Chart(doughnutCtx, {
    type: 'doughnut',
    data: {
      labels: res.data.doughnutChart[0],
      datasets: [{
        label: 'Temperature',
        data: res.data.doughnutChart[1],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(100, 206, 86, 0.2)',
          'rgba(30, 30, 86, 0.2)',
          "pink",
          "grey"

        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(100, 206, 86, 0.2)',
          'rgba(30, 30, 86, 0.2)',
          "pink",
          "grey"

        ],
        borderWidth: 1,
      }]
    },
    options: {
      responsive: true,
    }
  });

  // Pie Chart
  const pieCtx = this.el.nativeElement.querySelector('#pieChart');
  new Chart(pieCtx, {
    type: 'pie',
    data: {
      labels: res.data.piechart[0],
      datasets: [{
        label: 'Temperature',
        data: res.data.piechart[1],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(100, 206, 86, 0.2)',
          'rgba(30, 30, 86, 0.2)',
          "pink",
          "grey"

        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(100, 206, 86, 0.2)',
          'rgba(30, 30, 86, 0.2)',
          "pink",
          "grey"

        ],
        borderWidth: 1,
      }]
    },
    options: {
      responsive: true,
    }
  });
  })
    
    }
 
    // apply() {
    //   console.log(this.chartForm.value)
    //   this.getDataChartsWithFilter()
    //   // alert(this.chartForm.value)
    // }
    // getDataChartsWithFilter() {
    //   if(this.chartForm.controls["startDate"].value && this.chartForm.controls["endDate"].value ) {
        
    //     this.dbService.getChartDataWithFilter(this.chartForm.controls["startDate"].value, this.chartForm.controls["endDate"].value).subscribe((res: any) => {
    //       const barCtx = this.el.nativeElement.querySelector('#barChart');
    //     new Chart(barCtx, {
    //       type: 'bar',
    //       data: {
    //         labels: res.data.barChart[0],
    //         datasets: [{
    //           label: 'Temperature',
    //           data: res.data.barChart[1],
    //           backgroundColor: 'rgba(54, 162, 235, 0.2)',
    //           borderColor: 'rgba(54, 162, 235, 1)',
    //           borderWidth: 1,
    //         }]
    //       },
    //       options: {
    //         scales: {
    //           y: {
    //             beginAtZero: true
    //           }
    //         }
    //       }
    //     });
      
    //     // Line Chart
    //     const lineCtx = this.el.nativeElement.querySelector('#lineChart');
    //     new Chart(lineCtx, {
    //       type: 'line',
    //       data: {
    //         labels: res.data.lineChart[0],
    //         datasets: [{
    //           label: 'Temperature',
    //           data: res.data.lineChart[1],
    //           fill: false,
    //           borderColor: 'rgba(75, 192, 192, 1)',
    //           tension: 0.1
    //         }]
    //       },
    //       options: {
    //         scales: {
    //           y: {
    //             beginAtZero: true
    //           }
    //         }
    //       }
    //     });
      
    //     // Doughnut Chart
    //     const doughnutCtx = this.el.nativeElement.querySelector('#doughnutChart');
    //     new Chart(doughnutCtx, {
    //       type: 'doughnut',
    //       data: {
    //         labels: res.data.doughnutChart[0],
    //         datasets: [{
    //           label: 'Temperature',
    //           data: res.data.doughnutChart[1],
    //           backgroundColor: [
    //             'rgba(255, 99, 132, 0.2)',
    //             'rgba(54, 162, 235, 0.2)',
    //             'rgba(255, 206, 86, 0.2)',
    //             'rgba(100, 206, 86, 0.2)',
    //             'rgba(30, 30, 86, 0.2)',
    //             "pink",
    //             "grey"
      
    //           ],
    //           borderColor: [
    //             'rgba(255, 99, 132, 1)',
    //             'rgba(54, 162, 235, 1)',
    //             'rgba(255, 206, 86, 1)',
    //             'rgba(100, 206, 86, 0.2)',
    //             'rgba(30, 30, 86, 0.2)',
    //             "pink",
    //             "grey"
      
    //           ],
    //           borderWidth: 1,
    //         }]
    //       },
    //       options: {
    //         responsive: true,
    //       }
    //     });
      
    //     // Pie Chart
    //     const pieCtx = this.el.nativeElement.querySelector('#pieChart');
    //     new Chart(pieCtx, {
    //       type: 'pie',
    //       data: {
    //         labels: res.data.piechart[0],
    //         datasets: [{
    //           label: 'Temperature',
    //           data: res.data.piechart[1],
    //           backgroundColor: [
    //             'rgba(255, 99, 132, 0.2)',
    //             'rgba(54, 162, 235, 0.2)',
    //             'rgba(255, 206, 86, 0.2)',
    //             'rgba(100, 206, 86, 0.2)',
    //             'rgba(30, 30, 86, 0.2)',
    //             "pink",
    //             "grey"
      
    //           ],
    //           borderColor: [
    //             'rgba(255, 99, 132, 1)',
    //             'rgba(54, 162, 235, 1)',
    //             'rgba(255, 206, 86, 1)',
    //             'rgba(100, 206, 86, 0.2)',
    //             'rgba(30, 30, 86, 0.2)',
    //             "pink",
    //             "grey"
      
    //           ],
    //           borderWidth: 1,
    //         }]
    //       },
    //       options: {
    //         responsive: true,
    //       }
    //     });
    //     })
    //   }
    // }

}
