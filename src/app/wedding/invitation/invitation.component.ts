import { Component } from '@angular/core';

@Component({
  selector: 'app-invitation',
  templateUrl: './invitation.component.html',
  styleUrls: ['./invitation.component.scss']
})
export class InvitationComponent {

  step: number = 1;

  nextStep(){
    this.step = 2;
  }

  audio(){
    let audio = new Audio();
    audio.src = 'assets/audio/dreams.mp3';
    audio.load();
    audio.play();
    this.step = 2;
  }
}
