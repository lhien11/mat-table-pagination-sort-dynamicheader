import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTableModule, MatInputModule, MatButtonModule, MatSortModule, MatSort, MatPaginatorModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule,
    MatInputModule,
    FormsModule,
    MatSortModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
