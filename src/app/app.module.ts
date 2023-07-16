import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridComponent } from './Components/grid/grid.component';
import { HeaderComponent } from './Components/header/header.component';
import { AddEditEmpComponent } from './Components/add-edit-emp/add-edit-emp.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { LoadingSpinnerComponent } from './Components/loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    HeaderComponent,
    AddEditEmpComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
