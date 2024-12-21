import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { InvitationComponent } from './invitation/invitation.component';
import { CommonsModule } from '../commons/commons.module';
const routes: Routes = [
  {
        path: '',
        component: InvitationComponent,
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes),CommonsModule],
  exports: [RouterModule],
})
export class WeddingModuleRoutingModule {}
