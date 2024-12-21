import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InvitationComponent } from './invitation/invitation.component';
import { WeddingModuleRoutingModule } from './wedding-routing.module';
import { CommonsModule } from '../commons/commons.module';



@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    InvitationComponent
  ],
  imports: [
    CommonModule,
    WeddingModuleRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CommonsModule
  ],
  exports: [InvitationComponent]
})
export class WeddingModule {}
