import { Component, OnInit } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  pFiedType = 'password'
  pIconTooltip = 'Mostrar Contraseña'
  user: string
  pass: string
  constructor(private fb: FormBuilder,) {

    this.user = 
    this.pass = '1233445'
   }

  ngOnInit(): void {
  }

  login(){
  console.log('hola')
}
  }
