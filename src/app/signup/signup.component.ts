import { Component, OnInit } from '@angular/core';

import {FormBuilder, FormGroup, Validators ,FormArray,FormControl } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  submitted = false;
  requiredForm: any;
  constructor(private fb: FormBuilder) {
    this.myForm();
 }
myForm(){
  this.requiredForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
    password: ['', [Validators.required, Validators.minLength(6)]]
});
}
  ngOnInit() {
   
}

onSubmit() {
  
     
  
}};
