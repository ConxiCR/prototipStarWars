import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'src/app/auth/interface/auth.interface';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 //esta propiedad siempre va a tener un valor
  //auth!: Auth;
  get auth(): Auth{
    return this.AuthService.auth;
  }
  constructor( private router: Router,
               private AuthService: AuthService) { }

  ngOnInit(): void {
  }
  logout(){
    this.router.navigate(['./auth']);
  }
}
