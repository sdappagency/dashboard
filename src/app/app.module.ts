import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './screens/home/home.component';
import { LoginComponent } from './screens/login/login.component';
import { PageNotFoundComponent } from './screens/page-not-found/page-not-found.component';
import { NavComponent } from './layout/nav/nav.component';
import { FooterComponent } from './layout/footer/footer.component';
import { RegisterComponent } from './screens/register/register.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { Footer2Component } from './layout/footer2/footer2.component';
import { Nav2Component } from './layout/nav2/nav2.component';
import { HeaderComponent } from './layout/header/header.component';
import { ProfileComponent } from './screens/profile/profile.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { UsersComponent } from './screens/users/users.component';
import { ProductsComponent } from './screens/products/products.component';
import { BannerStatComponent } from './components/banner-stat/banner-stat.component';
import { ServicesComponent } from './screens/services/services.component';
import { OrdersComponent } from './screens/orders/orders.component';
import { TabletsComponent } from './screens/tablets/tablets.component';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		LoginComponent,
		PageNotFoundComponent,
		NavComponent,
		FooterComponent,
		RegisterComponent,
		Footer2Component,
		Nav2Component,
		HeaderComponent,
		ProfileComponent,
		SidebarComponent,
		UsersComponent,
		ProductsComponent,
		BannerStatComponent,
		ServicesComponent,
		OrdersComponent,
		TabletsComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		AppRoutingModule
	],
	providers: [
		AuthService,
		AuthGuard,
		{
			provide: HTTP_INTERCEPTORS,
			useClass: TokenInterceptorService,
			multi: true
		}
	],
	bootstrap: [AppComponent]
})
export class AppModule {}
