import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './service/authconfig.interceptor';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnectionComponent } from './components/connection/connection.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { HeaderComponent } from './components/header/header.component';
import { TableauComponent } from './components/tableau/tableau.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { PageAdminComponent } from './components/page-admin/page-admin.component';
import { TableArchiveComponent } from './components/table-archive/table-archive.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ModifierComponent } from './components/modifier/modifier.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SidebaruserComponent } from './components/sidebaruser/sidebaruser.component';
import { EspaceutilisateurComponent } from './components/espaceutilisateur/espaceutilisateur.component';
import { AffichageActifsComponent } from './components/affichage-actifs/affichage-actifs.component';
import { AffichageArchivesComponent } from './components/affichage-archives/affichage-archives.component';
import { TabactiforUtilisComponent } from './components/tabactifor-utilis/tabactifor-utilis.component';
import { DashboardAdminComponent } from './components/dashboard-admin/dashboard-admin.component';
import { TestComponent } from './components/test/test.component';
import { Test2Component } from './components/test2/test2.component';
import { AffichageactiforUserComponent } from './components/affichageactifor-user/affichageactifor-user.component';

@NgModule({
  declarations: [
    AppComponent,
    ConnectionComponent,
    InscriptionComponent,
    HeaderComponent,
    TableauComponent,
    PageAdminComponent,
    TableArchiveComponent,
    ModifierComponent,
    SidebarComponent,
    SidebaruserComponent,
    EspaceutilisateurComponent,
    AffichageActifsComponent,
    AffichageArchivesComponent,
    TabactiforUtilisComponent,
    DashboardAdminComponent,
    TestComponent,
    Test2Component,
    AffichageactiforUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    FormsModule,
    NgxPaginationModule

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
