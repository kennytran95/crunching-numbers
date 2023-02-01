import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';
import { ScoreFormComponent } from './components/score-form/score-form.component';
import { SimpleResultComponent } from './components/simple-result/simple-result.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    loadChildren: () =>
      import('./components/home/home.module').then((mod) => mod.HomeModule),
  },
  {
    path: 'scoreForm',
    component: ScoreFormComponent,
  },
  {
    path: 'scoreResults',
    component: SimpleResultComponent,
  },
  {
    path: '**',
    component: ErrorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
