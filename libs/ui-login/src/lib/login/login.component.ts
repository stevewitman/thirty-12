import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AuthService } from '@nx12/core-auth';

@Component({
  selector: 'ui-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	
	form: FormGroup;
	destroy$: Subject<boolean> = new Subject()

  constructor(
    private router: Router,
		private formBuilder: FormBuilder,
		private authService: AuthService
  ) { }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.form = this.formBuilder.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(4)
      ]]
    })
  }

  get email() {
    return this.form.get('email')
  }
  get password() {
    return this.form.get('password')
  }
	
	onSubmit() {
    if (this.form.invalid) return;
    this.authService.authenticate(this.form.value).pipe(
      takeUntil(this.destroy$)
    ).subscribe(({access_token}) => {
      localStorage.setItem('token', access_token);
      this.router.navigate(['/projects']);
    })
  }

}
