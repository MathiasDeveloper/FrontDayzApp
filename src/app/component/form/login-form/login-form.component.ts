import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../service/auth.service";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  form: any = {
    name: null,
    password: null
  };

  isSuccessful = false;
  isSignUpFailed = false;


  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  onSubmit()
  {
    const {name, password} = this.form;
    this.authService.login(name, password).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      }
    )
  }

}
