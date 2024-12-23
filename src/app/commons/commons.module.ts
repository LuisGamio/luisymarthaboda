import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AudioPlayerComponent } from './components/audio-player/audio-player.component';



@NgModule({
  declarations: [ButtonComponent, AudioPlayerComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgFor,
    NgIf,

  ],
  exports:[ButtonComponent,AudioPlayerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CommonsModule { }
