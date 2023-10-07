import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-login-base',
  templateUrl: './login-base.component.html',
  styleUrls: ['./login-base.component.scss']
})
export class LoginBaseComponent {

  @Input() isLoading: boolean | undefined = true;
  @Input() isAnimated: string = 'animatedFast fadeInRight';

  logoLogin = '../../../../../../assets/img/login/iicana-logo.svg';

}
