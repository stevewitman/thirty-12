import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MaterialModule } from '@nx12/material';

@NgModule({
  imports: [CommonModule, MaterialModule],
  declarations: [PageNotFoundComponent],
  exports: [PageNotFoundComponent]
})
export class UiPageNotFoundModule {}
