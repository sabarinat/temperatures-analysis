import { Component, ViewChild } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardService } from '../../services/dashboard.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
interface UserData {
  id: number;
  date: string;
  temperature: number;
}
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatTabsModule, DashboardComponent, HttpClientModule, MatTableModule, MatPaginatorModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {
  constructor(public dbService : DashboardService){}
  displayedColumns: string[] = ['id', 'name', 'age'];
  
  dataSource = new MatTableDataSource<UserData>();
   item: UserData[] = [];

  ngOnInit() {
    this.getData();
  }
  getData() {
    this.dbService.getChartData().subscribe((res: any) => { 
      res.data.barChart[1].forEach((ele: any, index: number) => {
           this.item.push({"id" : index+1, "date": res.data.barChart[0][index], "temperature" : ele})
      })
      this.dataSource = new MatTableDataSource<UserData>(this.item);
      this.dataSource.paginator = this.paginator; 
    })
  }
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    if (this.dataSource) {
      this.dataSource.paginator = this.paginator;
    }  }
}
