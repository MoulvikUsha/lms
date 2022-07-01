import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {

  batch: boolean = true;
  item: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  contents = ['Batch', 'Mentor', 'Request']

  ngAfterContentChecked() {
    if (this.router.url == '/admin/batch') {
      this.item = 'Batch'
    } 
    else if (this.router.url == '/admin/mentor') {
      this.item = 'Mentor'
    }
    else{
      this.item = 'Request'
    }
  }
}
