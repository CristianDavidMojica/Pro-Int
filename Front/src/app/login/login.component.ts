import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

enum FormField {
  user = 'user',
  p = 'pass'
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup
  formField = FormField
  pFiedType = 'password'
  pIconTooltip = 'Mostrar Contraseña'
  user: string
  pass: string
  constructor(private fb: FormBuilder,) {
    this.form = this.buildForm()
    this.user = this.form.value.user
    this.pass = '1233445'
   }

  ngOnInit(): void {
  
  }

  buildForm(): FormGroup {
    return this.fb.group({
      [ FormField.user ]: this.fb.control(null, [ Validators.required ]),
      [ FormField.p ]: this.fb.control(null, [ Validators.required ]),
    })
  }

  login(){
  console.log('hola')
}
  }
