import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  readonly userDtlsUrl = 'https://api.github.com/users'

  constructor(private httpClient: HttpClient) { }


  getUserDetails() {
    return this.httpClient.get(this.userDtlsUrl);
  }

  getUserProfileDtls(url: string) {
    return this.httpClient.get(url)
  }
}
