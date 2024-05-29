import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoOneComponent } from './demo-one/demo-one.component';
import { LogdemoComponent } from './logdemo/logdemo.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoOneComponent,
    LogdemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
