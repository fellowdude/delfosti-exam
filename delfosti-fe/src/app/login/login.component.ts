import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup= new FormGroup({
    user_code: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required])
  });
  loadingLogin: boolean = false;

  constructor(private loginService: LoginService, private route: Router){}

  login(): void {
    this.loadingLogin = true;
    if(this.loginForm.valid){
      this.loginService.login(this.loginForm.value).subscribe({
        next: (result: any)=>{
          console.log(result);
          localStorage.setItem('jwt', result.token);
          this.route.navigate(['/users'])
        },
        error: (error)=>{
          console.log(error);
        },
        complete: () =>{
          this.loadingLogin = false;
        }
      })
    }
  }
}
