import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  exports: [
    CommonModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ]
})
export class AppModule { }
