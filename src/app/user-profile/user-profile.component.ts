import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserDetailsService } from '../user-details.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  userProfileData: any = {};
  dummyData = {
    avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
    login: "mojombo"
  }
  constructor(private router: ActivatedRoute, private userDetailsSVC: UserDetailsService) { }

  ngOnInit(): void {
    this.router.params.subscribe(res => {
      console.log('333 prof ', res);
      this.getUserProfileDetails(res);
    })
  }

  getUserProfileDetails(data: any){
    const userProUrl = data?.url;
    this.userDetailsSVC.getUserProfileDtls(userProUrl).subscribe(res => {
      console.log('333 u pr ', res);
      this.userProfileData = res;
    })
  }


}
