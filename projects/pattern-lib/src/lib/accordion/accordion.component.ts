import { Component, Input, Output, EventEmitter } from "@angular/core";
//import { Placement } from "../common/enums";

export enum Placement {
  left = 'left',
  right = 'right',
  top = 'top',
  bottom = 'bottom'
}

@Component({
    selector: 'sdc-accordion',
    templateUrl: './accordion.component.html',
    styleUrls: ['./accordion.component.scss']
})



export class AccordionComponent {



    @Input('arrow-direction') arrowDirection: Placement;
    @Input('css-class') customCSSClass: string;
    @Input('title') title: string;
    @Input('open') open: boolean;
    @Output('accordionChanged') changed = new EventEmitter<boolean>();
    @Input() public testId: string;

    public accordionArrowDirection = Placement;

    public toggleAccordion(){
        this.open = !this.open;
        this.changed.emit(this.open);
    }
}
