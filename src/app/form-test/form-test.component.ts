import { Component, OnInit } from '@angular/core';
import {
	FormGroup,
	FormControl,
	FormBuilder,
	Validators
} from '@angular/forms';

@Component({
	selector: 'app-form-test',
	templateUrl: './form-test.component.html',
	styleUrls: ['./form-test.component.scss']
})
export class FormTestComponent implements OnInit {
	loginForm: FormGroup;
	submitted = false;

	constructor(private formBuilder: FormBuilder) {}

	ngOnInit() {
		this.loginForm = this.formBuilder.group({
			firstName: ['', Validators.required],
			lastName: ['', Validators.required],
			email: ['', [Validators.required, Validators.email]],
			password: ['', [Validators.required, Validators.minLength(6)]]
		});
	}

	// convenience getter for easy access to form fields
	get f() {
    console.log('this.loginForm.controls', this.loginForm.controls);
		return this.loginForm.controls;
	}

	onSubmit() {
		this.submitted = true;

		// stop here if form is invalid
		if (this.loginForm.invalid) {
			return;
		}

		alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value));
	}
}
