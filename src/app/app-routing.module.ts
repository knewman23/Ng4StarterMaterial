import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {Error404Component} from './responses/error404/error404.component';
import {AboutComponent} from './about/about.component';
import {HttpExampleComponent} from './http-example/http-example.component';
import {HomeComponent} from './home/home.component';
import {FileUploadComponent} from './file-upload/file-upload.component';

const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'http', component: HttpExampleComponent},
    {path: 'file-upload', component: FileUploadComponent},
    {path: '**', component: Error404Component}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
