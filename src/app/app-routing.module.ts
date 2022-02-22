import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home/home-page/home-page.component';
import { PagesModule } from './pages/pages.module';

const routes: Routes = [
  {
    path:'add',
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
  },
  {
    path:'',
    component: HomePageComponent
  },
  {
    path: '**',
    redirectTo: '#'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
