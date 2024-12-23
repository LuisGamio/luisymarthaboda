import { Component } from '@angular/core';

@Component({
  selector: 'app-assistance-section',
  templateUrl: './assistance-section.component.html',
  styleUrls: ['./assistance-section.component.scss']
})
export class AssistanceSectionComponent {

  confirmar(){
    //Enviar mensaje de confirmacion a whatsapp
    window.open('https://wa.me/+51970855626?text=Hola%20quiero%20confirmar%20mi%20asistencia%20a%20la%20boda', '_blank');
  }
}
