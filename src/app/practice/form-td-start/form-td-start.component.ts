import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-td-start',
  templateUrl: './form-td-start.component.html',
  styleUrls: ['./form-td-start.component.css']
})
export class FormTdStartComponent implements OnInit {
  @ViewChild('f') signUpForm: NgForm;
  defaultQuestion = 'pet';
  answer = '';
  genders = ['Male', 'Female'];
  user = {
    username: '',
    email: '',
    gender: '',
    secret: '',
    answer: ''
  };
  submitted = false;

  constructor() { }

  ngOnInit() {
  }

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signUpForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: '',
    //     gender: 'male'
    //   },
    //   secret: 'pet',
    //   answer: ''
    // });
    this.signUpForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }

  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

  onSubmit() {
    this.user.username = this.signUpForm.value.userData.username;
    this.user.email = this.signUpForm.value.userData.email;
    this.user.gender = this.signUpForm.value.userData.gender;
    this.user.secret = this.signUpForm.value.secret;
    this.user.answer = this.signUpForm.value.answer;
    this.submitted = true;
    this.signUpForm.reset();
  }

}
