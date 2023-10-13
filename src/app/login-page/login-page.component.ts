import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { LoggedIn } from '../store/login/login.Action';
import { loggedInSelector } from '../store/login/login.selector';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit{
  form!: FormGroup;
  private formSubmitAttempt!: boolean;

  constructor(private formBuilder: FormBuilder,
    private fb: FormBuilder, private store:Store,private route:Router ) { 
  }
  ngOnInit(): void {
    this.store.select(loggedInSelector).subscribe((res)=>{
      console.log(res,"151654")
      if(res ==='success'){
  this.route.navigate(['/home'])
      }
    })
    this.form = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  isFieldInvalid(field: any) {
    return true
    // return (
    //   (!this.form.get(field).valid && this.form.get(field).touched) ||
    //   (this.form.get(field).untouched && this.formSubmitAttempt)
    // );
  }


  onSubmit(): void {
    console.log(this.form.value,"34::")
    this.store.dispatch(LoggedIn(this.form.value))

  }



}
