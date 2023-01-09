<<<<<<< HEAD
import { DashboardComponent } from './components/dashboard/dashboard.component';
=======
import { HeaderComponent } from './components/header/header.component';
>>>>>>> 987e55221981c4215d7e91a975ca1d1937cd464a
import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConnectionComponent } from './components/connection/connection.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { PageAdminComponent } from './components/page-admin/page-admin.component';
import { AuthGuard } from "./service/auth.guard";

const routes: Routes = [
  { path: '', redirectTo: '/log-in', pathMatch: 'full' },
  { path: 'header', component: HeaderComponent},
  { path: 'log-in', component: ConnectionComponent },
  { path: 'dash', component: DashboardComponent },
  { path: 'sign-up', component: InscriptionComponent },
  { path: 'user-profile/:id', component: PageAdminComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
