import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input() text: string = 'Botón';
  @Input() type: 'primary' | 'secondary' = 'primary';
  @Input() disabled: boolean = false;
  @Input() icon: string = '';
  @Input() mode: string = '';
  @Input() color: string = '';
  @Output() onClick = new EventEmitter<void>();

  constructor() { }

  handleClick() {
    this.onClick.emit();
  }
}
