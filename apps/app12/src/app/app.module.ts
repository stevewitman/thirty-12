import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from '@nx12/material';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { RoutingModule } from './routing.module';

import { UiToolbarModule } from '@nx12/ui-toolbar';
import { UiLoginModule } from '@nx12/ui-login';
import { UiPageNotFoundModule } from '@nx12/ui-page-not-found';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreAuthModule } from '@nx12/core-auth';
import { ProjectsListComponent } from './projects/projects-list/projects-list.component';
import { ProjectDetailsComponent } from './projects/project-details/project-details.component';
import { ProjectComponent } from './projects/project/project.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    ProjectsListComponent,
    ProjectDetailsComponent,
    ProjectComponent,
  ],
  imports: [
    BrowserModule,
		BrowserAnimationsModule,
		CoreAuthModule,
		MaterialModule,
		HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    RoutingModule,
    UiLoginModule,
    UiPageNotFoundModule,
    UiToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
