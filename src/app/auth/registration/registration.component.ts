import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {


  spinner:boolean=false
  constructor() {
    // this.registerForm=this.formBuilder.group({
    //   name:['',[Validators.required]],
    //   mobile:['',[Validators.required]],
    //   email:['',[Validators.required]],
    //   password:['',[Validators.required]]
    // })
  }
  ngOnInit(): void {
  }
  registerUser(){

  }

}
