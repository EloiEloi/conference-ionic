import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'sessions',
    loadChildren: () => import('./sessions/sessions.module').then(m => m.SessionsPageModule)
  },
  {
    path: 'presentateurs',
    loadChildren: () => import('./presentateurs/presentateurs.module').then(m => m.PresentateursPageModule)
  },
  {
    path: 'sessions-detail/:id',
    loadChildren: () => import('./sessions/sessions-detail/sessions-detail.module').then(m => m.SessionsDetailPageModule)
  },
  {
    path: 'presentateurs-detail/:id',
    loadChildren: () => import('./presentateurs/presentateurs-detail/presentateurs-detail.module').then(m => m.PresentateursDetailPageModule)
  },
  {
    path: 'telephone',
    loadChildren: () => import('./infos/telephone/telephone.module').then(m => m.TelephonePageModule)
  },
  { path: 'notes', loadChildren: './notes/notes.module#NotesPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
