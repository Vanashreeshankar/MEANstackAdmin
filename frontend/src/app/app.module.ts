import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule,  routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

import { MaterialModule } from './material/material.module';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AdminService } from './admin.service';
@NgModule({
  declarations: [
    AppComponent,
  
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    BrowserAnimationsModule
  ],

  providers: [AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
