import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  userModel = new user('Kiran',' kiranmungase99@gamil.com', 9765141857,'HTML','male',true);
  topics = ['SELECT','HTML', 'CSS', 'Angular', 'Javascript'];

  constructor() { }

  ngOnInit(): void {
  }

  OnFormSubmit(data:any){
    console.log(data)
  }

}
