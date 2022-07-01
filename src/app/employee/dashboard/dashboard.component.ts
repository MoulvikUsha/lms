import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterContentChecked {

  item: any;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  ngAfterContentChecked() {
    if (this.router.url == '/employee/dashboard/mock') {
      this.item = 'Dashboard'
    }
    else if (this.router.url == '/employee/dashboard/profile') {
      this.item = 'Profile'
    }
  }
}
