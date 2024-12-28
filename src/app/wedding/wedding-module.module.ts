import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InvitationComponent } from './invitation/invitation.component';
import { WeddingModuleRoutingModule } from './wedding-routing.module';
import { CommonsModule } from '../commons/commons.module';
import { WelcomeSectionComponent } from './components/welcome-section/welcome-section.component';
import { DateSectionComponent } from './components/date-section/date-section.component';
import { AssistanceSectionComponent } from './components/assistance-section/assistance-section.component';
import { GiftSectionComponent } from './components/gift-section/gift-section.component';
import { TimelineSectionComponent } from './components/timeline-section/timeline-section.component';
import { AddressSectionComponent } from './components/address-section/address-section.component';
import { DressCodeSectionComponent } from './components/dress-code-section/dress-code-section.component';
import { ParentsSectionComponent } from './components/parents-section/parents-section.component';
import { IntroductionSectionComponent } from './components/introduction-section/introduction-section.component';



@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    InvitationComponent,
    WelcomeSectionComponent,
    DateSectionComponent,
    AssistanceSectionComponent,
    GiftSectionComponent,
    TimelineSectionComponent,
    AddressSectionComponent,
    DressCodeSectionComponent,
    ParentsSectionComponent,
    IntroductionSectionComponent
  ],
  imports: [
    CommonModule,
    WeddingModuleRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CommonsModule
  ],
  exports: [InvitationComponent,
    WelcomeSectionComponent,
    DateSectionComponent,
    InvitationComponent,
    GiftSectionComponent,
    AddressSectionComponent,
    DressCodeSectionComponent,
    ParentsSectionComponent,
    IntroductionSectionComponent]
})
export class WeddingModule {}
