import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {

  filled: boolean = false;
  filled1: boolean = false;
  filled2: boolean = false;
  filled3: boolean = false;
  filled4: boolean = false;
  filled5: boolean = false;
  filled6: boolean = false;
  filled7: boolean = false;
  filled8: boolean = false;
  constructor() { }
  
  ngOnInit(): void {
  }

}
