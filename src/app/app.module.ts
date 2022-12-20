import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  AccountComponent,
  ContainerComponent,
  GotoComponent,
  LoginComponent,
  RecoverComponent,
  RegisterComponent,
} from './components/intex';
import {
  ErroreLengthDirective,
  TouchedDirective,
  ZeroLetterDirective
} from './directives';

import { TranslatePipe } from './translate.pipe';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AccountComponent,
    GotoComponent,
    ContainerComponent,
    RecoverComponent,
    ErroreLengthDirective,
    ZeroLetterDirective,
    TranslatePipe,
    TouchedDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
