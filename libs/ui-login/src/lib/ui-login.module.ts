import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { MaterialModule } from '@nx12/material';


@NgModule({
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
  declarations: [LoginComponent],
  exports: [LoginComponent]
})
export class UiLoginModule {}
