import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage/homepage.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const modules = [
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule
];
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ...modules,
    BrowserAnimationsModule
  ],
  exports: [
    ...modules,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
