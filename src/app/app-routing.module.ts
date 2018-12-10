import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './screens/home/home.component';
import { LoginComponent } from './screens/login/login.component';
import { PageNotFoundComponent } from './screens/page-not-found/page-not-found.component';
import { RegisterComponent } from './screens/register/register.component';
import { AuthGuard } from './auth.guard';
import { ProfileComponent } from './screens/profile/profile.component';
import { UsersComponent } from './screens/users/users.component';
import { ProductsComponent } from './screens/products/products.component';
import { ServicesComponent } from './screens/services/services.component';
import { OrdersComponent } from './screens/orders/orders.component';
import { TabletsComponent } from './screens/tablets/tablets.component';

const routes: Routes = [
	{ path: 'login', component: LoginComponent },
	{ path: 'register', component: RegisterComponent },
	{ path: '', component: HomeComponent, canActivate: [AuthGuard] },
	{ path: 'notFound', component: PageNotFoundComponent },
	{ path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
	{ path: 'users', component: UsersComponent, canActivate: [AuthGuard] },
	{ path: 'tablets', component: TabletsComponent, canActivate: [AuthGuard] },
	{ path: 'products', component: ProductsComponent, canActivate: [AuthGuard] },
	{ path: 'services', component: ServicesComponent, canActivate: [AuthGuard] },
	{ path: 'orders', component: OrdersComponent, canActivate: [AuthGuard] },
	{ path: '**', redirectTo: '/notFound', pathMatch: 'full' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
