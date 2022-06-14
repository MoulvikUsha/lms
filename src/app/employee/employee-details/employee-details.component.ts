import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';

export interface ExampleTab {
  label: string;
  route: string;
}

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {

  asyncTabs: Observable<ExampleTab[]>;

  constructor() { 
    this.asyncTabs = new Observable((observer: Observer<ExampleTab[]>) => {
      setTimeout(() => {
        observer.next([
          {label: 'First', route: 'primary'},
          {label: 'Second', route: 'Content 2'},
          {label: 'Third', route: 'Content 3'},
        ]);
      }, 1000);
    });
  }

  ngOnInit(): void {
  }

  links = [
    {
      label:'Primary Info',
      route:'primary'
    },
    {
      label:'Secondary Info',
      route:'secondary'
    },
    {
      label:'Education Details',
      route:'education'
    },
    {
      label:'Address Details',
      route:'address'
    },
    {
      label:'Bank Details',
      route:'bank'
    },
    {
      label:'Technical Skills',
      route:'skills'
    },
    {
      label:'Experience',
      route:'experience'
    },
    {
      label:'Contact',
      route:'contact'
    },
  ];
}
