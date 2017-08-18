import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Error404Component } from './responses/error404/error404.component';
import { AboutComponent } from './about/about.component';
import { HttpExampleComponent } from './http-example/http-example.component';

const routes: Routes = [
  { path: '', children: [] },
  { path: 'about', component: AboutComponent },
  { path: '**', component: Error404Component },
  { path: 'http', component: HttpExampleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
