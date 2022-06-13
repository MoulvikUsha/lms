import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  constructor() { }

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
