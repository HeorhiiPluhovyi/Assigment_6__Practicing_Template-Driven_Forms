import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('formElement', { static: false }) singUpForm!: NgForm;
  user = {
    email: '',
    password: '',
    subscription: ''
  }

  defaultSubcription = 'advanced'
  showPassword = false;
  submited = false;

  onShowPassword() {
    this.showPassword = !this.showPassword;
  }

  onSubmit(formElement: NgForm) {
    this.submited = true;

    this.user.email = formElement.value.email;
    this.user.password = formElement.value.password;
    this.user.subscription = formElement.value.selectedSubscription;
  }
}
