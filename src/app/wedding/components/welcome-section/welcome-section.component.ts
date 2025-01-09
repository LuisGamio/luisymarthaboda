import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-welcome-section',
  templateUrl: './welcome-section.component.html',
  styleUrls: ['./welcome-section.component.scss']
})
export class WelcomeSectionComponent implements OnInit, AfterViewInit  {

  @Input() musicPlay:boolean = false;

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
    const textElement = document.querySelector(".Aragon.text");  // Apunta a .Zachar.text

    // Usamos una animación secuencial con timeline de GSAP
    gsap.timeline({
      repeat: -1,  // Repite indefinidamente
      yoyo: true   // Invierte la animación después de cada repetición
    })
      .to(".Aragon.text:before", {
        duration: 2,              // Duración del efecto
        left: '100%',             // Movimiento hacia la derecha
        ease: "power1.inOut",     // Suaviza el movimiento
      })
      .to(textElement, {
        duration: 2,              // Cambio de color
        color: "#FF8C00",         // Cambia el color del texto
        ease: "none"
      })
      .to(".Aragon.text:before", {
        duration: 2,              // Hace que la sombra se mueva de vuelta
        left: '-100%',            // Regresa al inicio
        ease: "power1.inOut",
      })
      .to(textElement, {
        duration: 2,              // Regresa al color original
        color: "rgb(107, 13, 214)",         // Color original del texto
        ease: "none"
      });
  }
}
