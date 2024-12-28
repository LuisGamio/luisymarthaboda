import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invitation',
  templateUrl: './invitation.component.html',
  styleUrls: ['./invitation.component.scss']
})
export class InvitationComponent implements OnInit {
  loading:boolean = true;
  introduction:boolean = true;

  ngOnInit(): void {
    // Espera a que todas las imágenes y recursos se carguen
    window.addEventListener('load', () => {
      setTimeout(() => {
        this.loading = false; // Oculta el loading
      }, 2000); // Tiempo adicional para una mejor transición (opcional)
    });
  }
  musicPlay:boolean = false;

  onPlay(music: boolean): void {
    this.musicPlay= music;
    this.introduction = false; // Actualiza la variable según sea necesario
  }
}
