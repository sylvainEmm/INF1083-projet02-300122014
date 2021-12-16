import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../model/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  public message: string = '';
  public user: User;

  constructor(private userService: UserService) {
    this.user = {
      
      email:'sylvain@gmail.com',
      password: '123456',
      phone:'4384101475',
    };
  }

  register() {
    //this.userService.register(this.username, this.password, this.name)
    let valid = false;

    if (this.user.phone) valid = true;
    if (this.user.email) valid = true;
    if (this.user.password) valid = true;
    if (this.user.phone !== "" && this.user.phone.length == 10 ) valid = valid && true;
    if (this.user.password !== "" && this.user.password.length > 6  ) valid = valid && true;

 /*  if (!valid) {
      this.message = "Le formulaire n'est pas valide";
      return;
    }
    */

    this.userService.create(this.user)
      .subscribe((resp) => {
        console.log('Successfully registered');
        this.message = resp.msg;
      }, (err) => {
        console.error('Error registering', err);
        this.message = err.error.msg;
      });
  }
}
