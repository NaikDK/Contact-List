import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'
import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes} from "@angular/router";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
      BrowserModule,
      MatCardModule,
      HttpClientModule,
      FormsModule,
      BrowserAnimationsModule,
      FlexLayoutModule,
      MatFormFieldModule,
      MatInputModule,
      MatButtonModule,
      SharedModule,
      RouterModule.forRoot([
        {path: '', component: ContactsComponent},
        {path: 'register', component:RegisterComponent},
        {path: 'login', component: LoginComponent}
      ])
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
