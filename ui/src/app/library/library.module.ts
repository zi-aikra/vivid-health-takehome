import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryComponent } from './library.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    LibraryComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    LibraryComponent
  ]
})
export class LibraryModule { }
