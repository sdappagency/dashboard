import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './screens/home/home.component';
import { LoginComponent } from './screens/login/login.component';
import { PageNotFoundComponent } from './screens/page-not-found/page-not-found.component';
import { RegisterComponent } from './screens/register/register.component';
import { AuthGuard } from './auth.guard';
import { FormTestComponent } from './form-test/form-test.component';
import { ProfileComponent } from './screens/profile/profile.component';

const routes: Routes = [
	{ path: 'login', component: LoginComponent },
	{ path: 'register', component: RegisterComponent },
	{ path: '', component: HomeComponent, canActivate: [AuthGuard] },
	{ path: 'notFound', component: PageNotFoundComponent },
	{ path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
	{ path: 'test', component: FormTestComponent },
	{ path: '**', redirectTo: '/notFound', pathMatch: 'full' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
