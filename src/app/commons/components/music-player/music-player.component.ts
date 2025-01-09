import { Component, Input, OnChanges, SimpleChanges, ChangeDetectorRef, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.scss']
})
export class MusicPlayerComponent implements OnChanges {
  @ViewChild('audioPlayer', { static: false }) audioPlayer!: ElementRef<HTMLAudioElement>;

  playlist = [
    { title: 'Juntitos', url: 'assets/audio/juntitos.mp3' },
    { title: 'Somos', url: 'assets/audio/somos.mp3' },
    { title: 'Lista', url: 'assets/audio/lista.mp3' },
    { title: 'Dreams', url: 'assets/audio/dreams.mp3' }
  ];

  ngAfterViewInit() {
    // Aquí puedes acceder correctamente al audioPlayer después de que el componente haya sido inicializado.
    const audioPlayer = this.audioPlayer.nativeElement;
    audioPlayer.ontimeupdate = () => {
      this.currentProgress =
        (audioPlayer.currentTime / audioPlayer.duration) * 100 || 0;
    };
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['musicPlay'] && changes['musicPlay'].currentValue === true) {
      this.isPlaying = true;
      this.playAudio(true);
    } else if (changes['musicPlay'] && changes['musicPlay'].currentValue === false) {
      // this.audioPlayer.nativeElement.pause();
      this.isPlaying = false;
    }
  }


  @Input() musicPlay:boolean = false;

  currentTrackIndex = 0;
  isPlaying = false;
  isShuffle = false;
  isRepeat = false;
  currentProgress = 0;

  playTrack(index: number): void {
    this.currentTrackIndex = index;
    this.playAudio();
  }



//   togglePlay(): void {
//   const audioPlayer = document.querySelector('audio') as HTMLAudioElement;
//   if (this.isPlaying) {
//     this.isPlaying=false;
//     audioPlayer.pause();

//   } else {
//     this.isPlaying=true;
//     this.playAudio();
//   }

//   this.cdRef.detectChanges();
// }


// playAudio(): void {
//   const audioPlayer = document.querySelector('audio') as HTMLAudioElement;
//   audioPlayer.src = this.playlist[this.currentTrackIndex].url;
//   audioPlayer.play();
//   this.isPlaying = true;

//   audioPlayer.ontimeupdate = () => {
//     this.currentProgress =
//       (audioPlayer.currentTime / audioPlayer.duration) * 100 || 0;
//   };

//   audioPlayer.onended = () => {
//     if (this.isRepeat) {
//       this.playAudio();
//     } else {
//       this.playNext();
//     }
//   };
// }



