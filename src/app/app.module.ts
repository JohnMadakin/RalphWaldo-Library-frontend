import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage/homepage.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './homepage/login/login.component';
import { SignupComponent } from './homepage/signup/signup.component';
import { AlertService } from './shared/alert.service';
import { AuthService } from './auth/__services__/auth.service';
import { AuthGaurd } from './auth/__services__/auth-guard.service';
// import { AdminModule } from './admin/admin.module';
// import { HeaderComponent } from './homepage/homepage/header/header.component';
import { DialogService } from './services/dialog.service';
import { HeaderModule } from './homepage/homepage/header/header.module';

const modules = [
  MatFormFieldModule,
  MatInputModule,
  MatTabsModule,
  MatIconModule,
  MatDialogModule,
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule,
  MatSnackBarModule,
  MatProgressSpinnerModule,
  HeaderModule
];
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
    SignupComponent,
    // HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ...modules,
    BrowserAnimationsModule
  ],
  providers: [
    AlertService,
    AuthService,
    AuthGaurd,
    DialogService
  ],
  bootstrap: [AppComponent],
  entryComponents: [LoginComponent, SignupComponent]
})
export class AppModule { }
