import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { SharedModule } from '../../shared/shared.module';
import { UserService} from '../../service/user.service';
import { CommanModule} from '../../_components/comman.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    SharedModule,CommanModule,
    CommonModule,
    LoginRoutingModule
  ],providers:[UserService]
})
export class LoginModule { }
