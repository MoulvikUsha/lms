import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mentor',
  templateUrl: './mentor.component.html',
  styleUrls: ['./mentor.component.scss']
})
export class MentorComponent implements OnInit {

  present: boolean = true;
  item: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  items() {
    if (this.router.url == '/mentor/batch') {
      this.item = 'Request List'
    }
  }
}
