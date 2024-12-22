import { Component } from '@angular/core';

@Component({
  selector: 'app-invitation',
  templateUrl: './invitation.component.html',
  styleUrls: ['./invitation.component.scss']
})
export class InvitationComponent {

  nextStep(){}

  audio(){
    let audio = new Audio();
    audio.src = 'assets/audio/dreams.mp3';
    audio.load();
    audio.play();
  }
}
