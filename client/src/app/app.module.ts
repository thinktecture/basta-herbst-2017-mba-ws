import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './components/app/app.component';
import {NavigationComponent} from './components/navigation/navigation.component';
import {HomeComponent} from './components/home/home.component';
import {RoutingModule} from './routing.module';
import {ListComponent} from './components/list/list.component';
import {PastaService} from './services/pasta.service';
import {HttpClientModule} from '@angular/common/http';
import {CreateComponent} from './components/create/create.component';
import {ReactiveFormsModule} from '@angular/forms';
import {DetailComponent} from './components/detail/detail.component';

@NgModule({
    declarations: [
        AppComponent,
        NavigationComponent,
        HomeComponent,
        ListComponent,
        CreateComponent,
        DetailComponent
    ],
    imports: [
        BrowserModule,
        RoutingModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
    providers: [
        PastaService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
