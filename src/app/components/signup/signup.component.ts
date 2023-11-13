import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
  test = true;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(5)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      pwd: [
        '',
        [Validators.required, Validators.minLength(5), Validators.maxLength(8)],
      ],
      confirmPwd: ['', Validators.required],
    });
  }
  signup() {
    console.log('this is', this.signupForm.value);
  }

  matchPwd() {
    let pwd = this.signupForm.value.pwd;
    let confirmPwd = this.signupForm.value.confirmPwd;
    if (pwd == confirmPwd) {
      this.test = true;
    } else {
      this.test = false;
    }
  }
}
