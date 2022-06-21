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
    console.log(this.router.url);
    console.log(this.router.isActive('/admin/batch', true));
    this.active()
  }

  active() {
    if (this.router.isActive('/admin/batch', true)) {
      this.item = 'Batch'
    }
    else if (this.router.isActive('/admin/mentor', true)) {
      this.item = 'Mentor'
    }
    else {
      this.item = 'Request'
    }
  }
}
