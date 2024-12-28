import { Component } from '@angular/core';

@Component({
  selector: 'app-address-section',
  templateUrl: './address-section.component.html',
  styleUrls: ['./address-section.component.scss']
})
export class AddressSectionComponent {
  ceremonyLocation: string = 'https://maps.app.goo.gl/BFhSpoWHNYxFLpF67';
  receptionLocation: string = 'https://maps.app.goo.gl/8YGadjBnQ4EqKGvQA';

  // Método para abrir el mapa en una nueva ventana
  openMap(location: string): void {
    window.open(location, '_blank');
  }
}
