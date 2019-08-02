import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FiltersPipe } from './filters.pipe';
import { MzDatepickerModule, MzInputModule, MzModalModule } from 'ngx-materialize';


@NgModule({
  declarations: [
    AppComponent,
    FiltersPipe
  ],
  imports: [
    BrowserAnimationsModule,
    MzDatepickerModule,
    MzModalModule,
    MzInputModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
