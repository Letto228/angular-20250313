import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    selector: 'app-new-description',
    standalone: true,
    imports: [],
    templateUrl: './new-description.component.html',
    styleUrl: './new-description.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewDescriptionComponent {}
