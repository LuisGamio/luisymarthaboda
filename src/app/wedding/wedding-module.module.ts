import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InvitationComponent } from './invitation/invitation.component';
import { WeddingModuleRoutingModule } from './wedding-routing.module';
import { CommonsModule } from '../commons/commons.module';
import { WelcomeSectionComponent } from './components/welcome-section/welcome-section.component';
import { DateSectionComponent } from './components/date-section/date-section.component';



@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    InvitationComponent,
    WelcomeSectionComponent,
    DateSectionComponent
  ],
  imports: [
    CommonModule,
    WeddingModuleRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CommonsModule
  ],
  exports: [InvitationComponent,WelcomeSectionComponent,DateSectionComponent]
})
export class WeddingModule {}
