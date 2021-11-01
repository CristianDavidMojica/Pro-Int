import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-register-group',
  templateUrl: './register-group.component.html',
  styleUrls: ['./register-group.component.scss']
})
export class RegisterGroupComponent implements OnInit {

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
      nameProject: ['', [Validators.required]],
      codeGroup: ['', [Validators.required, Validators.minLength(2)]],
      date: ['', [Validators.required]],
      text: ['', [Validators.required, Validators.maxLength(200), Validators.minLength(50)]], 
      career: ['', [Validators.required]],
      codeStudent: ['', [Validators.required]],
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

  get nameProjectField(){
    return this.form.get('nameProject');
  }
  get codeGroupField(){
    return this.form.get('codeGroup');
  }
  get dateField(){
    return this.form.get('date');
  }
  get textField(){
    return this.form.get('text');
  }
  get careerField(){
    return this.form.get('career');
  }
  get codeStudentField(){
    return this.form.get('codeStudent');
  }

}
