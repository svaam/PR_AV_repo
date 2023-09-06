import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { UserDetailsService } from '../user-details.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userData: any[] = [];
  constructor(private userDetailsSVC: UserDetailsService, private route: Router) { }

  ngOnInit(): void {
    this.getUserDetailsData();
  }

  getUserDetailsData(){
    this.userDetailsSVC.getUserDetails().subscribe((res: any) => {
      console.log('222 user => ', res);
      this.userData = res;
    })
  }

  getUserProfile(value: any) {
    console.log('222 3 = ',value)
    this.route.navigate(['user-profile',value])
  }

}
