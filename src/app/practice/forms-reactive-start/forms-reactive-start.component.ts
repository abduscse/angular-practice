import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-forms-reactive-start',
  templateUrl: './forms-reactive-start.component.html',
  styleUrls: ['./forms-reactive-start.component.css']
})
export class FormsReactiveStartComponent implements OnInit {
  genders = ['male', 'female'];
  forbiddenUsernames = ['max', 'anna'];
  signUpForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.signUpForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        email: new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails)
      }),
      gender: new FormControl('male'),
      hobbies: new FormArray([])
    });

    // Reacting to value changes on the whole form.
    // this.signUpForm.valueChanges.subscribe(
    //   value => console.log(value)
    // );

    // Reacting to value changes on a form control.
    // this.signUpForm.get('userData')['controls']['email'].valueChanges.subscribe(
    //   value => console.log(value)
    // );

    // Reacting to state changes on the whole form.
    // this.signUpForm.statusChanges.subscribe(
    //   state => console.log(state)
    // );

    // Reacting to value changes on a form control.
    // this.signUpForm.get('userData')['controls']['email'].statusChanges.subscribe(
    //   state => console.log(state)
    // );

    this.signUpForm.setValue({
      userData: {
        username: 'abdus',
        email: 'abdus@test.com'
      },
      gender: 'male',
      hobbies: []
    });

    this.signUpForm.patchValue({
      userData: {
        email: 'abduscse@gmail.com'
      }
    });
  }

  onSubmit() {
    console.log(this.signUpForm);
    this.signUpForm.reset({
      gender: 'male'
    });
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signUpForm.get('hobbies')).push(control);
  }

  forbiddenNames(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return { nameIsForbidden: true };
    }
    return null;
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({ emailIsForbidden: true });
        } else {
          resolve(null);
        }
      }, 1000);
    }
    );
    return promise;
  }
}
