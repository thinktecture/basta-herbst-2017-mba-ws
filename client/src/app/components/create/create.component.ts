import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {PastaService} from '../../services/pasta.service';

@Component({
    selector: 'app-create',
    templateUrl: 'create.component.html'
})
export class CreateComponent {
    public myForm: FormGroup;

    constructor(formBuilder: FormBuilder, private pastaService: PastaService) {
        this.myForm = formBuilder.group({
            name: '',
            description: ''
        });
    }

    public formSubmit() {
        const {name, description} = this.myForm.value;

        this.pastaService.create(name, description)
            .subscribe(dish => console.log(dish));
    }
}
