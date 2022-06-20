import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mentor-dialog',
  templateUrl: './mentor-dialog.component.html',
  styleUrls: ['./mentor-dialog.component.scss']
})
export class MentorDialogComponent implements OnInit {

  createMentor: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.createMentor = this.fb.group({
      mentorName: [''],
      empId: [''],
      email: [''],
      skills: [''],
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {

  }

}
