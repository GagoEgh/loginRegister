import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  AccountComponent,
  ContainerComponent,
  GotoComponent,
  LoginComponent,
  RecoverComponent,
  RegisterComponent
} from './components/intex';
import { ErroreLengthDirective, ZeroLetterDirective,DifferenceDirective } from './directives';







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
    DifferenceDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
