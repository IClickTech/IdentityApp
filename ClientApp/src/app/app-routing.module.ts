import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  // { path: 'play', component: PlayComponent },
  { path: 's', loadChildren: () => import('./01shared/shared.module').then(module => module.SharedModule)},
  { path: 'a', loadChildren: () => import('./02features/account/account.module').then(module => module.AccountModule)},
  { path: 'f', loadChildren: () => import('./02features/features.module').then(module => module.FeaturesModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
