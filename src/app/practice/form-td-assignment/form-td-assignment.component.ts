import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-td-assignment',
  templateUrl: './form-td-assignment.component.html',
  styleUrls: ['./form-td-assignment.component.css']
})
export class FormTdAssignmentComponent implements OnInit {
  defaultSubscription = 'Advanced';
  isSubmmitted = false;
  @ViewChild('f') signUpForm: NgForm;
  userData = {
    email: '',
    subscription: '',
    password: ''
  };

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log('Email: ' + this.signUpForm.value.email);
    console.log('Subscription: ' + this.signUpForm.value.subscription);
    console.log('password: ' + this.signUpForm.value.password);
    this.userData.email = this.signUpForm.value.email;
    this.userData.subscription = this.signUpForm.value.subscription;
    this.userData.password = this.signUpForm.value.password;
    this.isSubmmitted = true;
    // this.viewform();
    this.signUpForm.reset();
  }

  viewform() {
    console.log(this.signUpForm.value);
    console.log('valid: ' + this.signUpForm.valid);
    console.log('dirty: ' + this.signUpForm.dirty);
    console.log('pristine: ' + this.signUpForm.pristine);
    console.log('touched: ' + this.signUpForm.touched);
  }

}
