import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  clicked = true;
  constructor() { }

  ngOnInit(): void {
  }

  edit(event: any) {
    if (event.target.type === 'submit') {
      this.clicked = false
    }
  }
}
