import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
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
