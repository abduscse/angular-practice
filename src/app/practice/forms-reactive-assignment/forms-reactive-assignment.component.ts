import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { CustomValidators } from '../../shared/cutom-validator';

@Component({
  selector: 'app-forms-reactive-assignment',
  templateUrl: './forms-reactive-assignment.component.html',
  styleUrls: ['./forms-reactive-assignment.component.css']
})
export class FormsReactiveAssignmentComponent implements OnInit {

  projectForm: FormGroup;

  ngOnInit() {
    this.projectForm = new FormGroup({
      // 'project': new FormControl(null, [Validators.required, CustomValidators.projectNameValidation]),
      'project': new FormControl(null, Validators.required, CustomValidators.projectNameValidationAsync), // with Async validation
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'status': new FormControl(null)
    });
  }

  onSubmit() {
    console.log(this.projectForm.value);
  }

}
