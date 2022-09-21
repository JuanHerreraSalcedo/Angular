import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterModule } from './counter/counter.module';
// import { CounterComponent } from './counter/counter.component';
// import { ButtonAddComponent } from './counter/button-add/button-add.component';
// import { ButtonDisComponent } from './counter/button-dis/button-dis.component';

@NgModule({
  declarations: [AppComponent,],
  imports: [BrowserModule, CounterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