constructor(private cdRef: ChangeDetectorRef){}

  // playNext(): void {
  //   if (this.isShuffle) {
  //     this.currentTrackIndex = Math.floor(
  //       Math.random() * this.playlist.length
  //     );
  //   } else {
  //     this.currentTrackIndex =
  //       (this.currentTrackIndex + 1) % this.playlist.length;
  //   }
  //   this.playAudio();
  // }

  // playPrevious(): void {
  //   this.currentTrackIndex =
  //     (this.currentTrackIndex - 1 + this.playlist.length) %
  //     this.playlist.length;
  //   this.playAudio();
  // }

  // togglePlay(): void {
  //   const audioPlayer = document.querySelector('audio') as HTMLAudioElement;

  //   if (this.isPlaying) {
  //     // Pausar el audio
  //     audioPlayer.pause();
  //     this.isPlaying = false;
  //   } else {
  //     // Reanudar o iniciar reproducción
  //     if (!audioPlayer.src || audioPlayer.src !== this.playlist[this.currentTrackIndex].url) {
  //       this.playAudio(true); // Reproducir desde el principio si el src no coincide
  //     } else {
  //       audioPlayer.play(); // Reanudar desde el punto actual
  //     }
  //     this.isPlaying = true;
  //   }

  //   this.cdRef.detectChanges();
  // }

  // playAudio(resetProgress: boolean = false): void {
  //   const audioPlayer = document.querySelector('audio') as HTMLAudioElement;

  //   if (resetProgress || audioPlayer.src !== this.playlist[this.currentTrackIndex].url) {
  //     audioPlayer.src = this.playlist[this.currentTrackIndex].url;
  //     audioPlayer.currentTime = 0; // Reinicia el progreso si es necesario
  //   }

  //   audioPlayer.play();
  //   this.isPlaying = true;

  //   audioPlayer.ontimeupdate = () => {
  //     this.currentProgress =
  //       (audioPlayer.currentTime / audioPlayer.duration) * 100 || 0;
  //   };

  //   audioPlayer.onended = () => {
  //     if (this.isRepeat) {
  //       this.playAudio(true);
  //     } else {
  //       this.playNext();
  //     }
  //   };
  // }

  togglePlay(): void {
    const audioPlayer = document.querySelector('audio') as HTMLAudioElement;

    if (this.isPlaying) {
      // Pausar el audio
      audioPlayer.pause();
      this.isPlaying = false;
    } else {
      // Reanudar desde el punto actual
      audioPlayer.play();
      this.isPlaying = true;
    }

    this.cdRef.detectChanges();
  }


  playAudio(resetSrc: boolean = false): void {
    console.log("ingrese con:", resetSrc);
    const audioPlayer = document.querySelector('audio') as HTMLAudioElement;

    if (resetSrc || audioPlayer.src !== this.playlist[this.currentTrackIndex].url) {
      console.log("Reiniciando audio con resetSrc:", resetSrc);
      audioPlayer.src = this.playlist[this.currentTrackIndex].url; // Asegura que el src esté configurado
      audioPlayer.currentTime = 0; // Reiniciar progreso
    }

    audioPlayer
      .play()
      .then(() => {
        console.log("Reproducción iniciada correctamente");
        this.isPlaying = true;
      })
      .catch((error) => {
        console.error("Error al reproducir el audio:", error);
      });

    // Actualizar progreso durante la reproducción
    audioPlayer.ontimeupdate = () => {
      this.currentProgress =
        (audioPlayer.currentTime / audioPlayer.duration) * 100 || 0;
    };

    // Manejar el fin de la pista
    audioPlayer.onended = () => {
      console.log("Fin de la pista. Repetir:", this.isRepeat);
      if (this.isRepeat) {
        this.playAudio(true); // Reinicia la misma canción
      } else {
        this.playNext(); // Pasa a la siguiente canción
      }
    };
  }


// Si this.isRepeat es true, que el siguiente metodo coloque la misma cancion:

  // playNext(): void {
  //   const audioPlayer = document.querySelector('audio') as HTMLAudioElement;

  //   if (this.isShuffle) {
  //     this.currentTrackIndex = Math.floor(
  //       Math.random() * this.playlist.length
  //     );
  //   } else {
  //     this.currentTrackIndex =
  //       (this.currentTrackIndex + 1) % this.playlist.length;
  //   }

  //   audioPlayer.src = this.playlist[this.currentTrackIndex].url; // Cambiar de canción
  //   audioPlayer.currentTime = 0; // Reiniciar el progreso
  //   this.playAudio(true); // Reproducir la nueva canción
  // }


  playNext(): void {
    const audioPlayer = document.querySelector('audio') as HTMLAudioElement;

    if (this.isRepeat) {
      // Si está activado el modo de repetición, reinicia la canción actual
      console.log("Reproduciendo de nuevo la misma canción");
      this.playAudio(true); // Reproducir la misma canción
    } else {
      if (this.isShuffle) {
        this.currentTrackIndex = Math.floor(
          Math.random() * this.playlist.length
        );
      } else {
        this.currentTrackIndex =
          (this.currentTrackIndex + 1) % this.playlist.length;
      }

      audioPlayer.src = this.playlist[this.currentTrackIndex].url; // Cambiar a la siguiente canción
      audioPlayer.currentTime = 0; // Reiniciar el progreso
      this.playAudio(true); // Reproducir la nueva canción
    }
  }


  playPrevious(): void {
    const audioPlayer = document.querySelector('audio') as HTMLAudioElement;

    if (this.isRepeat) {
      // Si está activado el modo de repetición, reinicia la canción actual
      console.log("Reproduciendo de nuevo la misma canción");
      this.playAudio(true); // Reproducir la misma canción
    } else {
      // Avanzar a la canción anterior
      this.currentTrackIndex =
        (this.currentTrackIndex - 1 + this.playlist.length) % this.playlist.length;

      audioPlayer.src = this.playlist[this.currentTrackIndex].url; // Cambiar a la canción anterior
      audioPlayer.currentTime = 0; // Reiniciar el progreso
      this.playAudio(true); // Reproducir la nueva canción
    }
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
