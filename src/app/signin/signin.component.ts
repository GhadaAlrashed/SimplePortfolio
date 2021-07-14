import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  submitted = false;
  requiredForm: any;
  constructor(private fb: FormBuilder) {   this.myform(); }
  myform() {
    this.requiredForm = this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]]
    });
}
ngOnInit() {}

onSubmit() {

  this.submitted = true;
     
  // stop here if form is invalid
  if (this.requiredForm.invalid) {
      return;
  }
     
else  alert('Your request has been submitted for approval');
}
}

