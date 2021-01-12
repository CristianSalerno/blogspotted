import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})



export class NavbarComponent implements OnInit {
  isLogged:any= this.getToken();
  token:string

  constructor() { 

  }

  ngOnInit() { 
  }

  private getToken(): boolean {

    if( localStorage.getItem("ACCESS_TOKEN") !== null ){
      this.token = localStorage.getItem("ACCESS_TOKEN");
      return true;
    }
    return false;
  }

   logout(){
    this.token = '';
    localStorage.removeItem("ACCESS_TOKEN");
    localStorage.removeItem("EXPIRES_IN");
  }

}
