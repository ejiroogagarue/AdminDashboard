import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registerForm = this.fb.group({
    email: ['', Validators.required],
    password : ['', Validators.required],
  });
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  onSubmit() {

  }

  signup() {

  }
}
