import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MdToolbarModule} from '@angular/material';
import {MdButtonModule, MdCheckboxModule} from '@angular/material';
import {HeaderComponent} from './shared/header/header.component';
import {FooterComponent} from './shared/footer/footer.component';
import {Error404Component} from './responses/error404/error404.component';
import {AboutComponent} from './about/about.component';
import {HttpExampleComponent} from './http-example/http-example.component';
import {HomeComponent} from './home/home.component';
import {FileUploadComponent} from './file-upload/file-upload.component';
import {FileSelectDirective, FileDropDirective, FileUploader} from 'ng2-file-upload/ng2-file-upload';

import 'hammerjs';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        Error404Component,
        AboutComponent,
        HttpExampleComponent,
        HomeComponent,
        FileUploadComponent,
        FileSelectDirective,
        FileDropDirective
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpModule,
        FormsModule,
        BrowserAnimationsModule,
        MdButtonModule,
        MdCheckboxModule,
        MdToolbarModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule {
}
