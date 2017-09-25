import {Component} from '@angular/core';
import {PastaService} from '../../services/pasta.service';
import {Dish} from '../../models/dish';

@Component({
    selector: 'app-list',
    templateUrl: 'list.component.html'
})
export class ListComponent {
    public dishes: Dish[];

    constructor(private _pastaService: PastaService) {
        _pastaService.list()
            .subscribe(dishes => this.dishes = dishes);
    }
}
