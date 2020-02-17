import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectsComponent } from './projects/projects.component';
import { LoginComponent } from '@nx12/ui-login';
import { PageNotFoundComponent } from '@nx12/ui-page-not-found';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {
    path: '', children: [
      {path: '', redirectTo: '/projects', pathMatch: 'full'},
      {path: 'projects', canActivate: [ AuthGuard ], component: ProjectsComponent},
    ]
  },
  {path: 'login', component: LoginComponent},
  {path: 'page-not-found', component: PageNotFoundComponent},
  {path: '**', redirectTo: 'page-not-found'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
