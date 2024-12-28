import { Component } from '@angular/core';

@Component({
  selector: 'app-gift-section',
  templateUrl: './gift-section.component.html',
  styleUrls: ['./gift-section.component.scss']
})
export class GiftSectionComponent {

  copied1 = false; // Primer número de cuenta
  copied2 = false; // Segundo número de cuenta
  copied3 = false; // Tercer número de cuenta
  copied4 = false; // Cuarto número de cuenta
  copied5 = false; // Para el número 970 855 626

  copyToClipboard(text: string, copiedVar: 'copied1' | 'copied2' | 'copied3' | 'copied4' | 'copied5'): void {
    navigator.clipboard.writeText(text).then(() => {
      this[copiedVar] = true; // Cambia el estado a "Copiado"
      setTimeout(() => {
        this[copiedVar] = false; // Vuelve al estado original después de 2 segundos
      }, 2000);
    });
  }
}
