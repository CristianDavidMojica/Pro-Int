import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms'
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  form: FormGroup;
  constructor(
    private FormBuilder: FormBuilder
  ) {
    this.buildForm();
  
   }

  ngOnInit(): void {
  
  }

  private buildForm() {
    this.form = this.FormBuilder.group({
      user: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8),]],
    });

    this.form.valueChanges
    .pipe(
      debounceTime(600)
    )
    .subscribe(value => {
      console.log(value);
    });
  }

  login(event: Event){
    event.preventDefault();
    if(this.form.valid){
      const value = this.form.value;
      console.log(value);
    }else{
      this.form.markAllAsTouched();
    }
  }

  get userField(){
    return this.form.get('user');
  }
  get passwordField(){
    return this.form.get('password');
  }
  }
