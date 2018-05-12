import { Component, OnInit } from '@angular/core';
import { AccountService} from './../../services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers: [AccountService]
})
export class LoginComponent implements OnInit {
  loginData= {userName:'',pass:''}
  constructor( private AccountService : AccountService, private router: Router) { }

  ngOnInit() {
  }
  login(){
    this.AccountService.login(this.loginData).subscribe(data => {
      if(data['status']){
        this.AccountService.setAuthorizationHeader(data['data']);
        this.router.navigate(['/restSetup']);
      } else {
        console.log(data['data']);
      }
    });
  }

}
