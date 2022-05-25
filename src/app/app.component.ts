import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public title = "Login"
  constructor(private fb: FormBuilder) {}
  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: [
      '',
      [
        Validators.required,
        Validators.pattern(
          '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}'
        ),
      ],
    ],
  });

  onLogin() {
    if (this.loginForm.controls['email'].errors?.['required']) {
      return alert('Please Input the Email address');
    } else if (this.loginForm.controls['password'].errors?.['required']) {
      return alert('Please Input the Password');
    } else if (this.loginForm.controls['email'].errors?.['email']) {
      return alert('Enter valid Email address');
    } else if (this.loginForm.controls['password'].errors?.['pattern']) {
      return alert('Enter password according to given requirements');
    } else {
      alert(
        `Hey!! You SignedIn Successfully!!
        email: ${this.loginForm.value.email}
        password: ${this.loginForm.value.password}`
      );
      this.loginForm.reset();
    }
  }
}
