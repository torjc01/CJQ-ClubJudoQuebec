import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { JudoComponent } from './judo/judo.component';
import { ClubComponent } from './club/club.component';
import { CoursComponent } from './cours/cours.component';
import { EquipeComponent } from './equipe/equipe.component';
import { EquipementComponent } from './equipement/equipement.component';
import { GestionComponent } from './gestion/gestion.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent, 
    JudoComponent,
    WelcomeComponent,
    ClubComponent,
    CoursComponent,
    EquipeComponent,
    EquipementComponent,
    GestionComponent, 
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'judo', component: JudoComponent}, 
      { path: 'club', component: ClubComponent}, 
      { path: 'cours', component: CoursComponent}, 
      { path: 'equipe', component: EquipeComponent}, 
      { path: 'equipement', component: EquipementComponent}, 
      { path: 'gestion', component: GestionComponent}, 
      { path: 'welcome', component: WelcomeComponent}, 
      { path: '', redirectTo:'welcome', pathMatch: 'full'}, 
      { path: '**', redirectTo: 'welcome', pathMatch: 'full'} 
    ]), 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
