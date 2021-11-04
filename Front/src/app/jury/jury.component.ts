import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms'
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-jury',
  templateUrl: './jury.component.html',
  styleUrls: ['./jury.component.scss']
})
export class JuryComponent implements OnInit {
  selected = 'Sergio';
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