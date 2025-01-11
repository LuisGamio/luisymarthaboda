import { AfterViewInit, Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-address-section',
  templateUrl: './address-section.component.html',
  styleUrls: ['./address-section.component.scss']
})
export class AddressSectionComponent implements OnInit, AfterViewInit {
  ceremonyLocation: string = 'https://maps.app.goo.gl/BFhSpoWHNYxFLpF67';
  receptionLocation: string = 'https://maps.app.goo.gl/8YGadjBnQ4EqKGvQA';

  // Método para abrir el mapa en una nueva ventana
  openMap(location: string): void {
    window.open(location, '_blank');
  }

  currentAnimation: string = 'animate__animated animate__fadeIn'; // Inicializa la animación

  ngOnInit(): void {
    setInterval(() => {
      this.toggleAnimation(); // Cambia la animación cada 3 segundos
    }, 3000); // 3000 ms = 3 segundos
  }

  toggleAnimation() {
    // Cambia entre animaciones
    if (this.currentAnimation === 'animate__animated animate__fadeIn') {
      this.currentAnimation = 'animate__animated animate__fadeOut';
    } else {
      this.currentAnimation = 'animate__animated animate__fadeIn';
    }
  }

  ngAfterViewInit(): void {
    this.animateText();
  }

  animateText() {
    const textElement = document.querySelector(".Sothardjo.text");  // Apunta a .Zachar.text

    // Usamos una animación secuencial con timeline de GSAP
    // gsap.timeline({
    //   repeat: -1,  // Repite indefinidamente
    //   yoyo: true   // Invierte la animación después de cada repetición
    // })
    //   .to(".Sothardjo.text:before", {
    //     duration: 2,              // Duración del efecto
    //     left: '100%',             // Movimiento hacia la derecha
    //     ease: "power1.inOut",     // Suaviza el movimiento
    //   })
    //   .to(textElement, {
    //     duration: 2,              // Cambio de color
    //     color: "rgb(240, 169, 37)",         // Cambia el color del texto
    //     ease: "none"
    //   })
    //   .to(".Sothardjo.text:before", {
    //     duration: 2,              // Hace que la sombra se mueva de vuelta
    //     left: '-100%',            // Regresa al inicio
    //     ease: "power1.inOut",
    //   })
    //   .to(textElement, {
    //     duration: 2,              // Regresa al color original
    //     color: "rgb(93, 60, 238)",         // Color original del texto
    //     ease: "none"
    //   })
    //   .to(".Sothardjo.text:before", {
    //     duration: 2,              // Duración del efecto
    //     left: '100%',             // Movimiento hacia la derecha
    //     ease: "power1.inOut",     // Suaviza el movimiento
    //   })
    //   .to(textElement, {
    //     duration: 2,              // Cambio de color
    //     color: "rgb(240, 169, 37)",         // Cambia el color del texto
    //     ease: "none"
    //   })
    //   .to(".Sothardjo.text:before", {
    //     duration: 2,              // Hace que la sombra se mueva de vuelta
    //     left: '-100%',            // Regresa al inicio
    //     ease: "power1.inOut",
    //   })
    //   .to(textElement, {
    //     duration: 2,              // Regresa al color original
    //     color: "rgb(107, 13, 214)",         // Color original del texto
    //     ease: "none"
    //   });





    gsap.timeline({
      repeat: -1,
      yoyo: true
    })
      .to(".Sothardjo.text:before", {
        duration: 2,
        left: '0%',
        ease: "power1.inOut"
      })
      .to(".Sothardjo.text", {
        duration: 2,
        color: "rgb(240, 169, 37)",
        ease: "none"
      })
      .to(".Sothardjo.text:before", {
        duration: 2,
        left: '-100%',
        ease: "power1.inOut"
      });

  }
}
