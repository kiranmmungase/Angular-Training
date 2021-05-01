import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { user } from 'src/app/user';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  
  /* userModel = new user('Kiran',' kiranmungase99@gamil.com', 9765141857,'HTML','male',true);
  topics = ['SELECT','HTML', 'CSS', 'Angular', 'Javascript']; */
  constructor(private fb: FormBuilder) { }
  userForm = this.fb.group({
    username: ['', [Validators.required]],
    password:['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
    confirmPassword: []
  });



  ngOnInit(): void {
  }
 onFormSubmit(data:any){
    console.log(data);
  }
}
