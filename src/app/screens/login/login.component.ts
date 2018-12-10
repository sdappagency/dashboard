import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import {
	Validators,
	FormGroup,
	FormBuilder
} from '@angular/forms';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	loginForm: FormGroup;
	submitted = false;
	error: number;

	constructor(
		private _auth: AuthService,
		private _router: Router,
		private formBuilder: FormBuilder
	) {}

	ngOnInit() {
		this.loginForm = this.formBuilder.group({
			email: ['', [Validators.required, Validators.email]],
			password: ['', [Validators.required, Validators.minLength(4)]]
		});
	}

	get f() {
		return this.loginForm.controls;
	}

	onSubmit() {
		this.submitted = true;

		if (this.loginForm.invalid) {
			return;
		}

		this._auth.login(this.loginForm.value).subscribe(
			res => {
				console.log(res);
				localStorage.setItem('token', res.token);
				this._router.navigate(['/']);
			},
			err => {
				console.log(err);
				this.error = err.status;
				console.log(this.error);
			}
		);
	}
}
