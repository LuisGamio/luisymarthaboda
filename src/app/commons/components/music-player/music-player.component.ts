import { Component } from '@angular/core';

@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.scss']
})
export class MusicPlayerComponent {
  playlist = [
    { title: 'Juntitos', url: 'assets/audio/juntitos.mp3' },
    { title: 'Somos', url: 'assets/audio/somos.mp3' },
    { title: 'Lista', url: 'assets/audio/lista.mp3' },
    { title: 'Dreams', url: 'assets/audio/dreams.mp3' }
  ];

  currentTrackIndex = 0;
  isPlaying = false;
  isShuffle = false;
  isRepeat = false;
  currentProgress = 0;

  playTrack(index: number): void {
    this.currentTrackIndex = index;
    this.playAudio();
  }

  playAudio(): void {
    const audioPlayer = document.querySelector('audio') as HTMLAudioElement;
    audioPlayer.src = this.playlist[this.currentTrackIndex].url;
    audioPlayer.play();
    this.isPlaying = true;

    audioPlayer.ontimeupdate = () => {
      this.currentProgress =
        (audioPlayer.currentTime / audioPlayer.duration) * 100 || 0;
    };

    audioPlayer.onended = () => {
      if (this.isRepeat) {
        this.playAudio();
      } else {
        this.playNext();
      }
    };
  }

  togglePlay(): void {
    const audioPlayer = document.querySelector('audio') as HTMLAudioElement;
    if (this.isPlaying) {
      audioPlayer.pause();
    } else {
      this.playAudio();
    }
    this.isPlaying = !this.isPlaying;
  }

  playNext(): void {
    if (this.isShuffle) {
      this.currentTrackIndex = Math.floor(
        Math.random() * this.playlist.length
      );
    } else {
      this.currentTrackIndex =
        (this.currentTrackIndex + 1) % this.playlist.length;
    }
    this.playAudio();
  }

  playPrevious(): void {
    this.currentTrackIndex =
      (this.currentTrackIndex - 1 + this.playlist.length) %
      this.playlist.length;
    this.playAudio();
  }

  toggleShuffle(): void {
    this.isShuffle = !this.isShuffle;
  }

  toggleRepeat(): void {
    this.isRepeat = !this.isRepeat;
  }

  updateProgress(event: Event): void {
    const audioPlayer = document.querySelector('audio') as HTMLAudioElement;
    const input = event.target as HTMLInputElement;
    audioPlayer.currentTime = (Number(input.value) / 100) * audioPlayer.duration;
    this.currentProgress = Number(input.value);
  }
}