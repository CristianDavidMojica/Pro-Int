import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

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
      name: ['', [Validators.required]],
      code: ['', [Validators.required, Validators.minLength(8)]],
      password: ['', [Validators.required, Validators.minLength(8),]],
      date: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      text: ['', [Validators.required, Validators.maxLength(200), Validators.minLength(50)]],
      category: ['', [Validators.required]],
      gender: ['', [Validators.required]],
    });

    this.form.valueChanges
    .pipe(
      debounceTime(600)
    )
    .subscribe(value => {
      console.log(value);
    });
  }

  save(event: Event) {
    event.preventDefault();
    if(this.form.valid){
      const value = this.form.value;
      console.log(value);

    }else{
      this.form.markAllAsTouched();
    }
  }

  get nameField(){
    return this.form.get('name');
  }
  get codeField(){
    return this.form.get('code');
  }
  get passwordField(){
    return this.form.get('password');
  }
  get dateField(){
    return this.form.get('date');
  }
  get emailField(){
    return this.form.get('email');
  }
  get textField(){
    return this.form.get('text');
  }
  get categoryField(){
    return this.form.get('category');
  }
  get genderField(){
    return this.form.get('gender');
  }

}

