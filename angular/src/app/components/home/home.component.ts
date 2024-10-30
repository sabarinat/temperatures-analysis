import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatTabsModule, DashboardComponent, HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(public dbService : DashboardService){}

}
