import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { SectionComponent } from './components/section/section.component';
import { InputTextComponent } from './components/input-text/input-text.component';
import { InputCurrencyComponent } from './components/input-currency/input-currency.component';
import { PlaygroundComponent } from './components/playground/playground.component';

import { FormService } from './services/form.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    SectionComponent,
    InputTextComponent,
    InputCurrencyComponent,
    PlaygroundComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [FormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
