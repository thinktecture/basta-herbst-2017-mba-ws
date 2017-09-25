import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ListComponent} from './components/list/list.component';
import {CreateComponent} from './components/create/create.component';
import {DetailComponent} from './components/detail/detail.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'list',
        component: ListComponent
    },
    {
        path: 'create',
        component: CreateComponent
    },
    {
        path: 'detail/:id',
        component: DetailComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { useHash: true })
    ],
    exports: [
        RouterModule
    ]
})
export class RoutingModule {

}
