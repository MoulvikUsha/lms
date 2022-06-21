import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  resetForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.resetForm = new FormGroup({
      existPassword: new FormControl('', Validators.required),
      newPassword: new FormControl('', Validators.required),
      reEnterPassword: new FormControl('', Validators.required),
    })
  }

  ngOnInit(): void {
  }

  show: boolean = false;
  show1: boolean = false;
  show2: boolean = false;
  password: string | undefined;

  showPassword() {
    if (this.password === 'password') {
      this.password = 'text';
      this.show = true;
    } else {
      this.password = 'password';
      this.show = false;
  }
}
  showPassword1() {
    if (this.password === 'password') {
      this.password = 'text';
      this.show1 = true;
    } else {
      this.password = 'password';
      this.show1 = false;
  }
}
  showPassword2() {
    if (this.password === 'password') {
      this.password = 'text';
      this.show2 = true;
    } else {
      this.password = 'password';
      this.show2 = false;
  }
}

  onSubmit() {

  }

  visible() {

  }
  visible1() {

  }
  visible2() {

  }
}
