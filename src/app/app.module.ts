import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'; // Importez RouterModule et Routes depuis @angular/router
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Importez FormsModule et ReactiveFormsModule depuis @angular/forms
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { GestionParrainageComponent } from './gestion-parrainage/gestion-parrainage.component';
import { UploadFichierElectoralComponent } from './upload-fichier-electoral/upload-fichier-electoral.component';
import { AjoutCandidatComponent } from './ajout-candidat/ajout-candidat.component';
import { EvolutionParrainageComponent } from './evolution-parrainage/evolution-parrainage.component';
import { SearchCandidatComponent } from './search-candidat/search-candidat.component';
import { ListeCandidatComponent } from './liste-candidat/liste-candidat.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfilUserComponent } from './profil-user/profil-user.component';
import { HttpClientModule } from '@angular/common/http';
const routes: Routes = [
    { path: '', component: AppComponent },
    { path: 'connexion', component: LoginPageComponent },
    { path: 'fichierElectoral', component: UploadFichierElectoralComponent },
    { path: 'AjoutCandidat', component: AjoutCandidatComponent },
    { path: 'gestionParrainage', component: GestionParrainageComponent },
    { path: 'evolutionParrainage', component: EvolutionParrainageComponent },
    { path: 'searchCandidat', component: SearchCandidatComponent },
    { path: 'profilUser', component: ProfilUserComponent },
    { path: 'listeCandidat', component: ListeCandidatComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    GestionParrainageComponent,
    UploadFichierElectoralComponent,
    AjoutCandidatComponent,
    EvolutionParrainageComponent,
    SearchCandidatComponent,
    ListeCandidatComponent,
    DashboardComponent,
    ProfilUserComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
