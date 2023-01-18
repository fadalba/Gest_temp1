import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConnectionComponent } from './components/connection/connection.component';
import { HeaderComponent } from './components/header/header.component';
import { PageAdminComponent } from './components/page-admin/page-admin.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TableArchiveComponent } from './components/table-archive/table-archive.component';
import { TableauComponent } from './components/tableau/tableau.component';
import { TestComponent } from './components/test/test.component';
import { AuthGuard } from "./service/auth.guard";

const routes: Routes = [
  { path: '', redirectTo: '/log-in', pathMatch: 'full' },
  { path: 'log-in', component:ConnectionComponent},
  // { path: 'sign-up', component: InscriptionComponent },
  // { path: 'side', component: SidebarComponent },
  //  { path: 'tabActif', component: AffichageactiforUserComponent },
  // { path: 'tabArchives', component: TableArchiveComponent },
  // { path: ' EspaceUser', component: EspaceutilisateurComponent },
  { path: ' bd', component: PageAdminComponent },
  // { path: 'ListActifs', component: AffichageActifsComponent },
  // { path: 'listArchives', component: AffichageArchivesComponent},
  { path: 'user-profile/:id', component: PageAdminComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
