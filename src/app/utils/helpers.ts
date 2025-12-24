import { Directive } from "@angular/core";

@Directive({
    selector: '[goBack]',
    standalone: true,
    host: {
        '(click)': 'goBack()'
    }
})
export class GoBackDirective {
    goBack() {
        window.history.back();
    }
}