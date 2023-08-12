import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  @Input()
  name: string | undefined;

  @Output()
  valueThis: EventEmitter<string> = new EventEmitter<string>();

  valfromChild = '';

  sendValues() {
    this.valueThis.emit(this.valfromChild);
  }
}
