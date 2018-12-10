import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
	selector: 'app-nav2',
	templateUrl: './nav2.component.html',
	styleUrls: ['./nav2.component.scss']
})
export class Nav2Component implements OnInit {
	constructor(private _authService: AuthService) {}

	ngOnInit() {}
}
