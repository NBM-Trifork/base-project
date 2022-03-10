import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonComponent } from './shared/components/button/button.component';
import { GsapIntroductionComponent } from './modules/gsap-introduction/gsap-introduction.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { NgModule } from '@angular/core';
import { PageComponent } from './modules/page/page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistrationFormComponent } from './shared/registration-form/registration-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    HeaderComponent,
    PageComponent,
    RegistrationFormComponent,
    GsapIntroductionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  exports: [ButtonComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
