import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  approve() {

  }

  reject() {

  }

  emp: any[] = [
    { id: 1, name: 'John' }
  ]
  checked: boolean = false;

  selectAll() {
    var value = this.checked ? false : true;
    this.emp.forEach(element => {
      element.checked = value;
    });
  }
}
