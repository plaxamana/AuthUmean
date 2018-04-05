import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name: String;
  username: String;
  email: String;
  password: String;

  // When using a service, it must be injected into the constructor
  constructor(private validateService: ValidateService, private flashMessage: FlashMessagesService) { }

  ngOnInit() {
  }

  onRegisterSubmit(){
    const user = {
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password
    }

    const err = [];

    // Required Fields
    if(!this.validateService.validateRegister(user)){
      if(!user.name){
        err.push('NAME')
      }

      if(!user.email){
        err.push('EMAIL')
      }
      
      if(!user.username){
        err.push('USERNAME')
      }

      if(!user.password){
        err.push('PASSWORD')
      }

      this.flashMessage.show('Please fill in all fields: ' + err, {cssClass: 'alert-danger', timeout: 3000});
      return false;
    } 

    if(!this.validateService.validateEmail(user.email)){
      this.flashMessage.show('Please use a valid email', {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }
  }

  
}
