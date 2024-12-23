import { Component } from '@angular/core';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss']
})
export class AudioPlayerComponent {
  isPlaying = false;
  isFavorite = false;

  togglePlay(audio: HTMLAudioElement): void {
    if (this.isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    this.isPlaying = !this.isPlaying;
  }

  toggleHeart(): void {
    this.isFavorite = !this.isFavorite;
  }
}
