import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ButtonComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgFor,
    NgIf,

  ],
  exports:[ButtonComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CommonsModule { }
