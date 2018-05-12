import { Component, OnInit } from '@angular/core';
import { AccountService} from './../../services/account.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  providers: [AccountService]
})
export class HeaderComponent implements OnInit {

  constructor(private AccountService: AccountService, private router: Router) { }

  ngOnInit() {
  }

  logout(){
    this.AccountService.logout();
    this.router.navigate(['/login']);
  }

}
