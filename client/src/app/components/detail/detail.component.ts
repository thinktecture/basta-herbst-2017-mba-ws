import {Component} from '@angular/core';
import {PastaService} from '../../services/pasta.service';
import {Dish} from '../../models/dish';
import {ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'app-detail',
    templateUrl: 'detail.component.html'
})
export class DetailComponent {
    public dish: Dish;

    constructor(private _pastaService: PastaService, activatedRoute: ActivatedRoute) {
        activatedRoute.params
            .switchMap(params => this._pastaService.getById(params['id']))
            .subscribe(dish => this.dish = dish);
    }


}
