import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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

  myform: FormGroup;

  constructor(private fb: FormBuilder){
    this.myform = this.fb.group({
      interbank: ['5313091148299'],
      interbankCCI: ['00237019192671601950'],
      bcp: ['37091926716019'],
      bcpCCI: ['00237019192671601950'],
      yapePlin: ['970855626']
    })
  }

  copyToClipboard(text: string, copiedVar: 'copied1' | 'copied2' | 'copied3' | 'copied4' | 'copied5'): void {
    navigator.clipboard.writeText(text).then(() => {
      this[copiedVar] = true; // Cambia el estado a "Copiado"
      setTimeout(() => {
        this[copiedVar] = false; // Vuelve al estado original después de 2 segundos
      }, 2000);
    });
  }

  copy(field:string){
    const txt=this.myform.controls[field].value;
    navigator.clipboard.writeText(txt).then(() => {
      // Cambia el valor de ese controls a "Copiado" por 2 segundos y luego vuelve a la normalidad
      this.myform.controls[field].setValue('¡Copiado!');
      setTimeout(() => {
        this.myform.controls[field].setValue(txt);
      }, 2000);
    });

  }
}
