import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { FoundComponent } from './components/found/found.component';
import { LostComponent } from './components/lost/lost.component';
import { ResultsComponent } from './components/results/results.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'found', component: FoundComponent},
  {path: 'lost', component: LostComponent},
  {path: 'results', component: ResultsComponent},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
