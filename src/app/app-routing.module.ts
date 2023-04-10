import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { PersonneComponent } from './personne/personne.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthComponent } from './guards/auth/auth.component';
import { ProduitsComponent } from './produits/produits.component';
import { DashPersonneComponent } from './dash-personne/dash-personne.component';
import { UsersComponent } from './users/users.component';
const routes: Routes = [
  {path:'signup',component: SignupComponent },
  {path:'user',component: UsersComponent ,  canActivate: [AuthGuard]},
  {path: 'produits',component: ProduitsComponent},
  {path: 'personne',component: PersonneComponent, canActivate: [AuthGuard]},
  { path: 'auth', component: AuthComponent },
  {path: 'dashpersonne',component: DashPersonneComponent},
  {path: '',redirectTo: '/auth', pathMatch: 'full'}, //composant par défaut
  { path: '**', redirectTo: '/auth', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
