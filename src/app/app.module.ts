import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreatePartComponent } from './create-part/create-part.component';
import { PartListComponent } from './part-list/part-list.component';
import { UpdatePartComponent } from './update-part/update-part.component';
import { PartDetailsComponent } from './part-details/part-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CreatePartComponent,
    PartListComponent,
    UpdatePartComponent,
    PartDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule ,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
