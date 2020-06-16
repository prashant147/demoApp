import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { UserService} from '../../service/user.service';
import { SharedModule} from '../../_components/shared.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    SharedModule,SharedModule,
    CommonModule,
    LoginRoutingModule
  ],providers:[UserService]
})
export class LoginModule { }
