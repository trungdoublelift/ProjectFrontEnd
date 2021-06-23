import { Observable } from 'rxjs';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  providers: [AuthService],
})
export class NavComponent implements OnInit {
  user?: any;
  constructor(private auth: AuthService, private router: Router) {
    this.auth.userInfo.subscribe((data) => {
      return (this.user = data);
    });
  }

  ngOnInit(): void {
    this.addEmployee();
  }

  linkPage(path: any) {
    this.router.navigate(['/add']);
  }
  logOut() {
    this.auth.logout();
  }
  async addEmployee() {
    await this.auth.userInfo.subscribe(async (data) => {
      await this.auth.addEmployee(data.uid, data.displayName);
    });
  }
  navigatePage(data: string) {
    switch (data) {
      case 'sinhvien': {
        this.router.navigate(['/infopage']);
        break;
      }
      case 'nhanvien': {
        this.router.navigate(['/employeeInfo']);
        break;
      }
    }
  }
}
