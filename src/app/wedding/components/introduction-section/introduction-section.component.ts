import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-introduction-section',
  templateUrl: './introduction-section.component.html',
  styleUrls: ['./introduction-section.component.scss']
})
export class IntroductionSectionComponent {

  @Output() playEvent = new EventEmitter<boolean>();

  play(music:boolean){

    this.playEvent.emit(music);
  }

}
